# Instruções do projeto

## Imagens em sites e artefatos (regra permanente)

- Use **sempre fotos reais, com qualidade realista e profissional**: boa luz, foco nítido, composição de fotógrafo.
- **Nunca** use ilustrações genéricas, desenhos em SVG ou CSS no lugar de fotos, ícones de comida desenhados, emojis como imagem ou placeholders.
- Ordem de preferência das fontes:
  1. Fotos do próprio cliente (pratos, fachada, equipe, produtos), quando ele enviar.
  2. Fotos de bancos com licença de uso comercial gratuita: **Unsplash** (preferido, via ferramenta oficial `download_asset`) ou Pexels.
- Escolha fotos **específicas do assunto**. Por exemplo, "pudim de leite condensado" e não "sobremesa qualquer", ou "parrilla com fogo de lenha" e não "cozinha genérica". Prefira fotógrafos brasileiros quando o tema for brasileiro.
- Antes de usar, monte uma folha de contato com as candidatas e confira visualmente. Descarte fotos borradas, escuras, com marca d'água ou que não combinem com o item.
- Salve as fotos dentro do projeto (ex.: `site-xxx/img/`), recortadas no tamanho certo e com peso leve (cerca de 640×480 para cards e até 1000 px para destaques). Publique-as junto com a página.
- Dê a toda `<img>` um `alt` descritivo em português, `width`/`height` e `loading="lazy"` abaixo da dobra.
- Coloque os créditos dos fotógrafos no rodapé.
- Depois de montar a página, abra num navegador (desktop e celular) e confirme que todas as imagens carregam.

## Usuário

- Responder em português do Brasil.
- Trabalha com criação de sites (clientes como restaurantes e logística) e usa Windows. Prefere soluções prontas.
- Marca: **Vértice Digital** (Adilson Monteiro). WhatsApp (11) 94254-7938, Instagram @vertice.digital.sp. Usar no portfólio e no crédito "Criado por" das amostras.
- Os sites deste repositório (`site-restaurante/`, `site-rota-leve/`) são **amostras de portfólio** para oferecer a clientes: nomes, textos, preços e contatos são fictícios e devem continuar marcados como exemplo até virar o site de um cliente real.
- Fazer perguntas esclarecedoras antes de executar e pesquisar em fontes confiáveis, sem respostas genéricas ou inventadas.

## Amostras publicadas (portfólio Vértice Digital)

- Portfólio: https://claude.ai/artifact/PxFKmpK476LjbHCje8Tuoq (`portfolio/`)
- Restaurante Brasa & Horta: https://claude.ai/artifact/WgqwpeEiV2YPmxsogi2Lpv (`site-restaurante/`)
- Transportadora Rota Leve: https://claude.ai/artifact/6DR3eWiu6xPQYhWLu5pSx7 (`site-rota-leve/`)
- Barbearia Dom Navalha: https://claude.ai/artifact/CZFmvnyEAmgQ1AmieLLqDe (`site-barbearia/`)
- Pet shop Focinho Feliz: https://claude.ai/artifact/WkbVZ7Az1WSMrJVmG54ac5 (`site-petshop/`)
- Oficina Torque Auto Center: https://claude.ai/artifact/1NQ4Dxmt6NxVqbuiXhPWBk (`site-oficina/`)
- Dentista Odonto Aurora: https://claude.ai/artifact/5ktnto2ijLtxd5F4gfSTYT (`site-clinica/`)
- Hortifruti Verde Vivo: https://claude.ai/artifact/EG1tA3q4xjE1hbaKqAwx3G (`site-hortifruti/`)
- Pizzaria Forno da Vila: https://claude.ai/artifact/EeFcMSLK4pYUPU5kiNzbkm (`site-pizzaria/`)
- Para atualizar um artefato existente, publicar passando a URL acima em `url` (ler antes com `action: "read"`). `publicar/montar.py` monta a versão para o Netlify Drop; ao criar amostra nova, incluir em `PAGINAS` e `LINKS_AMOSTRA`.

## Próxima etapa combinada: topo e rodapé que "vendem sozinhos" (nas 8 amostras)

- O usuário vai mandar prints de topos e rodapés de referência. Fazer o **topo** de cada amostra inspirado nesses prints.
- **Aprovado:** acima do topo da empresa fictícia, uma faixa fina da Vértice Digital ("Modelo de site para <segmento> · Quero um assim"), que pode ser fechada.
- **Rodapé aprovado:** rodapé da empresa no estilo dos prints, e logo abaixo um bloco de fechamento da Vértice Digital com "Gostou? Seu negócio pode ter um site igual a este.", o que está incluso (versão para celular, botão de WhatsApp, fotos profissionais, colocar no ar), botão grande de WhatsApp e Instagram.
- Botão flutuante de WhatsApp em todas as páginas.
- **Não mostrar preço** do serviço: tudo leva ao WhatsApp 5511942547938 com mensagem pronta citando o segmento (ex.: "Olá! Vi o modelo da pizzaria e quero um site assim para o meu negócio.").
