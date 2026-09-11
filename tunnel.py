#!/usr/bin/env python3
"""
Python localtunnel client with HTTP proxy support.
Creates a public URL that tunnels to a local server.
"""
import requests
import websocket
import json
import threading
import socket
import os
import random
import string
import sys
import time

PROXY = os.environ.get("HTTP_PROXY") or os.environ.get("HTTPS_PROXY") or "http://127.0.0.1:18080"
LOCAL_PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000

# proxies for requests library
proxies = {"http": PROXY, "https": PROXY}

def random_subdomain():
    """Generate a random subdomain."""
    words = ["apple", "blue", "cat", "dog", "eagle", "fish", "green", "happy",
             "ice", "jungle", "king", "lion", "moon", "night", "orange",
             "panda", "quiet", "river", "sun", "tree", "wave", "star", "sky"]
    return random.choice(words) + "-" + str(random.randint(1000, 9999))

def create_tunnel():
    """Register a subdomain on localtunnel.me."""
    sub = random_subdomain()
    url = f"https://localtunnel.me/{sub}"
    print(f"Requesting tunnel: {url}")
    resp = requests.post(url, json={}, proxies=proxies, timeout=15)
    data = resp.json()
    print(f"Tunnel created: {data.get('url', 'unknown')}")
    print(f"Port: {data.get('port')}, Max conns: {data.get('max_conn_count')}")
    return data

def handle_connection(ws, conn_data):
    """Handle a single tunnel connection."""
    try:
        raw = ws.recv()
        if not raw:
            return
        if isinstance(raw, bytes):
            raw = raw.decode("utf-8", errors="replace")

        # Parse the HTTP request
        lines = raw.split("\r\n")
        if not lines:
            return

        request_line = lines[0]
        parts = request_line.split(" ")
        if len(parts) < 3:
            return

        method, path, version = parts[0], parts[1], parts[2]

        # Parse headers
        headers = {}
        body = ""
        header_end = False
        for i, line in enumerate(lines[1:], 1):
            if line == "":
                header_end = True
                body = "\r\n".join(lines[i+1:])
                break
            if ":" in line:
                k, v = line.split(":", 1)
                headers[k.strip().lower()] = v.strip()

        content_length = int(headers.get("content-length", 0))
        body_data = body.encode("utf-8") if body else b""

        # Forward to local server
        local_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        local_sock.settimeout(10)
        local_sock.connect(("127.0.0.1", LOCAL_PORT))

        # Send request to local server
        req = f"{method} {path} {version}\r\n"
        for k, v in headers.items():
            req += f"{k}: {v}\r\n"
        req += "\r\n"
        local_sock.sendall(req.encode("utf-8"))
        if body_data:
            local_sock.sendall(body_data)

        # Read response from local server
        response = b""
        local_sock.settimeout(5)
        while True:
            try:
                chunk = local_sock.recv(65536)
                if not chunk:
                    break
                response += chunk
            except socket.timeout:
                break
        local_sock.close()

        # Send response back through WebSocket
        ws.send_binary(response)

    except Exception as e:
        print(f"Connection error: {e}")
        try:
            ws.send_binary(b"HTTP/1.1 502 Bad Gateway\r\nContent-Length: 0\r\n\r\n")
        except:
            pass

def on_message(ws, message):
    """Handle incoming WebSocket messages (tunneled HTTP requests)."""
    if isinstance(message, bytes):
        message = message.decode("utf-8", errors="replace")

    try:
        lines = message.split("\r\n")
        if not lines:
            return
        request_line = lines[0]
        parts = request_line.split(" ")
        if len(parts) < 3:
            return
        method, path, version = parts[0], parts[1], parts[2]

        # Parse headers
        headers = {}
        body = ""
        for i, line in enumerate(lines[1:], 1):
            if line == "":
                body = "\r\n".join(lines[i+1:])
                break
            if ":" in line:
                k, v = line.split(":", 1)
                headers[k.strip().lower()] = v.strip()

        # Forward to local server
        local_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        local_sock.settimeout(10)
        local_sock.connect(("127.0.0.1", LOCAL_PORT))

        req = f"{method} {path} {version}\r\n"
        for k, v in headers.items():
            req += f"{k}: {v}\r\n"
        req += "\r\n"
        local_sock.sendall(req.encode("utf-8"))
        if body:
            local_sock.sendall(body.encode("utf-8"))

        # Read response
        response = b""
        local_sock.settimeout(5)
        while True:
            try:
                chunk = local_sock.recv(65536)
                if not chunk:
                    break
                response += chunk
            except socket.timeout:
                break
        local_sock.close()

        # Send back through WebSocket
        ws.send_binary(response)

    except Exception as e:
        print(f"Error handling request: {e}")
        try:
            ws.send_binary(b"HTTP/1.1 502 Bad Gateway\r\nContent-Length: 0\r\n\r\n")
        except:
            pass

def on_error(ws, error):
    print(f"WebSocket error: {error}")

def on_close(ws, close_status, close_msg):
    print(f"WebSocket closed: {close_status} {close_msg}")

def on_open(ws):
    print("WebSocket connected! Tunnel is live!")

def main():
    print(f"Local server: http://127.0.0.1:{LOCAL_PORT}")
    print(f"Proxy: {PROXY}")
    print()

    # Step 1: Create tunnel
    data = create_tunnel()
    tunnel_url = data.get("url", "")
    tunnel_port = data.get("port")
    tunnel_id = data.get("id", "")

    if not tunnel_url:
        print("ERROR: Failed to create tunnel")
        sys.exit(1)

    print()
    print("=" * 50)
    print(f"  PUBLIC URL: {tunnel_url}")
    print("=" * 50)
    print()

    # Step 2: Connect WebSocket through proxy
    ws_url = f"wss://localtunnel.me"
    http_proxy_host = "127.0.0.1"
    http_proxy_port = 18080

    ws = websocket.WebSocketApp(
        ws_url,
        on_message=on_message,
        on_error=on_error,
        on_close=on_close,
        on_open=on_open,
        header=[f"Content-Type: application/json"],
        subprotocols=["--tunnel-token", json.dumps({"subdomain": tunnel_url.split("//")[1].split(".")[0]})]
    )

    # Connect with proxy
    ws.run_forever(
        http_proxy_host=http_proxy_host,
        http_proxy_port=http_proxy_port,
        ping_interval=30,
        ping_timeout=10,
    )

if __name__ == "__main__":
    main()
