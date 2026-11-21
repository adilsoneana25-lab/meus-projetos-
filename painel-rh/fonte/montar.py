"""Junta a biblioteca SheetJS e o painel num único arquivo HTML que funciona offline.
Uso: python3 montar.py   (gera ../Painel-RH.html)"""
from pathlib import Path
aqui = Path(__file__).resolve().parent
modelo = (aqui / "painel.template.html").read_text(encoding="utf-8")
lib = (aqui / "xlsx.mini.min.js").read_text(encoding="utf-8").replace("</script", "<\\/script")
saida = aqui.parent / "Painel-RH.html"
saida.write_text(modelo.replace("/*__BIBLIOTECA_XLSX__*/", lib, 1), encoding="utf-8")
print("Gerado:", saida, f"({saida.stat().st_size // 1024} KB)")
