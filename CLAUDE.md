# Painel de RH Ferraz: premissas do projeto

Este arquivo guarda as regras combinadas para o sistema. Leia-o antes de qualquer mudança e mantenha-o atualizado quando uma regra mudar.

## Como falar com a usuária

- Ela assumiu o RH há pouco tempo e **não programa**. Responda em **português do Brasil**, em linguagem simples, sem jargão técnico.
- **Faça perguntas esclarecedoras antes de construir** quando houver uma decisão que é dela: uma premissa de negócio, um dado que a planilha não tem, quem vai ver a tela.
- **Nunca invente número ou fonte.** Use as **fontes confiáveis** citadas aqui. Quando a planilha não tiver o dado, diga isso e transforme o número em uma premissa ajustável na tela, à vista.
- Quando ela pedir só uma explicação ("não altere nada", "só converse comigo"), não crie nem altere arquivos.
- Ao terminar, diga o que foi feito, como foi testado e o que ficou de fora.

## O que é o sistema

Um painel de RH da **Ferraz Usinagem e Estamparia**, de Sorocaba (SP). Ele lê a planilha de RH (`.xlsx`) **no próprio aparelho**: nada é enviado para servidor nenhum. Há duas entregas, geradas do mesmo código:

| Entrega | Para quê | Onde |
|---|---|---|
| `painel-rh/Painel-RH.html` | Computador, **sem internet**: um arquivo único com as bibliotecas embutidas | Dois cliques e escolher a planilha |
| `painel-rh/web/painel-rh.html` | Celular (Android), pelo link privado do claude.ai | https://claude.ai/artifact/75iWRvC38GsAqnzk6mBPd5 |

### Telas (abas)

1. **Visão geral:**
   - números principais (pessoas ativas, custo de férias vencidas, férias que vencem em 60 dias);
   - bloco **"Precisa de você"**, com férias vencidas ou vencendo, da mais urgente para a menos urgente;
   - **a empresa por área**, com a lista de pessoas e a busca.
2. **Análises:**
   - por que as pessoas saem, com filtro por área;
   - gráfico de dispersão "Cada pessoa é um ponto": tempo de casa × horas extras, ou × tempo sem promoção quando houver histórico;
   - rescisão × entrevista;
   - ativos com risco de sair;
   - lista de quem saiu.
3. **E se...:** simulação de investimento mensal em promoções, com a fila de prioridade, as pessoas em risco retidas e o custo das promoções × a reposição evitada em 12 meses.
4. **Visão do gestor:**
   - a escolha do gestor mostra só a equipe direta dele;
   - um mapa de situação por pessoa: férias, último pedido, hora extra, permanência e o que fazer;
   - um botão que gera um **relatório em PDF** para enviar ao gestor.
5. **Ficha da pessoa** (abre ao clicar em qualquer pessoa): cargo, salário, tempo de casa, sinais de risco e a **linha do tempo** (admissão, promoções, férias ganhas e tiradas, pedidos, prazos e desligamento).

### Para quem

- **Telas:** uso do **RH** (a usuária). Mostram nomes, salários e o motivo real das saídas.
- **Relatório PDF do gestor:** vai para o líder da área. **Não leva salário nem valores em reais**, e a parte de "atenção à permanência" pode ser desligada por uma caixa de marcar.
- **Link do celular:** privado, abre só na conta da usuária, a não ser que ela compartilhe.

## De onde vêm os dados

A planilha `ferraz_rh_base_treino.xlsx` está no Drive, na pasta "Ferraz RH treinamento". O Leia-me da planilha diz que é uma **base de treino com dados fictícios** e data de referência 21/11/2026. A aba **Gabarito** traz respostas prontas: use-a só para conferir, nunca como fonte da tela.

| Aba | Uso no painel | Obrigatória? |
|---|---|---|
| `Funcionarios` | Pessoas, setor, cargo, turno, gestor, admissão, contrato, salário base, status e desligamento | Sim |
| `Ferias_Periodos` | Períodos aquisitivos, prazo para conceder, saldo e programação (só ativos) | Sim |
| `Ferias_Solicitacoes` | Pedidos de férias, status, motivo da negativa e quem decidiu | Não |
| `Desligamentos` | Tipo, motivo declarado × motivo real, tempo de casa e custo da rescisão | Não |
| `Ponto_Mensal` | Horas extras, faltas e atestados por mês (nov/2025 a out/2026) | Não |
| `Pesquisa_Clima` | Respostas anônimas (o painel ainda não usa) | Não |
| `Historico_Cargos` | **Não existe hoje.** Se a usuária criar, entra na linha do tempo e no eixo "tempo sem promoção" | Não |

