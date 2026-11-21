"""Gera as duas versões do painel a partir de painel.template.html.

- ../Painel-RH.html : arquivo único para o computador, funciona sem internet
                      (as bibliotecas que leem o Excel e geram o PDF vão embutidas).
- ../web/painel-rh.html : versão publicada como link privado, para abrir no celular
                      (as bibliotecas vêm do CDN jsDelivr; a página é montada pelo claude.ai).

Uso: python3 montar.py
"""
from pathlib import Path

VERSAO_XLSX = "0.18.5"
VERSAO_JSPDF = "3.0.4"
aqui = Path(__file__).resolve().parent
conteudo = (aqui / "painel.template.html").read_text(encoding="utf-8")
marcador = "<!--BIBLIOTECA_XLSX-->"
assert conteudo.count(marcador) == 1
marcador_pdf = "<!--BIBLIOTECA_PDF-->"
assert conteudo.count(marcador_pdf) == 1

# 1) Versão offline: documento completo com a biblioteca embutida.
lib = (aqui / "xlsx.full.min.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
lib_pdf = (aqui / "jspdf.umd.min.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
offline = (
    '<!doctype html>\n<html lang="pt-BR">\n<head>\n<meta charset="utf-8">\n'
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n'
    + conteudo.replace(marcador, "<script>\n" + lib + "\n</script>", 1)
      .replace(marcador_pdf, "<script>\n" + lib_pdf + "\n</script>", 1)
    + "</html>\n"
)
saida1 = aqui.parent / "Painel-RH.html"
saida1.write_text(offline, encoding="utf-8")

# 2) Versão para link (celular): só o conteúdo, biblioteca carregada do CDN.
web = conteudo.replace(
    marcador,
    f'<script src="https://cdn.jsdelivr.net/npm/xlsx@{VERSAO_XLSX}/dist/xlsx.full.min.js"></script>',
    1,
).replace(
    marcador_pdf,
    f'<script src="https://cdn.jsdelivr.net/npm/jspdf@{VERSAO_JSPDF}/dist/jspdf.umd.min.js"></script>',
    1,
)
saida2 = aqui.parent / "web" / "painel-rh.html"
saida2.parent.mkdir(exist_ok=True)
saida2.write_text(web, encoding="utf-8")

for s in (saida1, saida2):
    print("Gerado:", s, f"({s.stat().st_size // 1024} KB)")
