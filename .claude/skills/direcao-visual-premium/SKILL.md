---
name: direcao-visual-premium
description: Transforma uma landing page ou site que já funciona, mas parece estático, genérico ou "com cara de template", em uma experiência premium com direção visual e acabamento de nível Awwwards, sem encher a página de animações. Primeiro analisa todo o código e o visual, entrega um diagnóstico e um plano de direção visual e espera aprovação antes de alterar qualquer arquivo. Use sempre que o usuário pedir para deixar um site "mais premium", "mais profissional", "nível Awwwards", "menos genérico", "com mais personalidade", "elevar o design", "dar um acabamento de agência" ou reclamar que a página está sem graça, parada ou parecida com todas as outras, mesmo que ele não use a palavra "direção visual". Não use para criar um site do zero sem página existente, nem para copiar a animação de um site específico (para isso existe a skill reanimate).
---

# Direção visual premium

Uma página premium não é uma página com mais efeitos. É uma página em que cada escolha
(tipo, cor, espaço, imagem, movimento, texto) parece decidida por alguém, e decidida
a partir do assunto do negócio. O trabalho desta skill é encontrar essa ideia, mostrar
o plano e só depois mexer no código.

O usuário quer ver o raciocínio antes da obra. Por isso o fluxo tem uma parada obrigatória:
**nenhum arquivo é alterado antes da aprovação do plano.** Se o usuário disser
explicitamente "pode aplicar direto", pule a parada.

## Etapa 1 · Ler tudo antes de opinar

Leia a página inteira antes de formar opinião, porque problemas de "cara genérica"
quase nunca estão num lugar só.

- **Código:** todos os arquivos da página (HTML, CSS, JS, componentes, tokens, config de
  tema, Tailwind), a stack, as bibliotecas de animação já instaladas e como as seções são montadas.
- **Conteúdo:** o que o negócio vende, para quem, qual a ação principal (reservar, comprar,
  agendar), os textos reais e as imagens disponíveis.
- **Visual:** se der para rodar a página, tire capturas em 1440 px e 390 px de largura,
  no topo e ao longo da rolagem. Olhe as capturas: o código diz o que existe, a imagem
  diz como parece. Se não der para rodar, diga isso no diagnóstico.
- **Funcionamento:** anote o que funciona hoje (formulários, links, integrações, SEO,
  acessibilidade) para garantir que nada disso quebre depois.

## Etapa 2 · Diagnóstico

Explique por que a página parece estática e genérica, com exemplos concretos do próprio
código ou das capturas ("o título do topo usa 32 px, o mesmo peso do corpo, então nada
puxa o olho"). Avalie de 0 a 10, com uma frase de motivo cada:

| Eixo | O que observar |
|---|---|
| Tipografia | personalidade da fonte de título, contraste de escala entre título e corpo, entrelinha, largura das linhas |
| Composição | grid, assimetria, ritmo entre seções, uso do espaço em branco, hierarquia |
| Cor | paleta própria ou padrão, um acento usado com intenção, neutros com tom |
| Imagem | fotos com ponto de vista ou de banco genérico, recortes, tratamento consistente |
| Movimento | existe, tem propósito, curvas próprias, respeita quem pede menos movimento |
| Texto | fala a língua do cliente ou é clichê de marketing |
| Acabamento | estados de hover e foco, alinhamentos, detalhes de borda, rodapé, mobile |

Liste também o que **já está bom** e deve ser preservado. Elogio específico ajuda o
usuário a confiar no resto do diagnóstico.

Consulte `references/acabamento.md` para os sinais de página premium e os padrões que
denunciam "cara de template".

## Etapa 3 · Direção visual

Proponha uma direção, não uma lista de efeitos:

1. **Conceito em uma frase**, tirado do mundo do negócio (materiais, ofício, lugar,
   vocabulário). Exemplo para uma padaria artesanal: "a página tem o ritmo de uma fornada:
   calma, quente, com um momento de forno abrindo".
2. **Sistema visual:** fonte de título e fonte de texto (no máximo duas famílias), paleta
   de 4 a 6 cores com um acento, escala tipográfica, grid e espaçamentos, raio de borda,
   tratamento das imagens.
3. **Um momento assinatura:** a única cena da página que as pessoas vão lembrar (uma abertura,
   uma transição, uma interação). Uma só, bem feita. Diga por que ela vem do conceito.
4. **Orçamento de movimento:** o que se move, quanto e por quê. Fora o momento assinatura,
   o movimento serve à leitura (revelar seções, dar resposta ao toque), não à decoração.
   Defina duas ou três curvas e durações e use só elas.
5. **O que não fazer:** os excessos que essa direção evita (por exemplo: cursor
   personalizado, rolagem sequestrada, parallax em todo lugar, gradiente roxo).

Se o usuário tiver uma referência ou uma marca, a direção parte dela. Se não tiver,
mostre duas direções curtas para ele escolher, em vez de uma só.

## Etapa 4 · Plano e parada

Monte o plano em etapas pequenas, em ordem de impacto (o que mais muda a percepção com
menos risco primeiro). Para cada etapa: o que muda, quais arquivos, o risco para o que
já funciona.

Entregue nesta ordem: diagnóstico com notas → direção visual → plano. Termine
perguntando se pode aplicar, e se quer tudo ou só algumas etapas. **Pare aqui e espere.**

## Etapa 5 · Aplicar (depois da aprovação)

- Siga a stack existente: use a biblioteca de animação e o sistema de estilos que o projeto
  já tem, em vez de trazer outros.
- Comece pelos tokens (cores, fontes, espaçamentos) e só depois mexa nas seções.
- Anime transform e opacity; respeite `prefers-reduced-motion`; nada de bloquear a leitura
  ou a rolagem; nenhuma animação passando de 1,2 s sem motivo.
- Não troque conteúdo do cliente sem avisar. Texto novo é proposta, marcada como tal.
- Preserve tudo da lista de "funciona hoje" (formulários, links, SEO, acessibilidade).

## Etapa 6 · Conferir e entregar

- Capturas antes e depois em 1440 px e 390 px, nos mesmos pontos da rolagem.
- Repita as notas de 0 a 10. Qualquer eixo abaixo de 7 volta para ajuste antes da entrega.
- Teste com movimento reduzido e confira se nada ficou invisível esperando uma animação.
- Resumo final: o que mudou, onde, o que ficou igual de propósito e o que ficou pendente.
