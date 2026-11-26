---
name: "hallmark-regras"
description: "Use quando o usuário disser 'hallmark' ou pedir para auditar um site ou página: aplica as regras anti cara de IA do Hallmark 2.0.0 (Chão, Reflexos e Acabamento) e gera relatório. Reforça a antislop e respeita o estilo Apple."
---

# Hallmark (versão enxuta, atualizada para o Hallmark 2.0.0)

Baseada na skill Hallmark de Nutlope (github.com/Nutlope/hallmark, licença MIT), arquivos `SKILL.md` e `references/gates.md` da versão 2.0.0 (conferidos em 26/11/2026). Os números entre parênteses são os números das regras no original, para consulta. Ela **reforça** a skill antislop; não substitui.

## Quando usar
- O usuário escreve "hallmark" ou "hallmark audit" junto de um site, landing page ou tela.
- Só em site/página/tela. Não usar em planilha, documento ou app sem interface web.
- Nunca mexer num design que já existe sem o usuário pedir pelo nome ("hallmark audit" ou "hallmark redesign").

## Prioridade (em caso de conflito, vence o que vem primeiro)
1. Pedido atual do usuário.
2. Estilo Apple e layout dos sites modelo (Grão Café, Horizonte Livre), skills frontend-design-adilson e animater.
3. Skill antislop.
4. Estas regras.

Não sortear tema, não trocar o estilo Apple por outro e não criar página de Design System.

## Conflitos já resolvidos a favor do estilo Apple
- **Fonte:** a fonte do sistema (SF Pro / `-apple-system`) é permitida nos títulos. O original proíbe (1); aqui não vale.
- **Centralizar:** topo e títulos centralizados são permitidos. As regras do original contra centralizar (6b e F15) não valem aqui.
- **Branco e cinzas:** o estilo Apple é minimalista, então vale a exceção do original para esse gênero: fundo `#fff` e cinzas sem matiz são permitidos, desde que declarados como variável.
- **Espaço reservado:** continua valendo a regra de deixar espaço com texto enquanto a imagem não chega, mas com limite: no máximo 5 espaços vazios na página e nunca 4 lado a lado (68). Passou disso, trocar por texto (nomes, lista, tabela).

## Imagens (regra do usuário, não mudar)
- Não usar a biblioteca de fotos nem gerador de imagem do Hallmark original, nem chave da Together AI.
- Acionar a skill designer-imagens-profissional: Claude escreve os prompts sob medida, o usuário gera no Gemini (grátis) e manda de volta. Figma só como reserva.
- Sem a imagem ainda: deixar o espaço reservado com texto, nunca foto aleatória, gradiente, listras, blocos ou formas abstratas.

---

## 1. Chão (nunca pode falhar)

### Base (as 16 regras de antes, com ajustes)
1. Toda cor e toda fonte passa por variável (token) declarada em `:root`. Nada de cor ou `font-family` solto depois disso. (48)
2. Nunca `transition: all`. Nunca animar `width`, `height`, `top` ou `left` (usar `transform` e `opacity`). (10a)
3. Nunca uma palavra em itálico solta dentro de um título em redondo. (38i)
4. `overflow-x: clip` em `html` e `body`. Nunca `hidden`, nunca `100vw`. Conferir que nada rola para o lado de 320 a 1920 px. (34)
5. Grades com imagem usam `minmax(0, 1fr)`. Títulos grandes levam `overflow-wrap: break-word` e `min-width: 0`. (50)
6. Todo elemento clicável tem `:focus-visible` visível na hora, com contraste de pelo menos 3:1. Nunca remover o `outline` sem colocar outro no lugar. (26a, 15)
7. Toda animação tem alternativa para `prefers-reduced-motion: reduce`, e o conteúdo aparece mesmo sem JavaScript (esconder só sob uma classe `.js`, ou usar `@starting-style`). (27, 62)
8. Nunca inventar métrica, depoimento, logo de cliente ou número de casos. Em site **modelo** com dados de exemplo, marcar claramente como "exemplo" e avisar que o cliente troca pelos reais. (46a)
9. Sem "eyebrow" (etiqueta pequena acima do título). Nenhum rótulo, legenda, cabeçalho de tabela, tag ou link do menu em caixa-alta, versalete ou com espaço entre letras acima de 0,03em. Usam a fonte do corpo, um passo menor, em minúsculas ou frase normal. (54, 67)
10. Sem textos meta unidos por ponto do meio, sem seta colada em link, sem bolinha de status decorativa. (63)
11. Sem degradê roxo para azul, roxo para rosa ou ciano no escuro, sem cartão dentro de cartão, sem emoji como ícone, sem janela de navegador ou sistema desenhada à mão. (2a, 4, 30a, 47a)
12. No computador (1280 x 800), o topo mostra título, uma frase e o botão principal sem rolar. (44b)
13. Cerca de 80 palavras por tela; o topo só tem título, uma frase e as ações. (58)
14. Conteúdo com largura máxima entre 1360 e 1520 px e centralizado. Em 1920 px crescem só as margens (pelo menos 120 px); o texto e as grades não crescem nem ganham colunas. (44d)
15. Conferir no celular primeiro: nada estoura para os lados, botões com tamanho confortável para o dedo.
16. Antes de entregar, rodar a revisão final (seção 5) e corrigir tudo que falhar.

