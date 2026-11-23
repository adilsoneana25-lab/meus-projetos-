---
name: "imagens-prontas-site-artefatos"
description: "Imagens para sites e artefatos: fotos reais do Unsplash (busca, download otimizado em WebP e crédito) e SVGs originais (fundos, divisores, ícones). Use ao criar um site sem fotos do cliente. Antes dela, acione designer-imagens-profissional."
---

# Imagens prontas para sites e artefatos

> Ao criar qualquer site, acione primeiro a skill designer-imagens-profissional (ficha de estilo e imagens sob medida). Volte para esta biblioteca só para ícones, divisores, fundos e placeholders, ou quando não for possível gerar imagem.

Biblioteca de imagens originais em SVG, leves e prontas para colar em HTML, mais regras para usá-las bem. É o **plano B**: use quando a página precisar de visual, a pessoa não tiver enviado imagens próprias e não for possível gerar uma imagem sob medida.

**Ordem de prioridade:** 1) fotos reais do cliente; 2) fotos do Unsplash (ver seção Fotos do Unsplash); 3) imagens geradas sob medida seguindo a ficha de estilo da skill designer-imagens-profissional; 4) esta biblioteca, para fundos, divisores, ícones e placeholders. Ilustrações temáticas prontas são o último recurso, porque se repetem em todo site. Nunca reutilize a mesma ilustração temática em sites de clientes diferentes.

## Fotos do Unsplash
Fonte padrão de fotos reais quando o cliente não enviou as dele.
- **Buscar** com a ferramenta de busca de fotos do Unsplash: uma ideia por busca, termo curto (ex.: "caminhão estrada", "armazém logística", "empilhadeira"). Use `orientation: landscape` para o topo e `squarish` ou `portrait` para cards. `lang: pt` aceita termos em português.
- **Escolher** fotos coerentes entre si: mesma luz, mesma temperatura de cor, sem texto ou marca visível, sem rostos em close se o site não pedir pessoas. Evite fotos marcadas como premium/Plus.
- **Baixar** pelo endereço `urls.raw` com parâmetros de tamanho: `&w=1600&fm=webp&q=80` (topo) ou `&w=800&fm=webp&q=80` (cards). Salve ao lado do HTML e referencie pelo caminho local, ou embuta como `data:` se for artefato de arquivo único (cuidado com o limite de 16 MB).
- **Creditar** o fotógrafo no rodapé ou num `figcaption` discreto: "Foto: Nome / Unsplash", com link para o perfil (`user.links.html`). Confira os termos atuais em unsplash.com/license.
- **HTML:** `width` e `height` definidos, `alt` descritivo em português, `loading='lazy'` em todas menos a principal, `object-fit:cover` para manter o enquadramento.
- **Contraste:** texto sobre foto precisa de uma camada escura ou gradiente (ex.: `linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.2))`).
- **Entrega:** liste as fotos usadas (autor e link) para a pessoa poder trocar pelas próprias.

## Regras gerais
- Prefira **SVG inline**: não depende de arquivo externo, escala sem perder qualidade e funciona em artefatos.
- Cores via variáveis CSS ou `currentColor`, para trocar a paleta sem editar o SVG. Se existir uma ficha de estilo do site, use a paleta dela. A paleta suave abaixo é só o padrão quando não há nenhuma definida:
```css
:root{--c1:#CDE7D8;--c2:#F6E7C8;--c3:#F4C7B5;--c4:#F2D98D;--c5:#E8A598;--ink:#2F3E36;--soft:#EEF3EF}
@media (prefers-color-scheme: dark){:root{--c1:#2E4A3C;--c2:#4A4030;--c3:#5A4038;--c4:#5E5230;--c5:#6A403A;--ink:#E8EFEA;--soft:#1F2A24}}
```
- Adapte as cores à paleta do projeto. Se a pessoa já definiu uma, use a dela.
- Para sites de tema escuro, no estilo Apple, troque as variáveis por esta versão e ajuste o acento (`--c5`) para a cor da marca:
```css
:root{--c1:#1D1D1F;--c2:#2C2C2E;--c3:#3A3A3C;--c4:#F5F5F7;--c5:#2997FF;--ink:#F5F5F7;--soft:#161617}
```
- Imagens decorativas levam `aria-hidden='true'`. Imagens com significado levam `role='img'` e `aria-label` em português.
- Sempre defina `viewBox` e use `width:100%; height:auto` (ou `max-width:100%`) para ficar responsivo.
- Se repetir o mesmo SVG na página, troque os ids (hero-g, dots, petalas) por ids únicos.
- Dentro de atributos com aspas simples, nunca use aspas simples (ex.: `style='stroke-width:2'` está certo; `stroke-width='2'` dentro de style quebra o SVG).
- Use apenas imagens originais. Não reproduza logos, marcas, personagens ou obras existentes, e não escreva nomes de marcas nas ilustrações.
- Não faça hotlink de imagens de terceiros. Para fotos reais, use as da pessoa ou fotos do Unsplash baixadas e otimizadas (ver seção Fotos do Unsplash); sem nenhuma das duas, deixe um placeholder.
- Mantenha a página abaixo de 16 MB. SVGs simples ficam em poucos KB.

