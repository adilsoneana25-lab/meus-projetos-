# Pacote de design: Seiva, perfumaria natural do Brasil

Nível 1 (uma descida contínua). Conta Magnific no plano gratuito: sem geração de vídeo, então o topo é montado com 4 imagens da mesma descida que se fundem com a rolagem. O código do vídeo (Blob, lerp, seeks controlados) fica pronto e é ativado se existir `assets/hero-scrub.mp4`.

## 1. Premissa da marca

Seiva é o que corre por dentro da mata. A Seiva faz perfumes à mão, cada um nascido de um ingrediente nativo (breu branco, priprioca, cumaru), em lotes pequenos. O site inteiro ensina e vende uma ideia: o cheiro da floresta brasileira, guardado num frasco, e a prova disso antes da compra, no kit de amostras.

## 2. Paleta (direção; valores finais ajustados pelas imagens aprovadas)

```css
:root{
  --canvas:#EEF1EA;        /* névoa clara, puxada para o verde */
  --panel:#F7F8F3;         /* cartões */
  --mata:#1F3328;          /* verde-mata profundo: faixas escuras e títulos */
  --accent:#C2452D;        /* urucum: só o botão principal e o foco */
  --accent-hover:#A93821;
  --accent-muted:#C9954B;  /* âmbar de resina: linha da seiva, brilhos, partículas */
  --text-secondary:#4A5A4F;
  --text-primary:#18241C;
}
```

Desvio dito em voz alta: a referência do Pinterest usa creme + serifa + terracota, que a skill evita como padrão de IA. Mantemos o espírito (botânico, editorial, ingredientes em destaque) com cores tiradas da mata.

## 3. Trio de fontes

- Títulos: Young Serif 400 (serifada botânica com personalidade, acentos completos)
- Texto: Figtree 400 e 600
- Etiquetas: DM Mono 400

## 4. Mapa das faixas do topo (400vh)

| Faixa | Faixa de rolagem (ponto de partida) | O que a imagem mostra | Texto (final) | Entrada |
|---|---|---|---|---|
| 1 | 0,00 a 0,24 | copa da mata vista de cima, névoa da manhã | Etiqueta: "Seiva · perfumaria natural do Brasil". Título: "Todo perfume começa no alto da mata." | desfoque para nitidez (a névoa se abrindo) |
| 2 | 0,28 a 0,50 | dentro da névoa, folhas com orvalho | "Onde a névoa encontra a folha, nasce o cheiro." | queda suave das palavras (o orvalho caindo) |
| 3 | 0,54 a 0,74 | sub-bosque, tronco com resina, samambaias | "Breu, priprioca, cumaru. Colhidos por quem conhece a floresta." | palavras se juntando como sementes (scatter) |
| 4 (pouso) | 0,80 a 1,00 | frasco âmbar sobre o musgo, luz baixa | Título: "A mata inteira cabe num frasco." Subtítulo: "Perfumes feitos à mão com ingredientes nativos. Prove antes de escolher." Botão: "Pedir kit de amostras" | palavras subindo, depois subtítulo, depois botão |

Texto à esquerda, ação no centro-direita.

## 5. Topo fixo (celular e movimento reduzido)

Imagem do frasco no musgo com:
- Título: "A mata inteira cabe num frasco."
- Subtítulo: "Perfumes feitos à mão com breu branco, priprioca e cumaru. Prove os três antes de escolher."
- Botão: "Pedir kit de amostras"

## 6. Seções abaixo do topo

1. **As fragrâncias** (três cartões, imagem para cada)
   - Etiqueta: "Três perfumes, três ingredientes"
   - Título: "Cada frasco nasce de uma planta da mata."
   - **Breu**: "Resinoso e fresco." Notas: breu branco, limão-cravo, cedro. Extrato 25%. Fica na pele de 8 a 10 horas. 50 ml, R$ 289,00.
   - **Priprioca**: "Terroso e quente." Notas: raiz de priprioca, vetiver, pimenta-rosa. Extrato 25%. De 8 a 10 horas. 50 ml, R$ 289,00.
   - **Cumaru**: "Doce e amadeirado." Notas: cumaru, baunilha do cerrado, sândalo. Extrato 28%. De 10 a 12 horas. 50 ml, R$ 309,00.
2. **Da mata ao frasco** (três passos com ícones desenhados, linha do tempo horizontal)
   - Título: "Devagar, do jeito que a floresta faz."
   - Colher: "Breu, raízes e sementes vêm de comunidades extrativistas do Pará, pagas de forma justa."
   - Repousar: "Cada mistura descansa 30 dias antes de ir para o frasco. É isso que segura o cheiro na pele."
   - Envasar: "Tudo à mão, em lotes de 200 frascos, com número e data no rótulo."
