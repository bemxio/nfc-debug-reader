import http.server
import ssl

# constants
HOST = "localhost"
PORT = 8080

CERTIFICATE_FILE = "cert.pem"
KEY_FILE = "key.pem"

# main code
server = http.server.HTTPServer((HOST, PORT), http.server.SimpleHTTPRequestHandler)
server.socket = ssl.wrap_socket(server.socket, certfile=CERTIFICATE_FILE, keyfile=KEY_FILE, server_side=True)

print(f"Server started at https://{HOST}:{PORT}")

server.serve_forever()