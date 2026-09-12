#!/usr/bin/env python3
"""
DailyEnglish 统一服务器：静态文件 + TTS API
- 静态文件服务（替代 python http.server）
- /tts 端点：用 edge-tts 生成自然语音 MP3
"""
import os
import sys
import json
import uuid
import hashlib
import asyncio
import functools
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs, unquote

# edge-tts
import edge_tts

# 阿里云百炼(DashScope)语音识别 API Key：云平台通过环境变量注入，禁止硬编码
DASHSCOPE_API_KEY = os.environ.get("DASHSCOPE_API_KEY", "")

# 代理：本地开发用 18080，云平台通过环境变量配置（不配置则直连）
PROXY = os.environ.get("HTTP_PROXY") or os.environ.get("https_proxy") or ""
# 端口：优先用环境变量 PORT（云平台注入），其次命令行参数
PORT = int(os.environ.get("PORT") or (sys.argv[1] if len(sys.argv) > 1 else 8000))
WEB_ROOT = os.path.dirname(os.path.abspath(__file__))
CACHE_DIR = os.path.join(WEB_ROOT, "tts_cache")
os.makedirs(CACHE_DIR, exist_ok=True)
# 语音识别临时音频目录：用户录音短暂存放在此，供 DashScope 通过公网 URL 拉取识别后即删
STT_TMP_DIR = os.path.join(WEB_ROOT, "stt_tmp")
os.makedirs(STT_TMP_DIR, exist_ok=True)
# STT 模型：paraformer-v1 支持 webm/opus 等常见格式、任意采样率、中英文
STT_MODEL = os.environ.get("STT_MODEL", "paraformer-v1")
STT_MAX_FILE = 50 * 1024 * 1024  # 单条录音上限 50MB

# 可用语音（Jenny 默认，类似豆包的自然女声）
VOICES = {
    "jenny": "en-US-JennyNeural",       # 女声，自然亲切（默认，类似豆包）
    "aria": "en-US-AriaNeural",         # 女声，温暖
    "guy": "en-US-GuyNeural",           # 男声，自然
    "davis": "en-US-DavisNeural",       # 男声
    "amber": "en-US-AmberNeural",       # 女声
    "emma": "en-GB-EmmaNeural",         # 英式女声
    "brian": "en-GB-BrianNeural",       # 英式男声
}

# 速率映射（rate: 1=正常→+0%, 0.6=慢速→-40%, 1.5=快→+50%）
def rate_to_pct(rate):
    r = float(rate) if rate else 1.0
    pct = round((r - 1) * 100)
    return f"+{pct}%" if pct >= 0 else f"{pct}%"

# 音量映射（volume: 0~1）
def vol_to_pct(volume):
    v = float(volume) if volume else 1.0
    return f"+{round(v * 100)}%"

async def generate_tts(text, voice_key, rate, volume):
    """用 edge-tts 生成 MP3 音频"""
    voice = VOICES.get(voice_key, VOICES["jenny"])
    rate_str = rate_to_pct(rate)
    vol_str = vol_to_pct(volume)
    kwargs = dict(text=text, voice=voice, rate=rate_str, volume=vol_str)
    if PROXY:
        kwargs['proxy'] = PROXY
    communicate = edge_tts.Communicate(**kwargs)
    # 生成到内存
    import io
    buf = io.BytesIO()
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            buf.write(chunk["data"])
    return buf.getvalue()

# ---------- 语音识别（STT）----------

def _extract_transcript(output):
    """从 DashScope 录音文件识别结果中提取最终识别文字（健壮解析）。"""
    if isinstance(output, str):
        try:
            output = json.loads(output)
        except Exception:
            return ""
    if not isinstance(output, dict):
        return ""
    texts = []

    def walk(node):
        if isinstance(node, dict):
            # 常见结构：output.sub_tasks[].result.transcripts[].text
            if "text" in node and isinstance(node["text"], str) and node["text"].strip():
                texts.append(node["text"].strip())
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)

    walk(output)
    # 去重拼接（不同层级可能重复出现同一句）
    seen, out = set(), []
    for t in texts:
        if t not in seen:
            seen.add(t)
            out.append(t)
    return " ".join(out)