3. **Momento interativo: "Segure para sentir o tempo passar"** (o perfume evoluindo na pele)
   - Título: "Quanto tempo dura? Segure e veja."
   - Instrução: "Segure o botão e veja o perfume mudar na pele, hora a hora."
   - Mostrador: "0 h na pele" até "10 h na pele" (5 segundos segurando)
   - Botão: "Segure para sentir"
   - Saída: "Na hora: limão-cravo e breu, frescos." / "Depois de 2 horas: a priprioca aparece, terrosa." / "Depois de 8 horas: cedro e cumaru, colados na pele."
   - Movimento reduzido: as três etapas já aparecem completas.
4. **O kit de amostras** (imagem grande + texto, layout dividido)
   - Título: "Prove os três antes de escolher."
   - Texto: "Três frascos de 2 ml, um de cada perfume. Use por uma semana, no seu calor, na sua pele. Se gostar, o valor do kit vira desconto no frasco."
   - Preço: "Kit com 3 amostras: R$ 39,00"
   - Botão: "Pedir kit de amostras"
5. **Depoimentos** (citações soltas, sem cartões)
   - "Coloquei o Breu de manhã e no fim do dia ainda sentia no pulso." Camila, Belém
   - "Comprei o kit com medo de errar. Acabei levando o Cumaru e dando o Priprioca de presente." Rafael, Curitiba
   - "Tenho pele sensível e testei com calma. Gostei de saber cada ingrediente do rótulo." Juliana, Recife
6. **Perguntas frequentes**
   - "Quanto tempo o perfume fica na pele?": "De 8 a 12 horas, dependendo do perfume e da sua pele. Pele hidratada segura mais. Por isso o kit: você testa no seu dia a dia antes de comprar."
   - "Tenho alergia. Posso usar?": "Todos os ingredientes estão no rótulo e no site. Teste uma gota no pulso e espere 24 horas. Se tiver histórico de dermatite, fale antes com seu dermatologista."
   - "Como sei que é original?": "Cada frasco tem lote numerado, data de envase e nota fiscal. A gente só vende pelo nosso canal."
   - "E se eu não gostar de nenhum dos três?": "Você gastou R$ 39,00 e descobriu isso sem comprar um frasco inteiro. É para isso que o kit existe."
   - "Entregam no Brasil todo?": "Sim. O kit vai por carta registrada, e o frasco por transportadora."
7. **Chamada final**
   - Título: "Comece pelo cheiro."
   - Texto: "Peça o kit, teste em casa, escolha com calma."
   - Botão: "Pedir kit de amostras pelo WhatsApp"
   - Mensagem pré-escrita: "Olá! Quero o kit de amostras da Seiva."
8. **Rodapé**: "Seiva · perfumaria natural do Brasil". "Marca fictícia criada para demonstração. Imagens geradas por inteligência artificial."

Navegação: Fragrâncias · Como fazemos · Kit de amostras · Dúvidas · botão "Pedir kit".

## 7. Camada vetorial

- **Elemento assinatura: a linha da seiva.** Uma linha âmbar fina desce pela página inteira e se desenha conforme a rolagem, ramificando como uma nervura em cada seção.
- Ícones desenhados à mão para os três passos (gota de resina, gota repousando, frasco).
- Partículas de pólen e névoa em nível sussurro no fundo fixo.
- Fundo fixo: névoa verde que deriva devagar (ciclo de 80 s) com textura de grão.
- Movimento reduzido: linhas já desenhadas, partículas paradas.

## 8. Lista de engenharia

Blob fetch (se houver vídeo), lerp normalizado por dt, seeks controlados, escrita no DOM só quando muda, faixas com ritmo e teste de rolagem, sistema de legibilidade em quatro camadas, os cinco portões do topo fixo com listeners de mudança, página completa sem vídeo, e o piso de qualidade do scrub-pipeline. Neste teste, o motor do topo cruza as 4 imagens pelo progresso da rolagem.

## 9. Portão do texto

Todo texto acima vai para o site palavra por palavra. A página precisa passar na varredura da Fase 9: zero travessão, zero palavra de chavão e a varredura de vícios de IA antes de alguém ver. Recursos de marca escritos aqui de propósito ficam.

## 10. Idioma

Todo texto está em português do Brasil, pronto. Linha mais longa do topo checada para 375px de largura. Fontes com acentos completos (ç, ã, õ, é, ê). Os prompts de geração ficam em inglês.