### Novas no Chão
17. **Texto-clichê:** nada de palavras de marketing vazias ("sem complicação", "eleve", "potencialize", "revolucionário", "de outro nível", "solução completa", e as inglesas *seamless*, *robust*, *unlock*, *elevate*). Nada de nome falso (Fulano, Jane Doe, Acme). Nada do vaivém "Não é X. É Y." repetido. Nada de travessão (—) no texto. Nada de segundo botão de enfeite ("Saiba mais", "Comece já", "Agende uma demo"). Dizer o que o produto faz, com as palavras dele. (19)
18. **Formulário falso:** nunca mostrar "Enviado!", "Obrigado!" ou "Reservado!" se nada foi enviado de verdade. Até existir o envio, o formulário valida e diz claramente "Nada foi enviado; este formulário ainda não está conectado". (70)
19. **Preto e branco puros:** nada de `#000` ou `#fff` fora das variáveis. Usar um tom levemente tingido (exceção do estilo Apple acima). (7a)
20. **Contraste:** texto normal 4,5:1; texto grande, ícones, anel de foco e borda de campo 3:1. Texto do botão contrasta com a cor do botão. Painel escuro troca a cor do texto. Nada de texto cinza sobre fundo colorido. (40, 41)
21. **Altura do topo:** nunca em `vh`; usar `dvh` ou `svh`. (6a)
22. **Espaçamento:** todo `padding`, `margin` e `gap` usa a variável de espaço quando ela existir. (24a)
23. **Fixo no topo:** nunca dois elementos `position: sticky; top: 0` ao mesmo tempo. (56)
24. **Texto coberto:** nenhum texto escondido sob imagem, caixa ou outro texto (menu fixo é exceção). (73)
25. **Botão quebrando linha:** texto de botão e de link do menu principal nunca quebra em duas linhas, de 320 a 1920 px. (49a)
26. **Título em maiúsculas** que pode quebrar linha: altura de linha de pelo menos 1,0 (ideal 1,02 a 1,08). (55a)
27. **Abas só com CSS** não podem fazer a página pular a cada clique. (53)
28. **Campos de formulário:** borda com a mesma espessura em todos os estados; foco feito com `outline`, não com a borda; campo com a mesma altura do botão ao lado; desativado com três sinais (transparência, `cursor: not-allowed` e o atributo `disabled`). (39a)
29. **Vídeo:** se toca sozinho, sempre `autoplay muted loop playsinline`. A imagem principal nunca com `loading="lazy"`; usar `fetchpriority="high"`. (28a)
30. **Carrossel automático:** pausa ao passar o mouse e no foco, e tem botão de pausa visível se passar de 5 segundos. (18)
31. **Dica (tooltip):** no foco aparece sem atraso; no mouse, atraso de 800 a 1000 ms. (17)
32. **SVG/canvas decorativo** leva `aria-hidden="true"`; se não for decorativo, tem rótulo. (33)
33. **Imagem quebrada:** nenhuma `<img>` sem arquivo ou que não carrega; nenhuma foto paga de banco de imagens. (76)