## Fundos e formas

### 1. Fundo gradiente para hero
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 600' preserveAspectRatio='xMidYMid slice' aria-hidden='true'>
  <defs><linearGradient id='hero-g' x1='0' y1='0' x2='1' y2='1'>
    <stop offset='0' style='stop-color:var(--c1,#CDE7D8)'/>
    <stop offset='1' style='stop-color:var(--c2,#F6E7C8)'/>
  </linearGradient></defs>
  <rect width='1600' height='600' fill='url(#hero-g)'/>
  <circle cx='1350' cy='120' r='220' fill='#fff' opacity='.35'/>
  <circle cx='200' cy='520' r='280' fill='#fff' opacity='.25'/>
</svg>
```
Uso: `position:absolute; inset:0; width:100%; height:100%; z-index:-1` dentro de uma seção com `position:relative`.

### 2. Divisor em onda (entre seções)
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120' preserveAspectRatio='none' aria-hidden='true' style='display:block;width:100%;height:80px;color:var(--soft,#EEF3EF)'>
  <path d='M0,64 C240,112 480,16 720,48 C960,80 1200,112 1440,48 L1440,120 L0,120 Z' fill='currentColor'/>
</svg>
```
A cor do divisor deve ser a cor da seção de baixo.

### 3. Padrão de pontos (textura)
```html
<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' aria-hidden='true' style='color:var(--ink,#2F3E36)'>
  <defs><pattern id='dots' width='24' height='24' patternUnits='userSpaceOnUse'>
    <circle cx='2' cy='2' r='1.5' fill='currentColor' opacity='.2'/>
  </pattern></defs>
  <rect width='100%' height='100%' fill='url(#dots)'/>
</svg>
```

