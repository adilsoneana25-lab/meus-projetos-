# Sinais de acabamento premium e de "cara de template"

Use esta lista no diagnóstico (para apontar problemas concretos) e na conferência final.

## O que denuncia uma página genérica

- Título do topo do mesmo tamanho e peso que tudo o resto; nada puxa o olho.
- Tudo centralizado, todas as seções com a mesma altura e o mesmo espaçamento.
- Cards iguais com a mesma sombra e o mesmo raio em todos os blocos.
- Três ícones com três frases em linha ("Rápido, Seguro, Confiável").
- Fotos de banco sem relação entre si (luz, cor e ângulo diferentes).
- Paletas da moda sem motivo: creme com serifada e terracota; fundo quase preto com um
  verde ácido; gradiente roxo para azul; emoji como marcador de seção.
- Animação de "aparecer subindo" igual em todos os elementos, com o mesmo atraso.
- Textos de marketing que serviriam para qualquer empresa ("soluções inovadoras").
- Botões sem estado de hover e foco; links sem diferença visual de texto.
- Rodapé esquecido, mobile tratado como versão encolhida do desktop.

## O que faz parecer decidido

- **Tipo como imagem:** um título grande com contraste forte de escala (10× o corpo ou mais),
  tracking negativo em tamanhos grandes, quebras de linha escolhidas.
- **Ritmo:** seções imersivas (imagem grande, pouco texto) alternadas com seções de leitura.
- **Grid forte por baixo**, quebrado de propósito em um ou dois lugares (imagem que sangra
  para fora, elemento que se sobrepõe).
- **Neutros com tom** (um cinza puxado para a cor de acento) e um acento usado poucas vezes.
- **Detalhe do assunto como conteúdo:** algo que só esse negócio teria (a tábua de marés de
  um hotel de praia, o tempo de fermentação de uma padaria, a ficha técnica de um vinho).
- **Imagens tratadas como série:** mesmo recorte, mesma temperatura, mesma proporção.
- **Movimento com hierarquia:** um momento assinatura; o resto discreto e com curvas próprias
  (por exemplo `cubic-bezier(.16,.84,.24,1)` para saídas e `cubic-bezier(.65,0,.35,1)` para trocas).
- **Microinterações cuidadas:** hover que responde, foco visível, seleção de texto na cor da
  marca, estados de erro e de sucesso úteis no formulário.
- **Texto específico:** frases curtas, verbos claros, números reais do negócio.

## Orçamento de movimento (guia)

| Tipo | Quantos | Duração típica |
|---|---|---|
| Momento assinatura | 1 | até 2,5 s no total, coreografado |
| Revelação de seção | o necessário para guiar a leitura | 0,6 a 0,9 s |
| Resposta ao toque/hover | todos os elementos clicáveis | 0,2 a 0,4 s |
| Movimento contínuo (faixa, loop) | no máximo 1 | lento, sem distrair da leitura |

Se a página ficar pior com o movimento desligado, o problema é de composição, não de animação.
