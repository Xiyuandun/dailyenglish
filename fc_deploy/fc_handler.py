#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
阿里云函数计算（FC）HTTP 触发器入口 —— 云端语音识别(/stt)。

部署步骤（浏览器控制台，无需信用卡）：
  1. 打开 函数计算控制台 → 创建函数 → 使用 Python 3.10 运行时（"HTTP 函数"或"事件函数+HTTP触发器"均可）。
  2. 把本目录上传/编辑进函数的代码里，入口 handler 设为 fc_handler.handler。
  3. 配置 环境变量：DASHSCOPE_API_KEY = 你的阿里云百炼 API Key（必填）。
  4. 给函数绑定一个 HTTP 触发器，拿到默认公网地址（形如
     https://xxx.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/<service>/<function>/）。
  5. 用该地址 + "/stt" 填入前端 index.html 的 window.DAILY_CFG.sttUrl。

本文件只做语音识别，不托管静态页面/朗读音频（朗读已用预生成音频解决）。
"""
import os
import json
import base64
import tempfile

DASHSCOPE_API_KEY = os.environ.get("DASHSCOPE_API_KEY", "").strip()
DASHSCOPE_MODEL = os.environ.get("DASHSCOPE_MODEL", "paraformer-realtime-v2").strip()
# 允许的跨域来源；默认全放行，可在 FC 环境变量 STT_ALLOW_ORIGIN 收紧
HTTP_ORIGIN = os.environ.get("STT_ALLOW_ORIGIN", "*")


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
        import dashscope
        dashscope.api_key = DASHSCOPE_API_KEY
        rec = Recognition(
            model=DASHSCOPE_MODEL,
            callback=_Callback(),
            format="pcm",
            sample_rate=int(sample_rate) or 16000,
        )
        result = rec.call(file=tmp)
        if result is None or result.status_code != 200 or getattr(result, "output", None) is None:
            raise RuntimeError((getattr(result, "message", None) or "识别失败"))
        sentences = result.get_sentence() or []
        return " ".join((s.get("text") or "") for s in sentences).strip()
    finally:
        if tmp:
            try:
                os.unlink(tmp)
            except OSError:
                pass


def _resp(status, obj, cors=True):
    headers = {"Content-Type": "application/json"}
    if cors:
        headers["Access-Control-Allow-Origin"] = HTTP_ORIGIN
        headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
        headers["Access-Control-Allow-Headers"] = "Content-Type"
    body = json.dumps(obj, ensure_ascii=False)
    return {"statusCode": status, "isBase64Encoded": False, "headers": headers, "body": body}


def handler(event, context):
    # FC HTTP 触发器的 event：
    #   { "path": str, "httpMethod": str, "headers": dict,
    #     "queryParameters": dict, "body": str(或base64), "isBase64Encoded": bool, ... }
    path = event.get("path") or event.get("url") or "/"
    method = (event.get("httpMethod") or "GET").upper()

    if method == "OPTIONS":
        return {"statusCode": 204, "isBase64Encoded": False,
                "headers": {
                    "Access-Control-Allow-Origin": HTTP_ORIGIN,
                    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                }, "body": ""}

    if path.rstrip("/").endswith("/stt"):
        if method != "POST":
            return _resp(405, {"error": "method not allowed"})
        try:
            body = event.get("body") or ""
            if event.get("isBase64Encoded"):
                body = base64.b64decode(body).decode("utf-8", "ignore")
            data = json.loads(body or "{}")
            audio_b64 = data.get("audio") or ""
            if not audio_b64:
                return _resp(400, {"error": "missing audio"})
            sample_rate = int(data.get("sample_rate") or 16000)
            pcm = base64.b64decode(audio_b64)
            if not pcm:
                return _resp(400, {"error": "empty audio"})
            if not DASHSCOPE_API_KEY:
                return _resp(500, {"error": "DASHSCOPE_API_KEY 未配置"})
            text = recognize_pcm(pcm, sample_rate)
            return _resp(200, {"text": text})
        except Exception as e:  # noqa: BLE001
            return _resp(500, {"error": str(e)})

    # 其它路径：健康检查
    return _resp(200, {"ok": True, "service": "dailyenglish-stt"})