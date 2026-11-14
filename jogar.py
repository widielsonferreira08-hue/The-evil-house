import http.server, socketserver, webbrowser, os, threading
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), "game"))
class H(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
H.extensions_map.update({".js": "text/javascript", ".mjs": "text/javascript"})
with socketserver.TCPServer(("127.0.0.1", 0), H) as s:
    url = f"http://127.0.0.1:{s.server_address[1]}/"
    print("Jogo rodando em", url, "- feche esta janela para sair.")
    threading.Timer(0.5, lambda: webbrowser.open(url)).start()
    s.serve_forever()