### 4. Forma orgânica (blob)
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400' aria-hidden='true' style='color:var(--c1,#CDE7D8)'>
  <path fill='currentColor' d='M200 40 C300 30 370 110 360 200 C350 300 270 370 180 360 C90 350 30 280 40 190 C50 100 110 50 200 40 Z'/>
</svg>
```
Use atrás de títulos, fotos ou cartões, com opacidade baixa, para dar profundidade.

### 5. Placeholder de imagem (cards, produtos, banners)
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' role='img' aria-label='Imagem ilustrativa'>
  <rect width='800' height='600' style='fill:var(--soft,#EEF3EF)'/>
  <circle cx='560' cy='190' r='56' style='fill:var(--c2,#F6E7C8)'/>
  <path d='M0 600 L240 330 L400 480 L540 360 L800 600 Z' style='fill:var(--c1,#CDE7D8)'/>
</svg>
```
Troque pela foto real quando a pessoa enviar. Mantenha a mesma proporção (4:3) para o layout não pular.

## Ícones (24×24, traço)
Use um único set de ícones por site, sempre com a mesma espessura de traço, os mesmos cantos e as cores da paleta. Não misture com ícones de outro estilo.
Envolva cada ícone assim: `<svg viewBox='0 0 24 24' width='24' height='24' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true'>` ... `</svg>`

**Comércio e compras**
- Carrinho: `<path d='M3 4h2l2.4 11h10.2L20 7H6.2'/><circle cx='9' cy='19' r='1.5'/><circle cx='17' cy='19' r='1.5'/>`
- Sacola: `<path d='M6 8h12l-1 12H7L6 8z'/><path d='M9 8a3 3 0 0 1 6 0'/>`
- Loja: `<path d='M4 9l1.5-5h13L20 9'/><path d='M4 9a2.67 2.67 0 0 0 5.33 0 2.67 2.67 0 0 0 5.34 0 2.67 2.67 0 0 0 5.33 0'/><path d='M5 12v8h14v-8'/><path d='M10 20v-5h4v5'/>`
- Etiqueta de preço: `<path d='M3 12V4h8l10 10-8 8z'/><circle cx='7.5' cy='8.5' r='1.2'/>`
- Cartão (pagamento): `<rect x='3' y='6' width='18' height='12' rx='2'/><path d='M3 10h18M7 15h3'/>`

**Comida**
- Maçã (frutas): `<path d='M12 8c-3-2-7 0-7 5s3 8 5 8c1 0 1-.6 2-.6s1 .6 2 .6c2 0 5-3 5-8s-4-7-7-5z'/><path d='M12 8c0-2 1-3 3-4'/>`
- Pão (padaria): `<path d='M4 12a4 4 0 0 1 3-6h10a4 4 0 0 1 3 6v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z'/><path d='M9 10l1 3M13 10l1 3'/>`
- Xícara (café): `<path d='M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z'/><path d='M16 10h2a2 2 0 0 1 0 5h-2'/><path d='M9 4v2M13 4v2'/>`
- Talheres (restaurante): `<path d='M7 3v7a2 2 0 0 0 4 0V3M9 3v18'/><path d='M17 3c-2 2-2.5 5-2.5 8H17v10'/>`
- Folha (natural, fresco): `<path d='M5 19c0-8 5-14 15-14 0 10-6 15-14 15'/><path d='M5 19c3-5 6-8 10-10'/>`

**Serviços e contato**
- Caminhão (entrega): `<path d='M2 6h11v10H2z'/><path d='M13 9h4l3 3v4h-7'/><circle cx='6.5' cy='17.5' r='1.8'/><circle cx='16.5' cy='17.5' r='1.8'/>`
- Prancheta (checklist): `<rect x='5' y='4' width='14' height='17' rx='2'/><path d='M9 4V3h6v1M8.5 11l1.5 1.5L13 9.5M8.5 17h7'/>`
- Calendário (agendamento): `<rect x='4' y='5' width='16' height='15' rx='2'/><path d='M4 10h16M8 3v4M16 3v4'/>`
- Relógio (horário): `<circle cx='12' cy='12' r='9'/><path d='M12 7v5l3 2'/>`
- Localização: `<path d='M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z'/><circle cx='12' cy='10' r='2.5'/>`
- Telefone: `<path d='M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z'/>`
- Chat (mensagem): `<path d='M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 4v-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z'/>`
- E-mail: `<rect x='3' y='5' width='18' height='14' rx='2'/><path d='M3 7l9 6 9-6'/>`
- Estrela (avaliação): `<path d='M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z'/>`
- Coração (favoritos): `<path d='M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z'/>`

## Ilustrações temáticas
Todas usam as variáveis da paleta, aceitam `max-width:100%` e são desenhadas com traço escuro e preenchimento suave. Para trocar o visual, mude só as variáveis de cor.

### Mercado: fachada de loja
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' role='img' aria-label='Fachada de mercado de bairro'>
  <rect y='250' width='400' height='50' style='fill:var(--c1,#CDE7D8)'/>
  <rect x='60' y='110' width='280' height='140' rx='6' style='fill:var(--soft,#EEF3EF);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <rect x='85' y='150' width='65' height='60' rx='4' style='fill:var(--c2,#F6E7C8);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <rect x='250' y='150' width='65' height='60' rx='4' style='fill:var(--c2,#F6E7C8);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <rect x='170' y='170' width='60' height='80' rx='4' style='fill:var(--c1,#CDE7D8);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <circle cx='218' cy='212' r='3' style='fill:var(--ink,#2F3E36)'/>
  <path d='M70 60H330L350 110H50Z' style='fill:var(--c3,#F4C7B5);stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round'/>
  <path d='M130 60L119 110M200 60V110M270 60L281 110' style='fill:none;stroke:var(--c2,#F6E7C8);stroke-width:24;opacity:.7'/>
  <path d='M50 110q15 20 30 0q15 20 30 0q15 20 30 0q15 20 30 0q15 20 30 0q15 20 30 0q15 20 30 0q15 20 30 0q15 20 30 0q15 20 30 0' style='fill:var(--c3,#F4C7B5);stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round'/>
</svg>
```

### Mercado: cesta de compras
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' role='img' aria-label='Cesta de compras com fruta, pão e garrafa'>
  <path d='M130 120C130 40 270 40 270 120' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:6;stroke-linecap:round'/>
  <ellipse cx='265' cy='100' rx='46' ry='24' transform='rotate(-20 265 100)' style='fill:var(--c4,#F2D98D);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <circle cx='150' cy='100' r='34' style='fill:var(--c5,#E8A598);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <path d='M150 66q4-16 18-18' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linecap:round'/>
  <rect x='198' y='60' width='34' height='70' rx='8' style='fill:var(--c1,#CDE7D8);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <path d='M80 120H320L295 240Q293 250 283 250H117Q107 250 105 240Z' style='fill:var(--c3,#F4C7B5);stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round'/>
  <path d='M120 150V225M160 150V230M200 150V230M240 150V230M280 150V225' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:3;opacity:.25'/>
</svg>
```

### Padaria: cesta de pães
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' role='img' aria-label='Cesta com baguetes e pão redondo'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <g transform='rotate(-18 142 135)'><rect x='120' y='40' width='44' height='190' rx='22' style='fill:var(--c4,#F2D98D)'/><path d='M130 72l24 10M130 108l24 10M130 144l24 10M130 180l24 10' fill='none'/></g>
    <g transform='rotate(8 202 125)'><rect x='180' y='30' width='44' height='190' rx='22' style='fill:var(--c4,#F2D98D)'/><path d='M190 62l24 10M190 98l24 10M190 134l24 10M190 170l24 10' fill='none'/></g>
    <ellipse cx='270' cy='150' rx='62' ry='46' style='fill:var(--c4,#F2D98D)'/>
    <path d='M240 128q10 14 0 28M270 120q10 18 0 36M300 128q10 14 0 28' fill='none'/>
    <path d='M70 190H330L305 262Q303 272 293 272H107Q97 272 95 262Z' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M85 218H315M92 244H308M140 190V272M200 190V272M260 190V272' fill='none' opacity='.3'/>
  </g>
</svg>
```

### Padaria e confeitaria: bolo com cobertura
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' role='img' aria-label='Bolo com cobertura e cereja'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <ellipse cx='200' cy='252' rx='150' ry='24' style='fill:var(--soft,#EEF3EF)'/>
    <path d='M100 150H300V235Q300 250 285 250H115Q100 250 100 235Z' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M100 200H300' fill='none' opacity='.3'/>
    <path d='M96 150Q96 118 128 118H272Q304 118 304 150V158Q304 172 290 172Q276 172 276 160Q276 174 258 174Q240 174 240 160Q240 172 224 172Q208 172 208 160Q208 174 190 174Q172 174 172 160Q172 172 156 172Q140 172 140 160Q140 172 124 172Q108 172 104 164Q96 162 96 150Z' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M200 92q4-14 16-18' fill='none'/>
    <circle cx='200' cy='104' r='14' style='fill:var(--c5,#E8A598)'/>
    <g style='stroke:none'><circle cx='140' cy='138' r='4' style='fill:var(--c1,#CDE7D8)'/><circle cx='168' cy='134' r='4' style='fill:var(--c5,#E8A598)'/><circle cx='236' cy='134' r='4' style='fill:var(--c4,#F2D98D)'/><circle cx='264' cy='140' r='4' style='fill:var(--c1,#CDE7D8)'/></g>
  </g>
</svg>
```

### Hortifruti: caixas de frutas e verduras
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' role='img' aria-label='Caixas com maçãs, laranjas, alfaces e cenoura'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <path d='M20 278H380' fill='none'/>
    <circle cx='70' cy='165' r='24' style='fill:var(--c5,#E8A598)'/><circle cx='115' cy='165' r='24' style='fill:var(--c5,#E8A598)'/><circle cx='160' cy='165' r='24' style='fill:var(--c5,#E8A598)'/>
    <circle cx='92' cy='140' r='24' style='fill:var(--c4,#F2D98D)'/><circle cx='138' cy='140' r='24' style='fill:var(--c4,#F2D98D)'/>
    <rect x='40' y='178' width='150' height='98' rx='6' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M40 211H190M40 244H190' fill='none'/>
    <circle cx='245' cy='152' r='30' style='fill:var(--c1,#CDE7D8)'/><circle cx='325' cy='152' r='30' style='fill:var(--c1,#CDE7D8)'/>
    <path d='M233 152q12 12 24 0M313 152q12 12 24 0' fill='none'/>
    <path d='M285 178L277 122L293 122Z' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M285 122q-6-18-14-22M285 122q0-20 4-26M285 122q8-16 18-18' fill='none'/>
    <rect x='210' y='178' width='150' height='98' rx='6' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M210 211H360M210 244H360' fill='none'/>
  </g>
</svg>
```

### Hortifruti: banca de feira
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' role='img' aria-label='Banca de feira com toldo listrado e frutas'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <path d='M60 110V270M340 110V270' fill='none' stroke-width='5'/>
    <path d='M40 70H80L95 120H60Z' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M80 70H120L130 120H95Z' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M120 70H160L165 120H130Z' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M160 70H200V120H165Z' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M200 70H240L235 120H200Z' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M240 70H280L270 120H235Z' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M280 70H320L305 120H270Z' style='fill:var(--c3,#F4C7B5)'/>
    <path d='M320 70H360L340 120H305Z' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M72 218V272M328 218V272' fill='none' stroke-width='5'/>
    <circle cx='115' cy='159' r='15' style='fill:var(--c5,#E8A598)'/><circle cx='145' cy='159' r='15' style='fill:var(--c5,#E8A598)'/>
    <circle cx='215' cy='159' r='15' style='fill:var(--c4,#F2D98D)'/><circle cx='245' cy='159' r='15' style='fill:var(--c4,#F2D98D)'/>
    <circle cx='100' cy='185' r='15' style='fill:var(--c5,#E8A598)'/><circle cx='130' cy='185' r='15' style='fill:var(--c5,#E8A598)'/><circle cx='160' cy='185' r='15' style='fill:var(--c5,#E8A598)'/>
    <circle cx='200' cy='185' r='15' style='fill:var(--c4,#F2D98D)'/><circle cx='230' cy='185' r='15' style='fill:var(--c4,#F2D98D)'/><circle cx='260' cy='185' r='15' style='fill:var(--c4,#F2D98D)'/>
    <circle cx='305' cy='182' r='18' style='fill:var(--c1,#CDE7D8)'/>
    <rect x='50' y='200' width='300' height='18' rx='4' style='fill:var(--c3,#F4C7B5)'/>
  </g>
</svg>
```

### Café: xícara com vapor
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Xícara de café com vapor'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <path d='M115 100q-10-12 0-24t0-24M150 100q-10-12 0-24t0-24M185 100q-10-12 0-24t0-24' fill='none' opacity='.6'/>
    <ellipse cx='150' cy='244' rx='112' ry='20' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M230 150H246Q270 150 270 172Q270 194 246 194H226' fill='none' stroke-width='6'/>
    <path d='M70 130H230V170Q230 238 150 238Q70 238 70 170Z' style='fill:var(--c3,#F4C7B5)'/>
    <ellipse cx='150' cy='130' rx='80' ry='14' style='fill:var(--c4,#F2D98D)'/>
    <path d='M138 129q12-8 24 0' fill='none'/>
  </g>
</svg>
```

### Comida: prato com refeição
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Prato de comida visto de cima, com garfo e faca'>
  <circle cx='150' cy='150' r='100' style='fill:var(--soft,#EEF3EF);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <circle cx='150' cy='150' r='72' style='fill:var(--c2,#F6E7C8);stroke:var(--ink,#2F3E36);stroke-width:2'/>
  <circle cx='128' cy='140' r='30' style='fill:var(--c1,#CDE7D8);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <ellipse cx='182' cy='124' rx='24' ry='16' style='fill:var(--c3,#F4C7B5);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <circle cx='170' cy='178' r='22' style='fill:var(--c4,#F2D98D);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <circle cx='120' cy='185' r='10' style='fill:var(--c5,#E8A598);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <path d='M24 70v40q0 14 14 14t14-14V70M38 70v54M38 124v110' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:4;stroke-linecap:round;stroke-linejoin:round'/>
  <path d='M262 70q24 40 0 90v74' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:4;stroke-linecap:round;stroke-linejoin:round'/>
</svg>
```

### Moda: camisa no cabide
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Camisa em um cabide'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <path d='M150 72Q150 58 162 52Q176 46 176 32Q176 16 160 16Q144 16 144 30' fill='none'/>
    <path d='M150 72L40 132Q30 140 42 140H258Q270 140 260 132Z' fill='none'/>
    <path d='M110 110L70 130L40 177L70 197L92 172V272H208V172L230 197L260 177L230 130L190 110Q170 130 150 130Q130 130 110 110Z' style='fill:var(--c1,#CDE7D8)'/>
    <path d='M150 130V272' fill='none' opacity='.35'/>
    <rect x='168' y='172' width='28' height='28' rx='3' fill='none'/>
    <g style='fill:var(--ink,#2F3E36);stroke:none'><circle cx='150' cy='162' r='3'/><circle cx='150' cy='192' r='3'/><circle cx='150' cy='222' r='3'/><circle cx='150' cy='252' r='3'/></g>
  </g>
</svg>
```

### Floricultura: vaso com flores
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Vaso com flores'>
  <defs><g id='petalas'><circle cx='0' cy='-18' r='14'/><circle cx='17' cy='-5.6' r='14'/><circle cx='10.6' cy='14.6' r='14'/><circle cx='-10.6' cy='14.6' r='14'/><circle cx='-17' cy='-5.6' r='14'/></g></defs>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <path d='M150 190V92M150 190Q110 150 95 104M150 190Q190 150 205 104' fill='none' stroke-width='4'/>
    <path d='M150 172Q120 162 112 142Q140 144 150 172Z' style='fill:var(--c1,#CDE7D8)'/>
    <path d='M150 172Q180 162 188 142Q160 144 150 172Z' style='fill:var(--c1,#CDE7D8)'/>
    <use href='#petalas' transform='translate(150 78)' style='fill:var(--c5,#E8A598)'/>
    <circle cx='150' cy='78' r='9' style='fill:var(--c4,#F2D98D)'/>
    <use href='#petalas' transform='translate(95 96) scale(.8)' style='fill:var(--c2,#F6E7C8)'/>
    <circle cx='95' cy='96' r='7' style='fill:var(--c5,#E8A598)'/>
    <use href='#petalas' transform='translate(205 96) scale(.8)' style='fill:var(--c4,#F2D98D)'/>
    <circle cx='205' cy='96' r='7' style='fill:var(--c5,#E8A598)'/>
    <path d='M95 206H205L192 272H108Z' style='fill:var(--c3,#F4C7B5)'/>
    <rect x='84' y='190' width='132' height='20' rx='6' style='fill:var(--c3,#F4C7B5)'/>
  </g>
</svg>
```

### Papelaria e livraria: pilha de livros
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Pilha de livros com um lápis'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <rect x='50' y='214' width='200' height='46' rx='4' style='fill:var(--c1,#CDE7D8)'/><path d='M68 214V260M232 214V260' fill='none'/>
    <rect x='70' y='168' width='170' height='46' rx='4' style='fill:var(--c3,#F4C7B5)'/><path d='M88 168V214M222 168V214' fill='none'/>
    <g transform='rotate(-4 150 147)'><rect x='60' y='126' width='180' height='42' rx='4' style='fill:var(--c4,#F2D98D)'/><path d='M78 126V168M222 126V168' fill='none'/></g>
    <g transform='rotate(-8 150 111)'><rect x='105' y='104' width='90' height='14' rx='3' style='fill:var(--c5,#E8A598)'/><path d='M195 104L217 111L195 118Z' style='fill:var(--c2,#F6E7C8)'/></g>
  </g>
</svg>
```

### Pet shop: tigela de ração, osso e pata
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Tigela de ração com osso e pata'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <path d='M80 172Q100 130 150 125Q200 130 220 172Z' style='fill:var(--c4,#F2D98D)'/>
    <g style='fill:var(--c3,#F4C7B5);stroke-width:2'><circle cx='115' cy='155' r='5'/><circle cx='140' cy='145' r='5'/><circle cx='165' cy='150' r='5'/><circle cx='190' cy='158' r='5'/><circle cx='150' cy='165' r='5'/></g>
    <path d='M60 170H240L222 240Q220 252 208 252H92Q80 252 78 240Z' style='fill:var(--c5,#E8A598)'/>
    <g transform='rotate(-25 80 70)'>
      <circle cx='40' cy='60' r='11' style='fill:var(--c2,#F6E7C8)'/><circle cx='40' cy='80' r='11' style='fill:var(--c2,#F6E7C8)'/>
      <circle cx='120' cy='60' r='11' style='fill:var(--c2,#F6E7C8)'/><circle cx='120' cy='80' r='11' style='fill:var(--c2,#F6E7C8)'/>
      <rect x='40' y='62' width='80' height='16' style='fill:var(--c2,#F6E7C8);stroke:none'/>
      <path d='M50 62H110M50 78H110' fill='none'/>
    </g>
    <ellipse cx='235' cy='90' rx='20' ry='16' style='fill:var(--c5,#E8A598)'/>
    <circle cx='212' cy='64' r='7' style='fill:var(--c5,#E8A598)'/><circle cx='227' cy='54' r='7' style='fill:var(--c5,#E8A598)'/><circle cx='244' cy='54' r='7' style='fill:var(--c5,#E8A598)'/><circle cx='259' cy='64' r='7' style='fill:var(--c5,#E8A598)'/>
  </g>
</svg>
```

### Qualquer loja: placa de aberto
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200' role='img' aria-label='Placa de loja aberta'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <path d='M110 10L150 60L190 10' fill='none'/>
    <rect x='40' y='60' width='220' height='110' rx='14' style='fill:var(--c1,#CDE7D8)'/>
    <rect x='52' y='72' width='196' height='86' rx='8' fill='none' stroke-width='2'/>
    <text x='150' y='122' text-anchor='middle' font-size='40' font-weight='700' font-family='system-ui,sans-serif' style='fill:var(--ink,#2F3E36);stroke:none'>ABERTO</text>
    <text x='150' y='145' text-anchor='middle' font-size='13' font-family='system-ui,sans-serif' style='fill:var(--ink,#2F3E36);stroke:none'>Venha nos visitar</text>
  </g>
</svg>
```
Edite os textos conforme a loja (ex.: FECHADO, Horário de atendimento).

### Qualquer loja: maquininha e pagamento
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Maquininha de cartão com pagamento aprovado'>
  <g style='stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round;stroke-linecap:round'>
    <rect x='90' y='30' width='120' height='230' rx='16' style='fill:var(--c1,#CDE7D8)'/>
    <rect x='106' y='48' width='88' height='60' rx='6' style='fill:var(--c2,#F6E7C8)'/>
    <path d='M130 78l10 10 22-22' fill='none' stroke-width='4'/>
    <g style='fill:var(--c2,#F6E7C8);stroke-width:2'><circle cx='120' cy='135' r='8'/><circle cx='150' cy='135' r='8'/><circle cx='180' cy='135' r='8'/><circle cx='120' cy='165' r='8'/><circle cx='150' cy='165' r='8'/><circle cx='180' cy='165' r='8'/><circle cx='120' cy='195' r='8'/><circle cx='150' cy='195' r='8'/><circle cx='180' cy='195' r='8'/><circle cx='120' cy='225' r='8' style='fill:var(--c5,#E8A598)'/><circle cx='150' cy='225' r='8'/><circle cx='180' cy='225' r='8' style='fill:var(--c4,#F2D98D)'/></g>
    <g transform='rotate(-15 240 172)'><rect x='190' y='140' width='100' height='64' rx='8' style='fill:var(--c3,#F4C7B5)'/><path d='M190 160H290' fill='none'/></g>
  </g>
</svg>
```

### Serviços: van de entrega
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 240' role='img' aria-label='Van de entrega'>
  <path d='M20 212H380' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:4;stroke-linecap:round'/>
  <path d='M10 100H30M0 130H25M12 160H30' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:4;stroke-linecap:round;opacity:.4'/>
  <rect x='40' y='70' width='210' height='110' rx='10' style='fill:var(--soft,#EEF3EF);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <path d='M250 100H312L352 140V180H250Z' style='fill:var(--c1,#CDE7D8);stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round'/>
  <path d='M268 112H304L330 140H268Z' style='fill:var(--c2,#F6E7C8);stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round'/>
  <rect x='110' y='95' width='70' height='60' rx='4' style='fill:var(--c3,#F4C7B5);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <path d='M145 95V118M110 118H180' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <circle cx='110' cy='185' r='26' style='fill:var(--ink,#2F3E36)'/><circle cx='110' cy='185' r='10' style='fill:var(--soft,#EEF3EF)'/>
  <circle cx='300' cy='185' r='26' style='fill:var(--ink,#2F3E36)'/><circle cx='300' cy='185' r='10' style='fill:var(--soft,#EEF3EF)'/>
</svg>
```

### Serviços: agendamento confirmado
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 300' role='img' aria-label='Calendário com horário confirmado'>
  <rect x='60' y='60' width='240' height='210' rx='16' style='fill:var(--soft,#EEF3EF);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <path d='M60 76a16 16 0 0 1 16-16h208a16 16 0 0 1 16 16v44H60Z' style='fill:var(--c3,#F4C7B5);stroke:var(--ink,#2F3E36);stroke-width:3;stroke-linejoin:round'/>
  <path d='M110 42V76M250 42V76' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:8;stroke-linecap:round'/>
  <rect x='84' y='140' width='48' height='34' rx='6' style='fill:var(--c1,#CDE7D8)'/>
  <rect x='156' y='140' width='48' height='34' rx='6' style='fill:var(--c1,#CDE7D8)'/>
  <rect x='228' y='140' width='48' height='34' rx='6' style='fill:var(--c1,#CDE7D8)'/>
  <rect x='84' y='190' width='48' height='34' rx='6' style='fill:var(--c1,#CDE7D8)'/>
  <rect x='156' y='190' width='48' height='34' rx='6' style='fill:var(--c1,#CDE7D8)'/>
  <circle cx='252' cy='222' r='32' style='fill:var(--c4,#F2D98D);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  <path d='M236 222l12 12 22-24' style='fill:none;stroke:var(--ink,#2F3E36);stroke-width:6;stroke-linecap:round;stroke-linejoin:round'/>
</svg>
```

### Serviços: ferramentas cruzadas
```html
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' role='img' aria-label='Martelo e chave de fenda cruzados'>
  <g transform='rotate(45 150 150)'>
    <rect x='142' y='90' width='16' height='170' rx='6' style='fill:var(--c3,#F4C7B5);stroke:var(--ink,#2F3E36);stroke-width:3'/>
    <rect x='100' y='60' width='100' height='36' rx='8' style='fill:var(--c1,#CDE7D8);stroke:var(--ink,#2F3E36);stroke-width:3'/>
  </g>
  <g transform='rotate(-45 150 150)'>
    <rect x='139' y='170' width='22' height='90' rx='10' style='fill:var(--c4,#F2D98D);stroke:var(--ink,#2F3E36);stroke-width:3'/>
    <rect x='147' y='70' width='6' height='100' style='fill:var(--ink,#2F3E36)'/>
    <path d='M145 70h10l-5-12z' style='fill:var(--ink,#2F3E36)'/>
  </g>
</svg>
```

## Qual usar
- **Mercado e loja de bairro:** fachada de loja, cesta de compras e ícones de comércio.
- **Padaria e confeitaria:** cesta de pães, bolo com cobertura, ícones de pão e xícara.
- **Hortifruti e feira:** caixas de frutas e verduras, banca de feira, ícones de maçã e folha.
- **Café, restaurante, lanchonete:** xícara com vapor, prato com refeição, ícones de comida.
- **Moda e acessórios:** camisa no cabide e ícones de sacola e etiqueta.
- **Floricultura e presentes:** vaso com flores.
- **Papelaria e livraria:** pilha de livros com lápis.
- **Pet shop:** tigela, osso e pata.
- **Qualquer comércio:** placa de aberto, maquininha de pagamento, fundo de hero, divisor em onda, blob e placeholder.
- **Prestação de serviço, entregas, reparos:** van de entrega, agendamento, ferramentas e ícones de serviços.
- Escolha poucas imagens por página (uma ilustração principal, um fundo ou divisor e ícones consistentes). Menos é mais.
- Se a página tiver tema escuro ou estilo Apple, não use as ilustrações pastel prontas; prefira imagem gerada sob medida e use a biblioteca só para ícones e divisores.
- Se o comércio pedido não estiver na lista (açougue, farmácia, salão, oficina), crie uma ilustração nova no mesmo estilo: formas simples, traço escuro de 3 px com pontas arredondadas, 2 a 4 cores da paleta e `viewBox` 400×300.

## Usar como fundo CSS
SVG como data URI: troque `#` por `%23`, use aspas simples dentro do SVG e envolva em `url('data:image/svg+xml,...')`. Para cores variáveis, prefira SVG inline em vez de data URI.

## Quando precisar de imagem raster (foto, PNG, WebP)
- Se a pessoa enviar fotos, otimize com Python (Pillow): converta para WebP, largura máxima 1600 px (hero) ou 800 px (cards), qualidade perto de 80.
- No HTML: `width` e `height` definidos, `loading='lazy'` (exceto a imagem principal) e `alt` descritivo em português.
- Em artefatos, imagens embutidas como `data:` contam no limite de 16 MB. Prefira SVG ou imagens pequenas.

## Como montar
1. Entenda o tipo de comércio ou serviço e a paleta (pergunte só se for essencial).
2. Antes de usar a biblioteca, veja se dá para gerar imagem sob medida (skill designer-imagens-profissional). Se der, use a biblioteca só para ícones, divisores e placeholders; senão, escolha as imagens pela seção Qual usar.
3. Cole os SVGs no HTML, ajustando cores e tamanhos à paleta.
4. Confira no tamanho de celular: nada estoura a tela e o texto sobre fundos tem bom contraste.
5. Se publicar como artefato, mantenha tudo em um único HTML autocontido.

## Entrega
Resuma em 1 a 2 frases quais imagens foram usadas e onde, e avise onde a pessoa pode trocar por fotos próprias.