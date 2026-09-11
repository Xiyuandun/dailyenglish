#!/usr/bin/env python3
"""
SSH ProxyCommand: tunnel through HTTP proxy using CONNECT method.
Usage: ssh -o ProxyCommand="python3 proxy_connect.py %h %p" user@host
"""
import socket
import sys
import select

PROXY_HOST = "127.0.0.1"
PROXY_PORT = 18080

def main():
    if len(sys.argv) < 3:
        sys.stderr.write("Usage: proxy_connect.py <target_host> <target_port>\n")
        sys.exit(1)

    target_host = sys.argv[1]
    target_port = int(sys.argv[2])

    # Connect to HTTP proxy
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.settimeout(15)
    try:
        sock.connect((PROXY_HOST, PROXY_PORT))
    except Exception as e:
        sys.stderr.write(f"Proxy connection failed: {e}\n")
        sys.exit(1)

    # Send CONNECT request
    connect_req = (
        f"CONNECT {target_host}:{target_port} HTTP/1.1\r\n"
        f"Host: {target_host}:{target_port}\r\n"
        f"\r\n"
    ).encode()
    sock.sendall(connect_req)

    # Read proxy response
    response = b""
    while b"\r\n\r\n" not in response:
        try:
            data = sock.recv(4096)
            if not data:
                break
            response += data
        except socket.timeout:
            break

    if b"200" not in response.split(b"\r\n")[0]:
        sys.stderr.write(f"CONNECT failed: {response.decode('utf-8', errors='replace')}\n")
        sock.close()
        sys.exit(1)

    sys.stderr.write("CONNECT tunnel established\n")

    # Forward data between stdin/stdout and socket
    sock.setblocking(False)
    stdin_fd = sys.stdin.buffer.fileno()

    try:
        while True:
            r, _, _ = select.select([sock, stdin_fd], [], [], 1.0)

            if sock in r:
                data = sock.recv(65536)
                if not data:
                    break
                sys.stdout.buffer.write(data)
                sys.stdout.buffer.flush()

            if stdin_fd in r:
                data = sys.stdin.buffer.read1(65536)
                if not data:
                    break
                sock.sendall(data)
    except Exception as e:
        sys.stderr.write(f"Forwarding error: {e}\n")
    finally:
        sock.close()

if __name__ == "__main__":
    main()
