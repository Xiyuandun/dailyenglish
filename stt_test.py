#!/usr/bin/env python3
"""
阿里云百炼(DashScope)语音识别「配置自检」脚本。

用途：
  1) 校验你的 DashScope API Key 是否有效、账户是否可用；
  2) 端到端测试：把一段本地录音 POST 给已启动的后端 /stt，返回识别文字。

用法（三选一）：

  # ① 只校验 API Key 是否有效（最常用，无需起后端）
  export DASHSCOPE_API_KEY=sk-xxxx
  python stt_test.py

  # ② 校验 Key + 端到端识别测试（先带 Key 启动后端：python server.py）
  export DASHSCOPE_API_KEY=sk-xxxx
  python stt_test.py --audio 我的录音.webm --endpoint http://localhost:8000/stt

  # ③ 直接用命令行参数传 Key
  python stt_test.py --key sk-xxxx --audio a.webm

如何配置到生产（Render）：
  Render 控制台 → 对应 Web Service → Environment，新增环境变量：
      DASHSCOPE_API_KEY = sk-xxxx
  保存后重新 Deploy 即可。前端（GitHub Pages 时）需在 index.html 顶部
  window.DAILY_CFG.sttBase 填入后端 /stt 的绝对地址。
"""
import argparse
import json
import os
import sys
import urllib.error
import urllib.request


def check_key(api_key):
    """用一次最小的文本调用校验 Key 是否有效、账户是否可用。"""
    import dashscope
    dashscope.api_key = api_key
    print("正在校验 API Key 有效性…")
    try:
        resp = dashscope.Generation.call(model="qwen-turbo", prompt="ping")
        if resp and resp.status_code == 200:
            out = str(getattr(resp, "output", "")).strip()
            print(f"✅ API Key 有效，账户可用！（响应：{out[:80]}）")
            return True
        print(f"⚠️ 校验返回异常：status={getattr(resp, 'status_code', '?')}"
              f"  msg={getattr(resp, 'message', '?')}")
        return False
    except Exception as e:
        print(f"❌ 校验失败：{e}")
        print("可能原因：Key 无效 / 账号未开通 DashScope / 网络无法访问阿里云。")
        return False


def test_stt(_api_key, audio, endpoint):
    """把本地音频 POST 给后端 /stt，验证「录音→后端→DashScope→文字」全链路。"""
    if not os.path.isfile(audio):
        print(f"❌ 找不到音频文件：{audio}")
        return False
    with open(audio, "rb") as f:
        data = f.read()
    if len(data) < 4000:
        print("❌ 音频文件过小(可能没录到声音)，请录一句较完整的语音再试。")
        return False
    req = urllib.request.Request(
        endpoint, data=data, method="POST",
        headers={"Content-Type": "application/octet-stream"})
    try:
        with urllib.request.urlopen(req, timeout=60) as r:
            info = json.loads(r.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", "ignore")
        print(f"❌ 后端返回 HTTP {e.code}：\n{body}")
        if '"no_key"' in body:
            print("→ 后端没配 DASHSCOPE_API_KEY，请先设环境变量再启动 server.py。")
        return False
    except Exception as e:
        print(f"❌ 请求后端失败：{e}")
        print("→ 请确认后端已启动、endpoint 与端口正确、网络可达。")
        return False

    print(f"✅ 后端返回：{json.dumps(info, ensure_ascii=False)}")
    text = (info or {}).get("text", "").strip()
    if text:
        print(f"\n识别结果：\n  {text}")
        return True
    print("⚠️ 后端未识别到文字（可能没声音/太短/说不清楚）。")
    return False


def main():
    parser = argparse.ArgumentParser(description="DashScope 语音识别配置自检")
    parser.add_argument("--key", help="DashScope API Key（也可用环境变量 DASHSCOPE_API_KEY）")
    parser.add_argument("--audio", help="本地音频文件路径(webm/mp3/wav)，提供则做端到端识别测试")
    parser.add_argument("--endpoint", default="http://localhost:8000/stt",
                        help="后端 /stt 地址，默认 http://localhost:8000/stt")
    args = parser.parse_args()

    key = args.key or os.environ.get("DASHSCOPE_API_KEY", "")
    if not key:
        print("❌ 未提供 API Key。请用 --key sk-xxx 或 export DASHSCOPE_API_KEY=sk-xxx")
        sys.exit(1)

    ok = check_key(key)
    if args.audio:
        print("\n—— 端到端识别测试 ——")
        t_ok = test_stt(key, args.audio, args.endpoint)
        sys.exit(0 if (ok and t_ok) else 2)
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()