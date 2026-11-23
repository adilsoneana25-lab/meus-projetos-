"""Monta a pasta publicar/site/, pronta para arrastar no Netlify Drop (https://app.netlify.com/drop).

Como usar (Windows):  python publicar\\montar.py
Nome e WhatsApp já estão no portfólio; os campos abaixo servem para trocar, se mudarem.
"""
import pathlib, shutil, re

SEU_NOME = "Vértice Digital"
SEU_WHATSAPP = "5511942547938"   # 55 + DDD + número, só dígitos

RAIZ = pathlib.Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "publicar" / "site"

PAGINAS = {  # pasta de origem -> pasta publicada
    "portfolio": "",
    "site-restaurante": "restaurante",
    "site-rota-leve": "transportadora",
    "site-barbearia": "barbearia",
    "site-petshop": "petshop",
    "site-oficina": "oficina",
    "site-clinica": "dentista",
    "site-hortifruti": "hortifruti",
    "site-pizzaria": "pizzaria",
}
LINKS_AMOSTRA = {  # link do claude.ai -> caminho no site publicado
    "https://claude.ai/artifact/WgqwpeEiV2YPmxsogi2Lpv": "restaurante/",
    "https://claude.ai/artifact/6DR3eWiu6xPQYhWLu5pSx7": "transportadora/",
    "https://claude.ai/artifact/CZFmvnyEAmgQ1AmieLLqDe": "barbearia/",
    "https://claude.ai/artifact/WkbVZ7Az1WSMrJVmG54ac5": "petshop/",
    "https://claude.ai/artifact/1NQ4Dxmt6NxVqbuiXhPWBk": "oficina/",
    "https://claude.ai/artifact/5ktnto2ijLtxd5F4gfSTYT": "dentista/",
    "https://claude.ai/artifact/EG1tA3q4xjE1hbaKqAwx3G": "hortifruti/",
    "https://claude.ai/artifact/EeFcMSLK4pYUPU5kiNzbkm": "pizzaria/",
}

def documento(corpo: str) -> str:
    titulo = re.search(r"<title>.*?</title>", corpo, re.S)
    cabeca = titulo.group(0) if titulo else ""
    corpo = corpo.replace(cabeca, "", 1)
    return ('<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n'
            '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
            f'{cabeca}\n</head>\n<body>\n{corpo}\n</body>\n</html>\n')

def formatar_whatsapp(num: str) -> str:
    d = num[2:] if num.startswith("55") else num
    return f"({d[:2]}) {d[2:-4]}-{d[-4:]}" if len(d) >= 10 else num

if SAIDA.exists():
    shutil.rmtree(SAIDA)
for origem, destino in PAGINAS.items():
    pasta = SAIDA / destino
    pasta.mkdir(parents=True, exist_ok=True)
    html = (RAIZ / origem / "index.html").read_text(encoding="utf-8")
    if origem == "portfolio":
        for antigo, novo in LINKS_AMOSTRA.items():
            html = html.replace(f'href="{antigo}" target="_blank" rel="noopener"', f'href="{novo}"')
        html = html.replace("Seu Nome", SEU_NOME).replace("5500000000000", SEU_WHATSAPP)
        html = html.replace("(00) 00000-0000", formatar_whatsapp(SEU_WHATSAPP))
    (pasta / "index.html").write_text(documento(html), encoding="utf-8")
    if (RAIZ / origem / "img").exists():
        shutil.copytree(RAIZ / origem / "img", pasta / "img")

print(f"Pronto: {SAIDA}")
print("Agora abra https://app.netlify.com/drop e arraste a pasta 'site' para a página.")