- A coluna **Matrícula** liga as abas.
- Os nomes de colunas são os da planilha original. `Historico_Cargos` aceita nomes aproximados: Matrícula, Data, Cargo, Salário, Motivo e Setor (opcional).
- Quem não tem registro em `Historico_Cargos` fica **sem dado** de promoção. Nunca suponha "nunca promovido".

## Regras de negócio

### Férias (CLT)

- **Período aquisitivo:** 12 meses de trabalho dão direito a 30 dias.
- **Período concessivo:** os 12 meses seguintes. Passou do prazo, a remuneração é paga **em dobro** (art. 137). O aviso deve vir com **30 dias** de antecedência (art. 135).
- **Situação recalculada com a data de hoje** (não com a data da planilha):
  - **Vencida:** prazo já passou e ainda há saldo.
  - **Vence em breve:** prazo nos próximos **60 dias** (`DIAS_ALERTA`). A planilha usa 90, mas o painel usa 60, como a usuária escolheu.
  - **No prazo:** prazo mais distante.
  - **Em aquisição:** o período ainda não terminou.
  - **Gozada:** saldo zero.
- **Custo da dobra (estimativa):** saldo de dias ÷ 30 × salário base × 4/3, sem encargos. É a fórmula do Leia-me.
- **Semáforo** (verde / amarelo / vermelho): reservado para férias.

### Hora extra

- Média dos **últimos 3 meses** do `Ponto_Mensal`. Para quem saiu, os 3 meses antes do mês da saída.
- **Limite legal:** 2 h por dia útil, cerca de **44 h/mês** (CLT, art. 59).
- **Sinal de risco:** acima de **20 h/mês**.

### Risco de saída (regra visível, não é previsão)

Cada sinal vale 1 ponto. **Com 2 ou mais pontos, a pessoa está "em risco".** Só vale para ativos. Os sinais são:

1. menos de 1 ano de casa;
2. 2º ou 3º turno de Estamparia, Montagem e Embalagem ou Logística e Expedição;
3. hora extra acima de 20 h/mês;
4. férias vencidas, ou último pedido de férias negado, remarcado sem data ou sem resposta;
5. mais de 2 anos de casa e mais de 2 anos sem promoção. Este sinal só conta para quem tem registro em `Historico_Cargos`.

A regra saiu dos padrões das 32 saídas da planilha:

- 53% das saídas foram da equipe de um mesmo supervisor (2º e 3º turnos de Estamparia e Montagem);
- 18 de 32 saíram antes de 1 ano;
- o motivo real era liderança ou hora extra, enquanto a rescisão dizia "proposta de outra empresa".

Com a planilha atual, a regra marca **21 de 80** ativos.

### Motivos de saída no gráfico (grupos)

Só pedidos de demissão entram nos grupos por motivo; o resto vai para "Decisão da empresa ou não apurado".

| Grupo | Motivos reais incluídos | Cor e forma |
|---|---|---|
| Liderança | Relação com a liderança | azul, quadrado |
| Hora extra, turno ou férias | Excesso de hora extra, turno noturno, impossibilidade de tirar férias | verde-água, triângulo |
| Carreira ou salário | Falta de plano de carreira e treinamento, salário abaixo do mercado | escuro, losango |
| Decisão da empresa ou não apurado | Todo o resto | vazado |

### Rotatividade (turnover)

Saídas dos últimos 12 meses ÷ média do quadro (início + fim) ÷ 2. Fonte da fórmula: Gupy, citada no Leia-me.

### Simulação "E se..." (premissas ajustáveis na tela)

