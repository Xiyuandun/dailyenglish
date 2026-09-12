#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
阿里云函数计算（FC）HTTP 触发器入口 —— 云端语音识别(/stt)。

零第三方依赖：不使用 dashscope SDK，改用 Python 标准库 socket+ssl 手写 WebSocket
客户端，直接连百炼 Paraformer 实时识别 wss 接口。因此在线编辑器粘贴即可运行，
无需上传 requirements.txt / 安装任何包。

部署：
  1. 运行环境选 Python 3.10，函数类型「事件函数」，Handler 填 fc_handler.handler。
  2. 环境变量设：DASHSCOPE_API_KEY = 你的阿里云百炼 API Key（必填）。
  3. 绑定 HTTP 触发器（认证「无需认证」），拿到公网地址。
  4. 前端 index.html 的 window.DAILY_CFG.sttUrl 填该地址 + "/stt"。

前端 POST 到 /stt，JSON body：{"audio": "<base64 PCM 16kHz>, sample_rate": 16000}
返回：{"text": "识别出的文字"}
"""
import os
import json
import base64
import socket
import ssl
import uuid
import struct
import traceback

DASHSCOPE_API_KEY = os.environ.get("DASHSCOPE_API_KEY", "").strip()
DASHSCOPE_MODEL = os.environ.get("DASHSCOPE_MODEL", "paraformer-realtime-v2").strip()
# WSS 地址（国内百炼默认）
WS_HOST = os.environ.get("STT_WS_HOST", "dashscope.aliyuncs.com")
WS_PATH = os.environ.get("STT_WS_PATH", "/api-ws/v1/inference/")
HTTP_ORIGIN = os.environ.get("STT_ALLOW_ORIGIN", "*")


# ------------------- 最小 WebSocket 客户端（仅标准库） -------------------

def _ws_connect(host, path, token, timeout=15):
    """建立 wss 连接，返回 (socket, recv_fun)。"""
    raw = socket.create_connection((host, 443), timeout=timeout)
    ctx = ssl.create_default_context()
    sock = ctx.wrap_socket(raw, server_hostname=host)

    key = base64.b64encode(os.urandom(16)).decode("ascii")
    req = (
        "GET %s HTTP/1.1\r\n"
        "Host: %s\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        "Sec-WebSocket-Key: %s\r\n"
        "Sec-WebSocket-Version: 13\r\n"
        "Authorization: Bearer %s\r\n"
        "\r\n"
    ) % (path, host, key, token)
    sock.sendall(req.encode("utf-8"))
    sock.settimeout(timeout)

    # 读取 HTTP 响应头
    data = b""
    while b"\r\n\r\n" not in data:
        chunk = sock.recv(4096)
        if not chunk:
            raise RuntimeError("WebSocket 握手连接被关闭")
        data += chunk
    head, _, rest = data.partition(b"\r\n\r\n")
    if b" 101 " not in head.split(b"\r\n", 1)[0]:
        raise RuntimeError("WebSocket 握手失败: " + head.decode("utf-8", "ignore")[:200])

    _recv_state = {"buf": rest}

    def _recv_n(n):
        while len(_recv_state["buf"]) < n:
            chunk = sock.recv(4096)
            if not chunk:
                raise RuntimeError("连接被关闭")
            _recv_state["buf"] += chunk
        out, _recv_state["buf"] = _recv_state["buf"][:n], _recv_state["buf"][n:]
        return out

    def _recv_frame():
        b1, b2 = _recv_n(2)
        opcode = b1 & 0x0F
        length = b2 & 0x7F
        if length == 126:
            length = struct.unpack(">H", _recv_n(2))[0]
        elif length == 127:
            length = struct.unpack(">Q", _recv_n(8))[0]
        if opcode == 0x9:  # ping -> 回 pong
            _send(sock, 0x0A, _recv_n(length))
            return _recv_frame()
        payload = b""
        if length:
            payload = _recv_n(length)
        if opcode == 0x1:
            return "text", payload.decode("utf-8", "ignore")
        if opcode == 0x2:
            return "bin", payload
        if opcode == 0x8:
            return "close", payload
        return "other", payload

    return sock, _recv_frame


def _send(sock, opcode, payload):
    header = bytearray()
    header.append(0x80 | opcode)
    length = len(payload)
    if length < 126:
        header.append(0x80 | length)
    elif length < 65536:
        header.append(0x80 | 126)
        header += struct.pack(">H", length)
    else:
        header.append(0x80 | 127)
        header += struct.pack(">Q", length)
    mask = os.urandom(4)
    masked = bytearray(len(payload))
    for i, b in enumerate(payload):
        masked[i] = b ^ mask[i % 4]
    sock.sendall(bytes(header) + mask + bytes(masked))


def _ws_close(sock):
    try:
        sock.close()
    except OSError:
        pass


# ------------------- 拼接识别文字 -------------------

def _recognize(pcm_bytes, sample_rate):
    """通过 wss 实时识别整段 PCM，返回最终拼接文本。"""
    if not DASHSCOPE_API_KEY:
        raise RuntimeError("DASHSCOPE_API_KEY 未配置")
    if not pcm_bytes:
        return ""

    sock, recv_frame = _ws_connect(WS_HOST, WS_PATH, DASHSCOPE_API_KEY)
    try:
        task_id = str(uuid.uuid4())
        run_task = {
            "header": {"action": "run-task", "task_id": task_id, "streaming": "duplex"},
            "payload": {
                "task_group": "audio",
                "task": "asr",
                "function": "recognition",
                "model": DASHSCOPE_MODEL,
                "parameters": {
                    "format": "pcm",
                    "sample_rate": int(sample_rate),
                    "punctuation_prediction_enabled": True,
                    "inverse_text_normalization_enabled": True,
                },
                "input": {},
            },
        }
        _send(sock, 0x1, json.dumps(run_task, ensure_ascii=False).encode("utf-8"))

        # 等待 task-started
        started = False
        while not started:
            kind, payload = recv_frame()
            if kind == "text":
                evt = json.loads(payload)
                if evt.get("header", {}).get("event") == "task-started":
                    started = True
                elif evt.get("header", {}).get("event") in ("task-failed",):
                    raise RuntimeError("task-failed: " + payload[:300])

        # 发送音频（应可能分批，但小段可直接整段发）
        _send(sock, 0x2, pcm_bytes)
        # 结束任务
        finish = {
            "header": {"action": "finish-task", "task_id": task_id, "streaming": "duplex"},
            "payload": {
                "task_group": "audio",
                "task": "asr",
                "function": "recognition",
                "input": {},
            },
        }
        _send(sock, 0x1, json.dumps(finish, ensure_ascii=False).encode("utf-8"))

        # 收集最终识别结果直到 task-finished
        text_parts = []
        while True:
            kind, payload = recv_frame()
            if kind == "text":
                evt = json.loads(payload)
                header = evt.get("header", {})
                event = header.get("event")
                if event == "result-generated":
                    sentence = evt.get("payload", {}).get("output", {}).get("sentence", {})
                    t = (sentence.get("text") or "").strip()
                    if sentence.get("sentence_end") and t:
                        text_parts.append(t)
                elif event == "task-finished":
                    break
                elif event == "task-failed":
                    raise RuntimeError("task-failed: " + payload[:300])
            elif kind == "close":
                break
        return " ".join(text_parts)
    finally:
        _ws_close(sock)


# ------------------- FC handler -------------------

def _resp(status, obj, cors=True):
    headers = {"Content-Type": "application/json"}
    if cors:
        headers["Access-Control-Allow-Origin"] = HTTP_ORIGIN
        headers["Access-Control-Allow-Methods"] = "*"
        headers["Access-Control-Allow-Headers"] = "*"
    return {"statusCode": status, "isBase64Encoded": False,
            "headers": headers, "body": json.dumps(obj, ensure_ascii=False)}


def _normalize_event(event):
    obj = None
    if isinstance(event, bytes):
        try:
            obj = json.loads(event.decode("utf-8", "ignore"))
        except Exception:  # noqa: BLE001
            pass
    elif isinstance(event, str):
        try:
            obj = json.loads(event)
        except Exception:  # noqa: BLE001
            pass
    elif isinstance(event, dict):
        obj = event
    elif isinstance(event, (list, tuple)):
        try:
            obj = json.loads(json.dumps(event, ensure_ascii=False))
        except Exception:  # noqa: BLE001
            pass
    if isinstance(obj, dict):
        return obj, None
    raw = event if isinstance(event, (bytes, str)) else None
    if isinstance(raw, bytes):
        raw = raw.decode("utf-8", "ignore")
    if raw:
        return {"rawBody": raw}, "无法解析为 dict，仅含原始请求体"
    return None, f"无法识别的 event 类型: {type(event).__name__}"


def _try_body(event):
    try:
        if isinstance(event, dict):
            return event
        if isinstance(event, str):
            return json.loads(event)
    except Exception:  # noqa: BLE001
        pass
    return None


def handler(event, context):
    try:
        ev, note = _normalize_event(event)
        if ev is None:
            return _resp(500, {"error": note or "event 解析失败"})

        # 纯 HTTP 请求体兜底（无 path）
        if ev.get("rawBody") is not None:
            data = _try_body(ev.get("rawBody"))
            if data is not None:
                return _do_stt_resp(data)
            return _resp(200, {"ok": True, "service": "dailyenglish-stt", "note": note})

        path = ev.get("rawPath") or ev.get("path") or "/"
        method = (ev.get("httpMethod") or ev.get("method") or "").upper()

        if method == "OPTIONS":
            return {"statusCode": 204, "isBase64Encoded": False,
                    "headers": {
                        "Access-Control-Allow-Origin": HTTP_ORIGIN,
                        "Access-Control-Allow-Methods": "*",
                        "Access-Control-Allow-Headers": "*",
                        "Access-Control-Max-Age": "86400",
                    }, "body": ""}

        if path.rstrip("/").endswith("/stt"):
            body = ev.get("body") or ""
            if ev.get("isBase64Encoded"):
                try:
                    body = base64.b64decode(body).decode("utf-8", "ignore")
                except Exception:  # noqa: BLE001
                    return _resp(400, {"error": "body base64 解码失败"})
            try:
                data = json.loads(body or "{}")
            except Exception:  # noqa: BLE001
                return _resp(400, {"error": "body 不是合法 JSON"})
            return _do_stt_resp(data)

        return _resp(200, {"ok": True, "service": "dailyenglish-stt",
                           "eventType": type(event).__name__})
    except Exception as e:  # noqa: BLE001
        tail = traceback.format_exc().splitlines()[-4:]
        return _resp(500, {"error": str(e), "trace": tail})


def _do_stt_resp(data):
    audio_b64 = (data or {}).get("audio") or ""
    if not audio_b64:
        return _resp(400, {"error": "missing audio"})
    sample_rate = int((data or {}).get("sample_rate") or 16000)
    try:
        pcm = base64.b64decode(audio_b64)
    except Exception:  # noqa: BLE001
        return _resp(400, {"error": "audio 不是合法 base64"})
    if not pcm:
        return _resp(400, {"error": "empty audio"})
    try:
        text = _recognize(pcm, sample_rate)
        return _resp(200, {"text": text})
    except Exception as e:  # noqa: BLE001
        tail = traceback.format_exc().splitlines()[-5:]
        return _resp(500, {"error": str(e), "trace": tail})


if __name__ == "__main__":
    print(json.dumps(handler({"rawPath": "/", "httpMethod": "GET"}, None), ensure_ascii=False))