---

## 2. Reflexos (vícios comuns de IA)

Corrigir sempre. Só pode quebrar com motivo real deste site, anotado no CSS assim:
`/* Hallmark · quebra 3 · motivo concreto ligado a esta página */`
Se a mesma regra for quebrada em 3 sites seguidos, virou estilo da casa: avisar o usuário.

**Cor e fundo**
- Texto com degradê em qualquer cor. (2b)
- Manchas de luz, bolhas desfocadas, auréola ou brilho colorido atrás do texto. (29)
- Cor de destaque ocupando mais de ~5% da tela. (23)
- O visual "creme + fonte serifada de alto contraste + terracota". (65)
- Paleta padrão do Tailwind (`indigo-500`, `violet-600`, `slate-900`...). Misturar uma cor própria. (74)

**Tipografia**
- Uma palavra do título destacada por cor, negrito, marca-texto ou sublinhado. Título tem um peso, um estilo, uma cor. (38iii)
- Mais de 2 famílias de fonte (3 só com uma fonte de exceção para um único papel). (37)
- Fonte monoespaçada em rótulos, legendas ou cabeçalhos quando o conteúdo não é código. (64)
- Texto corrido com largura fora de 45 a 75 caracteres (`max-width: 65ch`). (25)
- Corpo abaixo de 16 px, texto funcional abaixo de 11 px, entrelinha de parágrafo abaixo de 1,3. (75)

**Estrutura**
- Três colunas iguais de cartão com ícone em cima e título embaixo; ícone dentro de quadradinho arredondado; faixa colorida grossa na lateral do cartão. (3)
- O molde de IA: topo, três vantagens, chamada, rodapé. Ou a mesma estrutura do último site feito. (8)
- Todas as seções separadas do mesmo jeito, com o mesmo espaço. Espaço entre seções de pelo menos 120 px em 1440 px, variando. (9, 59)
- Menu e rodapé no automático (logo à esquerda, links, botão à direita / quatro colunas de links, redes sociais, copyright) sem ter decidido isso de propósito. (42)
- Título de seção abaixo de 40 px em 1440 px. (78)
- Título colado no conteúdo de cima: o espaço acima de um título deve ser pelo menos o dobro do espaço abaixo. (71)
- Texto apertado dentro de caixa; texto a menos de 16 px da borda do celular. (72)
- Seção magra: só um título e uma linha numa tela larga. Resolver com imagem maior, título maior ou juntar seções, nunca com mais texto. (77, 79)
- **Fim de página:** cadastro de e-mail como última seção quando o objetivo do site não é assinar nada. A página termina na ação que o visitante veio fazer (reservar, comprar, visitar). (85)
- O mesmo dado (preço, data, horário) repetido em 4 ou mais seções; seção terminando com frase que repete o título. (69)
- Número solto como único título do topo, sem dizer o que significa. (46b)

**Imagens**
- Fotos ocupando mais de 1/3 da página abaixo do topo; duas seções seguidas puxadas por foto. (83)
- Ilustração desenhada no código (planta, pessoa, produto, paisagem). Gráfico ou mapa de dados reais é permitido. (80)
- Caixa colorida ou degradê no lugar de uma foto. (81)
- Fileira de 24 ou mais ícones iguais para contar algo. Escrever o número grande. (82)
- Moldura de celular, notebook ou terminal (no máximo uma, com conteúdo real dentro). (47b)
- "Tela do produto" desenhada com caixas, ou fundo de grade/listras sem nada por baixo. Se o produto existe, usar captura real. (47c, 84)

**Texto decorativo**
- Texto girado na vertical, seta "role para baixo", selo "BETA" ou de versão no topo, faixa de clima/cidade, faixa em monoespaçada sob o topo, contagem "01 / 4" em cartões. (66)

