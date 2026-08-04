#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 3000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"  {self.address_string()} - {format % args}")

print(f"San Marin Debate — serving at http://localhost:{PORT}")
print("Press Ctrl+C to stop.\n")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
