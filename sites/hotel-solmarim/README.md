# Solmarim Hotel & Spa

Site de demonstração de um hotel fictício à beira-mar. O nome, a Enseada de Coruípe, Porto Coral e todos os contatos são inventados.
Layout, cores e animações foram estudados no site do MDS Collective (indicado no Awwwards)
com a skill `reanimate`. Os textos, o nome e as fotos são próprios: nada da marca de referência foi copiado.

## Como abrir

Abra `index.html` no navegador. As bibliotecas (GSAP 3.12.5, ScrollTrigger e Lenis 1.1.13) e as fontes
(Instrument Serif e Inter) vêm de CDN, então é preciso internet.

## O que veio da referência (mesmos valores)

| Elemento | Movimento |
|---|---|
| Tela de carregamento | contador 0 → 100 em 1,6 s (power2.inOut), saída 0,25 s depois |
| Título principal | palavras sobem de 120 % até 0 em 1,3 s (power4.out), intervalo de 0,09 s |
| Foto de abertura | parallax ao rolar: desce 18 % e cresce até 1,08 |
| Blocos de texto | aparecem subindo 14 px em 0,7 s quando entram na tela |
| Fotos | revelação de cima para baixo em 1,4 s, curva cubic-bezier(.77,0,.18,1), e parallax |
| Frase "O que pedimos" | as palavras escurecem uma a uma conforme a rolagem |
| Números | contam de 0 até o valor em 1,6 s |
| Faixa de experiências | duas linhas em sentidos opostos, 60 s e 75 s por volta |
| Cursor | círculo de 260 px que revela um desenho de ondas, segue o mouse com atraso |
| Menu | transparente sobre a foto, fica branco depois da abertura |

Paleta: branco `#fff`, cinza `#f3f3f1`, tinta `#101010`, azul-marinho `#1c486d`, laranja `#e6872d`.

## O que foi acrescentado (movimento ousado)

- Saída da tela de carregamento com cortina azul que sobe e se abre sobre a foto.
- Linhas do título deslizam para lados opostos ao rolar.
- Suítes em galeria horizontal presa à tela, com inclinação conforme a velocidade da rolagem.
- Botões magnéticos, fotos que inclinam com o mouse e cursor que vira "Ver" sobre as imagens.
- Palavra "Maré." gigante que cresce ao rolar.
- Com "reduzir movimento" ativado no sistema, todas as animações são desligadas.

## Verificação

A abertura foi gravada quadro a quadro na referência e na cópia, com os mesmos parâmetros
(1440×900, 10 quadros/s, relógio virtual):

- Título: início em 1,933 s contra 1,950 s na referência, mesma curva, diferença média de 0,6 px.
- Troca da tela de carregamento para a foto: mesmos quadros (2,1–2,2 s).
- A referência usa vídeo na abertura; aqui é foto com zoom lento, então os pixels diferem de propósito.

Fotos: Unsplash.
