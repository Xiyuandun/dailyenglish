#!/usr/bin/env python3
"""
DailyEnglish 统一服务器：静态文件 + TTS API + 云端语音识别(STT)
- 静态文件服务（替代 python http.server）
- /tts 端点：用 edge-tts 生成自然语音 MP3
- /stt 端点：转发音频给阿里云 DashScope Paraformer 识别（Key 经 DASHSCOPE_API_KEY 环境变量注入）
"""
import os
import sys
import io
import json
import base64
import hashlib
import asyncio
import functools
import tempfile
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs, unquote

# edge-tts
import edge_tts

# ===== 云端语音识别（阿里云百炼 DashScope Paraformer）=====
# API Key 通过环境变量 DASHSCOPE_API_KEY 注入，绝不硬编码进仓库。
DASHSCOPE_API_KEY = os.environ.get("DASHSCOPE_API_KEY", "").strip()
DASHSCOPE_MODEL = os.environ.get("DASHSCOPE_MODEL", "paraformer-realtime-v2").strip()

def _get_dashscope():
    """惰性加载 dashscope，避免未安装/未配置 key 时整站无法启动。"""
    if not DASHSCOPE_API_KEY:
        raise RuntimeError("DASHSCOPE_API_KEY 未配置，请先在部署平台设置环境变量")
    import dashscope
    if getattr(dashscope, "api_key", None) != DASHSCOPE_API_KEY:
        dashscope.api_key = DASHSCOPE_API_KEY
    return dashscope

def recognize_pcm(pcm_bytes, sample_rate=16000):
    """把一段整音频（16kHz 16bit 单声道 PCM）交给阿里云 Paraformer 识别，返回识别文本。"""
    from dashscope.audio.asr import Recognition

    class _Callback:
        def on_open(self): pass
        def on_complete(self): pass
        def on_close(self): pass
        def on_error(self, result): pass
        def on_event(self, result): pass

    if not pcm_bytes:
        return ""
    tmp = None
    try:
        with tempfile.NamedTemporaryFile(suffix=".pcm", delete=False) as f:
            f.write(pcm_bytes)
            tmp = f.name
        rec = Recognition(
            model=DASHSCOPE_MODEL,
            callback=_Callback(),
            format="pcm",
            sample_rate=int(sample_rate) or 16000,
        )
        result = rec.call(file=tmp)
        if result is None or result.status_code != 200 or getattr(result, "output", None) is None:
            msg = (getattr(result, "message", None)) or "识别失败"
            code = getattr(result, "code", None) or ""
            raise RuntimeError(f"{msg} ({code})".strip())
        sentences = result.get_sentence() or []
        text = " ".join((s.get("text") or "") for s in sentences).strip()
        return text
    finally:
        if tmp:
            try: os.unlink(tmp)
            except OSError: pass

# 代理：本地开发用 18080，云平台通过环境变量配置（不配置则直连）
PROXY = os.environ.get("HTTP_PROXY") or os.environ.get("https_proxy") or ""
# 端口：优先用环境变量 PORT（云平台注入），其次命令行参数
PORT = int(os.environ.get("PORT") or (sys.argv[1] if len(sys.argv) > 1 else 8000))
WEB_ROOT = os.path.dirname(os.path.abspath(__file__))
CACHE_DIR = os.path.join(WEB_ROOT, "tts_cache")
os.makedirs(CACHE_DIR, exist_ok=True)

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

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=WEB_ROOT, **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/tts":
            self.handle_tts(parse_qs(parsed.query))
        else:
            super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/tts":
            content_len = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_len).decode('utf-8')
            try:
                data = json.loads(body)
                self.handle_tts_dict(data)
            except json.JSONDecodeError:
                self.send_error(400, "Invalid JSON body")
        elif parsed.path == "/stt":
            self.handle_stt()
        else:
            self.send_error(404, "Not found")

    def do_OPTIONS(self):
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def send_json(self, obj, status=200):
        data = json.dumps(obj, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(data)

    def handle_stt(self):
        """云端语音识别：接收浏览器上传的 raw PCM（16kHz 16bit 单声道，base64），
        调用阿里云 DashScope Paraformer 识别，返回 {text} 或 {error}。"""
        try:
            content_len = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_len)
            data = json.loads(body.decode('utf-8'))
            audio_b64 = data.get("audio") or ""
            if not audio_b64:
                self.send_json({"error": "missing audio"}, status=400)
                return
            sample_rate = int(data.get("sample_rate") or 16000)
            pcm = base64.b64decode(audio_b64)
            if not pcm:
                self.send_json({"error": "empty audio"}, status=400)
                return
            _get_dashscope()  # 确保 key 已配置
            text = recognize_pcm(pcm, sample_rate)
            # DashScope 对空/静音返回空串，统一交给前端按“未识别到内容”提示
            self.send_json({"text": text})
        except Exception as e:
            try:
                self.send_json({"error": str(e)}, status=500)
            except Exception:
                pass

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
        if "/tts" in msg or "GET / " in msg or "404" in msg or "500" in msg:
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
    print(f"STT DashScope key: {'已配置' if DASHSCOPE_API_KEY else '未配置'}")
    print(f"Access: http://localhost:{PORT}/")
    print(f"TTS API: http://localhost:{PORT}/tts?text=hello&voice=jenny&rate=1")
    print(f"STT API: http://localhost:{PORT}/stt (POST raw PCM base64)")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down...")
        server.shutdown()