def handle_stt(body_bytes, host_header):
    """核心：将用户录音提交给 DashScope 录音文件识别，返回识别文本。
    返回 (text, error)：
      - text: 识别到的文字（可能为空）
      - error: '' 成功 / 'no_key' 未配置Key / 其他异常文案
    """
    if not DASHSCOPE_API_KEY:
        return "", "no_key"
    import dashscope
    dashscope.api_key = DASHSCOPE_API_KEY
    # 1) 保存临时音频文件，构造公网可访问 URL（DashScope 会经公网拉取该文件）
    fname = uuid.uuid4().hex + ".webm"
    path = os.path.join(STT_TMP_DIR, fname)
    try:
        with open(path, "wb") as f:
            f.write(body_bytes)
        host = host_header or "localhost"
        public_url = f"https://{host}/stt_audio/{fname}"
        # 2) 提交录音文件识别任务（异步），等待任务结束
        task_response = dashscope.audio.asr.Transcription.async_call(
            model=STT_MODEL,
            file_urls=[public_url],
        )
        task_id = task_response.output.task_id
        result = dashscope.audio.asr.Transcription.wait(
            task=task_id, poll_interval=1
        )
        text = _extract_transcript(result.output if hasattr(result, "output") else result)
        return text, ""
    except Exception as e:
        return "", str(e)
    finally:
        # 3) 识别完成后删除临时音频，避免长期占磁盘
        try:
            if os.path.exists(path):
                os.remove(path)
        except Exception:
            pass

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_ROOT, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/tts":
            self.handle_tts(parse_qs(parsed.query))
        elif parsed.path.startswith("/stt_audio/"):
            # 临时公开用户录音，供 DashScope 拉取识别（识别后即删）
            self.handle_stt_audio(parsed.path)
        else:
            super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        content_len = int(self.headers.get('Content-Length', 0))
        if parsed.path == "/tts":
            body = self.rfile.read(content_len).decode('utf-8')
            try:
                data = json.loads(body)
                self.handle_tts_dict(data)
            except json.JSONDecodeError:
                self.send_error(400, "Invalid JSON body")
        elif parsed.path == "/stt":
            self.handle_stt_post(self.rfile.read(content_len))
        else:
            self.send_error(404, "Not found")

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def handle_stt_post(self, body):
        # 校验音频大小
        if len(body) > STT_MAX_FILE:
            self._send_json(413, {"error": "file_too_large"})
            return
        if len(body) < 100:
            self._send_json(400, {"error": "empty_audio"})
            return
        try:
            text, err = handle_stt(body, self.headers.get("Host", ""))
            if err == "no_key":
                self._send_json(503, {"error": "no_key"})
            elif err:
                self._send_json(500, {"error": err})
            else:
                self._send_json(200, {"text": text})
        except Exception as e:
            self._send_json(500, {"error": str(e)})

    def handle_stt_audio(self, path):
        # 仅允许读取 stt_tmp 下的音频文件，防止路径穿越
        name = path[len("/stt_audio/"):]
        if not name or "/" in name or "\\" in name:
            self.send_error(404, "Not found")
            return
        file_path = os.path.join(STT_TMP_DIR, name)
        if not os.path.isfile(file_path):
            self.send_error(404, "Not found")
            return
        try:
            with open(file_path, "rb") as f:
                data = f.read()
        except Exception:
            self.send_error(404, "Not found")
            return
        self.send_response(200)
        self.send_header("Content-Type", "audio/webm")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(data)

    def _send_json(self, status, obj):
        data = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(data)

    def handle_tts(self, params):
        text = params.get("text", [""])[0]
        text = unquote(text)
        if not text:
            self.send_error(400, "Missing 'text' parameter")
            return
        voice_key = params.get("voice", ["jenny"])[0]
        rate = params.get("rate", ["1"])[0]
        volume = params.get("volume", ["1"])[0]
        self._generate_and_send(text, voice_key, rate, volume)

    def handle_tts_dict(self, data):
        text = data.get("text", "")
        if not text:
            self.send_error(400, "Missing 'text' field")
            return
        voice_key = data.get("voice", "jenny")
        rate = data.get("rate", "1")
        volume = data.get("volume", "1")
        self._generate_and_send(text, voice_key, rate, volume)

    def _generate_and_send(self, text, voice_key, rate, volume):
        # 缓存 key
        cache_key = hashlib.md5(f"{text}|{voice_key}|{rate}|{volume}".encode()).hexdigest()
        cache_path = os.path.join(CACHE_DIR, f"{cache_key}.mp3")

        # 先查缓存
        if os.path.exists(cache_path):
            with open(cache_path, "rb") as f:
                audio_data = f.read()
            self.send_audio(audio_data)
            return

        # 生成新音频
        try:
            audio_data = asyncio.run(generate_tts(text, voice_key, rate, volume))
            if not audio_data:
                self.send_error(500, "TTS generation failed: empty audio")
                return
            with open(cache_path, "wb") as f:
                f.write(audio_data)
            self.send_audio(audio_data)
        except Exception as e:
            self.send_error(500, f"TTS error: {str(e)}")

    def send_audio(self, data):
        self.send_response(200)
        self.send_header("Content-Type", "audio/mpeg")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Cache-Control", "public, max-age=86400")
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, format, *args):
        # 简化日志
        msg = format % args
        if "/tts" in msg or "/stt" in msg or "GET / " in msg or "404" in msg or "500" in msg:
            print(f"[{self.log_date_time_string()}] {msg}")

    def end_headers(self):
        # 为静态文件添加 CORS
        self.send_header("Access-Control-Allow-Origin", "*")
        # 对 JS/CSS 文件禁用缓存，确保浏览器总是获取最新版本
        clean_path = self.path.split('?')[0]
        if clean_path.endswith(('.js', '.css')):
            self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
            self.send_header("Pragma", "no-cache")
            self.send_header("Expires", "0")
        super().end_headers()

class ThreadingHTTPServer(HTTPServer):
    """支持并发的 HTTP 服务器"""
    pass

if __name__ == "__main__":
    # 使用 ThreadingMixIn 支持并发
    from socketserver import ThreadingMixIn
    class ThreadedServer(ThreadingMixIn, HTTPServer):
        daemon_threads = True

    server = ThreadedServer(("0.0.0.0", PORT), Handler)
    print(f"DailyEnglish server running on port {PORT}")
    print(f"Web root: {WEB_ROOT}")
    print(f"TTS proxy: {PROXY}")
    print(f"TTS voices: {list(VOICES.keys())}")
    print(f"TTS cache: {CACHE_DIR}")
    print(f"STT model: {STT_MODEL} (key {'configured' if DASHSCOPE_API_KEY else 'NOT configured'})")
    print(f"Access: http://localhost:{PORT}/")
    print(f"TTS API: http://localhost:{PORT}/tts?text=hello&voice=jenny&rate=1")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        server.shutdown()
