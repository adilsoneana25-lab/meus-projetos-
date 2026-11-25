---
name: direcao-visual-premium
description: Direção visual e acabamento de interface. Transforma uma landing page, site ou componente que funciona mas parece estático, genérico ou "com cara de template" em uma experiência premium de nível Awwwards, sem encher de animações, e revisa o polimento de componentes (hover e clique, popover, tooltip, curvas e durações, clip-path, arrastar). Analisa o código e o visual, entrega diagnóstico e plano e espera aprovação antes de alterar arquivos. Use quando pedirem algo "mais premium", "mais profissional", "nível Awwwards", "menos genérico", "com personalidade", "elevar o design", "polir", "dar acabamento", ou reclamarem que a página está sem graça, parada ou igual às outras. Não use para criar site do zero nem para copiar a animação de um site (use reanimate). Para tarefas só de animação, prefira animate, choreograph, gestures ou review-animations.
---

# Direção visual premium

Junta duas ideias:

- **Direção:** uma página premium não é uma página com mais efeitos. É uma página em que
  cada escolha (tipo, cor, espaço, imagem, movimento, texto) parece decidida por alguém,
  a partir do assunto do negócio.
- **Acabamento** (filosofia de design engineering de Emil Kowalski): num mundo em que todo
  software é "bom o bastante", o gosto é o diferencial. O gosto é treinado, não inato.
  Os detalhes que ninguém nota conscientemente somam: quando algo funciona exatamente como
  a pessoa espera, ela segue sem pensar, e esse é o objetivo. Beleza é alavanca.

O usuário quer ver o raciocínio antes da obra. Por isso existe uma parada:
**nenhum arquivo é alterado antes da aprovação do plano.** Se o usuário disser
explicitamente "pode aplicar direto", pule a parada.

## Escolha o tamanho do trabalho

- **Página ou site inteiro** ("deixa essa landing premium"): siga as etapas 1 a 6.
- **Um componente ou interação** ("revisa esse dropdown", "esse botão parece morto"):
  leia o código, responda com a tabela de revisão (abaixo) e pergunte se pode aplicar.
  Não precisa de conceito nem de sistema visual.

### Formato da revisão

Toda revisão de código de interface usa uma única tabela Markdown, uma linha por problema:

| Antes | Depois | Por quê |
| --- | --- | --- |
| `transition: all 300ms` | `transition: transform 200ms var(--ease-out)` | Diga as propriedades exatas; evite `all` |
| `transform: scale(0)` | `transform: scale(0.95); opacity: 0` | Nada no mundo real surge do nada |
| `ease-in` no dropdown | `ease-out` com curva própria | `ease-in` parece lento; `ease-out` responde na hora |
| Botão sem estado `:active` | `transform: scale(0.97)` no `:active` | Botão precisa parecer que ouviu o clique |
| `transform-origin: center` no popover | `transform-origin: var(--transform-origin)` | Popover nasce de quem o abriu (modal não: modal fica centralizado) |

Não escreva "Antes:" e "Depois:" em linhas separadas; sempre a tabela.

## Etapa 1 · Ler tudo antes de opinar

Problemas de "cara genérica" quase nunca estão num lugar só, então leia a página inteira antes de formar opinião.

- **Código:** todos os arquivos da página (HTML, CSS, JS, componentes, tokens, tema, Tailwind),
  a stack, as bibliotecas de animação instaladas, e os tokens de curva e duração que já existem.
  Melhorias estendem esses tokens; criar um sistema paralelo é defeito.
- **Conteúdo:** o que o negócio vende, para quem, qual a ação principal, os textos e as imagens.
- **Visual:** se der para rodar, capture 1440 px e 390 px de largura, no topo e ao longo da
  rolagem, e olhe as capturas. Se não der, diga isso no diagnóstico.
- **Funcionamento:** anote o que funciona hoje (formulários, links, integrações, SEO,
  acessibilidade) para que nada disso quebre.

## Etapa 2 · Diagnóstico

Explique por que a página parece estática e genérica com exemplos do próprio código ou das
capturas ("o título do topo usa 32 px, o mesmo peso do corpo, então nada puxa o olho").
Dê nota de 0 a 10, com uma frase de motivo, para: tipografia, composição, cor, imagem,
movimento, texto e acabamento (estados de hover, clique e foco, alinhamentos, mobile).
Os problemas de acabamento entram na tabela Antes / Depois / Por quê.

Liste também o que já está bom e deve ficar. Consulte `references/acabamento.md` para os
sinais de "cara de template" e de página decidida.

## Etapa 3 · Direção visual

Proponha uma direção, não uma lista de efeitos:

1. **Conceito em uma frase**, tirado do mundo do negócio (materiais, ofício, lugar, vocabulário).
2. **Sistema visual:** no máximo duas famílias de fonte, paleta de 4 a 6 cores com um acento,
   escala tipográfica, grid, espaçamentos, raio de borda, tratamento das imagens.
3. **Um momento assinatura:** a única cena da página que as pessoas vão lembrar, ligada ao conceito.
4. **Orçamento de movimento:** o que se move, quanto e por quê, decidido com o roteiro de
   `references/movimento.md` (frequência → propósito → curva → duração). O que a pessoa vê
   muitas vezes por dia anima pouco ou nada; ações de teclado não animam.
5. **O que não fazer:** os excessos que essa direção evita.

Com referência ou marca do usuário, parta delas. Sem nenhuma, mostre duas direções curtas para ele escolher.

## Etapa 4 · Plano e parada

Monte o plano em etapas pequenas, em ordem de impacto (muda mais a percepção com menos risco
primeiro). Para cada etapa: o que muda, quais arquivos, o risco para o que já funciona.
Entregue: diagnóstico com notas e tabela → direção visual → plano. Pergunte se pode aplicar
tudo ou só algumas etapas. **Pare aqui e espere.**

## Etapa 5 · Aplicar (depois da aprovação)

- Use a stack e a biblioteca de animação que o projeto já tem; comece pelos tokens
  (cores, fontes, espaços, curvas, durações) e só depois mexa nas seções.
- Regras de movimento e de componente: `references/movimento.md` e `references/componentes.md`.
  O essencial:
  - interações de interface ficam abaixo de 300 ms (modais, gavetas e toasts até 500 ms);
  - só o momento assinatura da página pode ser mais longo, coreografado e sem bloquear a leitura;
  - anime transform e opacity, com curvas próprias (nunca `ease-in` em interface);
  - nada entra de `scale(0)`; todo elemento clicável responde ao clique;
  - hover só em `@media (hover: hover) and (pointer: fine)`;
  - menos movimento ao pedido do sistema significa animações mais suaves, não zero.
- Não troque conteúdo do cliente sem avisar; texto novo é proposta, marcada como tal.
- Preserve tudo da lista de "funciona hoje".

## Etapa 6 · Conferir e entregar

- Capturas antes e depois em 1440 px e 390 px, nos mesmos pontos da rolagem.
- Veja as animações em câmera lenta (duração 2 a 5 vezes maior) ou quadro a quadro:
  cores que se sobrepõem, origem errada, propriedades fora de sincronia.
- Repita as notas de 0 a 10; qualquer eixo abaixo de 7 volta para ajuste.
- Teste com movimento reduzido e confira se nada ficou invisível esperando uma animação.
- Toque e arraste em aparelho real quando houver gestos.
- Resumo final: o que mudou, onde, o que ficou igual de propósito e o que ficou pendente.

---
Parte do conteúdo de acabamento e movimento vem da skill `emil-design-eng`
(emilkowalski/skills), traduzida e adaptada.