**Movimento e interação**
- Transição de `margin` ou `padding`. (10b)
- Mesmo efeito de passar o mouse em todos os cartões; mais de um efeito no mesmo elemento; imagem crescendo ou girando no mouse; efeito em algo que não é clicável. (11)
- Animação com quique ou mola em estado de interface. Usar desaceleração suave. (12)
- Aviso flutuante de "sucesso" quando o resultado já está visível. (16)
- Faltam estados `:active` ou `:disabled`. Todo controle tem 8 estados: normal, mouse, foco, clicado, desativado, carregando, erro e sucesso. (26b)
- Botões fora de 44 a 52 px de altura em site. (39b)
- Duas bibliotecas de ícones na mesma página. (30b)
- Vídeo sem imagem de capa (`poster`). (28b)

---

## 3. Regras de montagem (da parte de construção do original)

- **Topo:** título com até 7 palavras (50 caracteres), frase de apoio com até 12 palavras, 1 ou 2 botões.
- **Página:** de 6 a 9 seções contando topo e rodapé (5 se o pedido for curto); no máximo 450 palavras visíveis.
- **Objetivo do visitante:** antes de montar, dizer o que o visitante veio fazer (comprar, reservar, visitar, assinar...). A ação fica onde sites reais desse ramo a colocam, e a página termina nela.
- **Marca registrada:** escolher uma coisa memorável (a coisa mais forte e real do cliente) e mostrá-la na primeira tela.
- **Consistência:** um estilo de botão principal, uma largura de conteúdo, um espaço entre colunas abaixo do topo, um arredondamento por nível de caixa.
- **Projeto existente:** CSS só recebe acréscimos, nunca apagar regra alheia. Nunca apagar página ou componente sem plano aprovado pelo usuário.

---

## 4. Acabamento (nunca bloqueia; corrigir ou justificar)

Aspas tipográficas (" ") em vez de retas · `…` em vez de `...` · números grandes com `font-variant-numeric: tabular-nums` · nunca dois botões preenchidos lado a lado · ícone dentro de círculo colorido · no máximo um tipo de efeito de rolagem · linha de flex com alturas diferentes sem `align-items: center` · campo de ajuda sem `min-height: 1lh` reservado · `::selection`, `caret-color` e `scrollbar-color` com as cores do site · texto espremido em coluna estreita · no máximo 3 pesos de fonte · nenhum item sozinho na última linha de uma grade · nunca pular nível de título (h2 para h4) · texto justificado só com `hyphens: auto` · toda página com `lang`, `<title>` e meta descrição · borda fina junto com sombra larga e suave na mesma caixa · conteúdo que aparece no computador e some no celular · nenhum parágrafo terminando com uma palavra sozinha, nenhum título terminando em palavra curta solta (conferir em 375 e 1280 px; usar `text-wrap: pretty` no texto).

---

## 5. Revisão final (antes de entregar)

1. Dar nota de 1 a 5 em seis eixos: ideia, hierarquia, execução, especificidade (só serve para este cliente?), contenção (algo sobrando?) e variedade (diferente dos últimos sites?). Abaixo de 3, corrigir antes.
2. Conferir em 375, 1280 x 800, 1440 x 900 e 1920 x 1080 px.
3. Passar pelo Chão (seção 1): tudo OK.
4. Passar pelos Reflexos (seção 2): corrigido ou quebrado com motivo anotado.
5. Passar pelo Acabamento (seção 4): corrigido ou justificado.
6. Revisão também contra a lista da antislop.
7. Fechar listando cada espaço reservado: tamanho e o que deve entrar ali.

Nunca dizer que passou sem ter conferido.

---

## Comando: hallmark audit
Quando o usuário pedir auditoria de um site ou página pronta:
1. Ler o código ou abrir o site. Não alterar nada ainda.
2. Passar pelo Chão, pelos Reflexos e pelo Acabamento, marcando cada item como OK, FALHA ou NÃO SE APLICA, citando o trecho (arquivo e linha, se houver).
3. Entregar relatório curto, para celular, só com as falhas, nesta ordem: Chão, depois Reflexos, depois Acabamento. Cada uma com a correção pronta.
4. Perguntar se pode aplicar as correções. Só alterar depois do sim.

## Como trabalhar
- Responder em português, curto e direto.
- Se for criar um site novo: perguntar antes, trabalhar por partes e acionar antislop no começo (preferências do usuário).
- Revisão final (seção 5) antes de entregar.
