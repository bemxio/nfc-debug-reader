import http.server
import ssl

# constants
HOST = "localhost"
PORT = 8080

CERTIFICATE_FILE = "cert.pem"
KEY_FILE = "key.pem"

# main code
server = http.server.HTTPServer((HOST, PORT), http.server.SimpleHTTPRequestHandler)

context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
context.load_cert_chain(certfile=CERTIFICATE_FILE, keyfile=KEY_FILE)

server.socket = context.wrap_socket(server.socket, server_side=True)

print(f"Server started at https://{HOST}:{PORT}")

try:
    server.serve_forever()
except KeyboardInterrupt:
    exit(0)