| Premissa | Padrão | Origem |
|---|---|---|
| Aumento por promoção | **15%** | Pedido da usuária |
| Fator de encargos sobre o aumento | **1,00** (sem encargos) | A usuária deve informar o fator do Departamento Pessoal. Não invente |
| Promovidos em risco que ficam | **100%** | A planilha não tem esse dado |
| Reposição | rescisão + **21% do salário anual** (salário × 12) | [Center for American Progress](https://www.americanprogress.org/article/there-are-significant-business-costs-to-replacing-employees/), mediana de 30 estudos. O [SHRM](https://www.shrm.org/executive-network/insights/myth-replaceability-preparing-loss-key-employees) cita de 50% a 200% para cargos mais altos |
| Rescisão de quem pede demissão | salário × **mediana de (rescisão ÷ salário)** dos pedidos de demissão da planilha (hoje, 1,81) | Calculada da própria planilha |

- **Horizonte:** 12 meses. Custo = custo mensal × 12.
- **Fila de promoção:**
  - Primeiro quem está em risco, com mais sinais primeiro. No empate, entra antes o menor custo.
  - Depois os demais ativos.
  - Quem não cabe no valor que sobra é pulado.
  - Ficam **fora** da fila: contrato de experiência, diretores e gerentes.
- **Reposição evitada:** só conta para quem está em risco, multiplicada pela retenção.
- Com a planilha atual, cobrir as 18 pessoas em risco elegíveis custa cerca de **R$ 9.800/mês** (R$ 117,6 mil em 12 meses) e evita cerca de R$ 282,5 mil em reposição (com 100% de retenção).

### Visão do gestor

- **Equipe:** pessoas **ativas** cuja coluna "Gestor imediato" é o gestor escolhido (só a equipe direta).
- **Ordem:** das mais urgentes para as mais tranquilas. Pesos: férias vencida (100), risco (40), vence em 60 dias (30), pedido sem resposta (20), hora extra acima de 44 h (15).
- **"O que fazer":** sugestões fixas a partir da situação. Exemplos: "Marcar as férias vencidas o quanto antes", "Responder o pedido de férias", "Reduzir as horas extras", "Conversa individual sobre permanência".
- **PDF:**
  - A4 deitado, gerado com jsPDF no navegador;
  - sem salário nem valores em reais;
  - rodapé "Uso interno";
  - nome do arquivo: `relatorio-equipe-<gestor>-<aaaa-mm-dd>.pdf`.
  - No link do claude.ai, o download passa pela confirmação do próprio site (capacidade `downloads`). No arquivo do computador, baixa direto.
  - O `window.print()` **não funciona** dentro do claude.ai. Não ofereça botão de imprimir; o PDF pode ser impresso depois.

## Formatos

- **Dinheiro:** `R$ 1.234` nos cartões e listas, sem centavos (`Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"})`). Na ficha e nos detalhes da dobra, com centavos: `R$ 1.234,56`.
- **Datas:** `dd/mm/aaaa`. As datas do Excel chegam como número serial: converta em **UTC** para não "pular" um dia (veja `dataExcel()`).
- **Tempo de casa:** "6 meses", "1 ano", "4 anos". Nas análises usa uma casa decimal ("7,8 anos").
- **Percentuais:** vírgula decimal ("12,4%").
- **Números alinhados:** fonte mono com `font-variant-numeric: tabular-nums`.
- **Texto da tela:** português simples, frases curtas, sem jargão.

## Identidade visual (do Leia-me da planilha)

- **Cores:**
  - Grafite Ferraz `#22262B` (cabeçalho);
  - Areia de Fundição `#F1ECE3` (fundo);
  - **Laranja Forno `#E4570F`**, para um único destaque por tela;
  - Aço Escovado `#8A949E` (apoio);
  - Verde Calibrado `#2E7D5B`, Amarelo Cavaco `#E8B931` e Vermelho Rebarba `#B42318` (semáforo de férias).
- **Fontes:** Barlow Condensed (títulos, caixa-alta), IBM Plex Sans (texto) e IBM Plex Mono (números). Sem internet, valem as fontes de reserva.
- **Estilo:** cartões brancos com borda de 1 px, sem sombra e sem 3D, e no máximo 5 números grandes no topo.
- **Gráficos:** as cores de série foram validadas para daltonismo, em todos os pares, nos dois modos:
  - claro: azul `#2a78d6`, verde-água `#1baf7a`, laranja `#eb6834`;
  - escuro: `#3987e5`, `#199e70`, `#d95926`.
  - Use no máximo **3 cores** num gráfico de dispersão, sempre com forma diferente para cada grupo.
- **Tema:** claro e escuro. Todas as cores são variáveis em `:root`, redefinidas no modo escuro.

## Como trabalhar no código

### Arquivos

```
painel-rh/
  Painel-RH.html            ← GERADO (não edite à mão)
  web/painel-rh.html        ← GERADO (não edite à mão)
  COMO-USAR.md              ← guia para a usuária
  fonte/
    painel.template.html    ← o código de verdade: CSS + HTML + JS num arquivo só
    montar.py               ← gera as duas versões
    xlsx.mini.min.js        ← SheetJS 0.18.5 (lê o Excel; Apache 2.0)
    jspdf.umd.min.js        ← jsPDF 3.0.4 (gera o PDF; MIT)
```

### Fluxo de uma mudança

1. Edite **só** `painel-rh/fonte/painel.template.html`.
2. Rode `python3 painel-rh/fonte/montar.py`. Ele troca os marcadores `<!--BIBLIOTECA_XLSX-->` e `<!--BIBLIOTECA_PDF-->`:
   - no arquivo do computador, pelas bibliotecas embutidas;
   - na versão web, por `<script src="https://cdn.jsdelivr.net/npm/...">` com versão fixa.
3. **Teste** com Playwright (o Chromium já está instalado):
   - abra `Painel-RH.html` com `offline: true` e carregue a planilha por `setInputFiles('#arquivo', ...)`;
   - teste no computador (1280 px), no celular (`devices['Pixel 7']`) e no modo escuro;
   - confira: nenhum erro no console e `scrollWidth` igual à largura da tela (sem rolagem lateral);
   - **confira os números por fora**, com Python/pandas lendo a planilha;
   - olhe as capturas de tela antes de entregar.
4. Publique a versão web no mesmo link: Artifact `publish` com `file_path` = `painel-rh/web/painel-rh.html`. O link é sempre o mesmo, e as capacidades atuais são `{downloads: true}`.
5. Atualize `COMO-USAR.md` e este arquivo se alguma regra mudou.
6. Faça o commit no ramo `claude/hr-spreadsheet-analysis-sjs6yw` e o `git push`. O pedido de junção é o **#1**. Nunca faça a junção sem a usuária pedir.
7. Envie o `Painel-RH.html` atualizado para a usuária quando ele mudar.

### Regras de código

- O código fica todo no template (HTML + CSS + JS puro). **Sem frameworks e sem passo de build** além do `montar.py`.
- Tudo é lido no navegador. **Não envie dados da planilha** para nenhum serviço.
- **Bibliotecas:**
  - versões fixas;
  - na versão web, só de CDNs permitidos (jsDelivr, cdnjs, unpkg);
  - no arquivo do computador, embutidas.
- **Constantes de regra** ficam no topo de cada bloco: `DIAS_ALERTA`, `HE_LIMITE_RISCO`, `PONTOS_RISCO`, `HE_LIMITE_LEGAL`, `SETORES_RISCO` e o objeto `SIM`. Mude ali, não espalhado.
- Use `esc()` em todo texto vindo da planilha antes de pôr no HTML.
- **Abas:**
  - o objeto `ABAS` liga cada aba à sua `<section>`;
  - `mostrarAba()` desenha a aba ativa;
  - o endereço usa `#geral`, `#analises`, `#simulacao` e `#gestor`.
- **Celular:** tabelas viram cartões abaixo de 640 px. Botões e campos têm pelo menos 44 px de altura.
- **Gráficos:** feitos à mão em SVG. Valide paletas novas com o validador do skill `dataviz`. Nunca use gráfico com dois eixos verticais.
- **Limitações do claude.ai:**
  - `window.print()`, `alert()` e `confirm()` não funcionam;
  - downloads só pela capacidade `downloads`;
  - o `localStorage` pode falhar, então use sempre `try/catch`.
- **Capturas de tela** para a usuária vão para o Drive, pasta "Ferraz RH treinamento" › "Capturas do painel", com nomes numerados e claros.
