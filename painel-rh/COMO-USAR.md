# Painel de RH: como usar

Este painel é **um arquivo só**: `Painel-RH.html`. Ele roda no navegador do seu computador
e **não precisa de internet** nem de instalar nada.

## Passo a passo

1. Baixe o arquivo `Painel-RH.html` e salve numa pasta do seu computador (por exemplo, junto com a planilha).
2. Dê **dois cliques** no arquivo. Ele abre no seu navegador (Chrome, Edge ou Firefox).
3. Clique em **Escolher planilha** e selecione a planilha de RH (`.xlsx`), ou arraste a planilha para a tela.
4. Pronto. A planilha é lida no próprio computador e nada é enviado para a internet.

Quando a planilha for atualizada, abra o painel de novo e escolha a planilha outra vez.

## No celular (Android)

1. Abra o link privado do painel no Chrome do celular: https://claude.ai/artifact/75iWRvC38GsAqnzk6mBPd5
   (entre com a mesma conta do Claude; só você abre o link, a não ser que compartilhe pelo menu "Compartilhar").
2. Toque em **Escolher planilha** e escolha o `.xlsx` (dos Downloads, do Google Drive ou de onde estiver salvo).
3. A planilha é lida só no celular e não é enviada para lugar nenhum.

O celular precisa de internet só para abrir a página.

## O que aparece

- **Pessoas ativas:** quantas pessoas estão com status "Ativo".
- **Custo de férias vencidas:** quanto a empresa deve pagar em dobro pelas férias que passaram do prazo (CLT, art. 137).
  É uma estimativa: saldo de dias ÷ 30 × salário base × 4/3, sem encargos.
- **Férias que vencem em 60 dias:** quantas pessoas têm férias com prazo final nos próximos 60 dias e quanto custariam se dobrassem.
- **A empresa por área:** cada área (setor) com o número de pessoas. Clique na área para ver a lista e
  clique numa pessoa para abrir a ficha (dados, férias em aberto e últimos pedidos de férias).
  Use a caixa de busca para achar alguém pelo nome, cargo ou gestor.

- **Precisa de você:** lista quem tem férias vencidas ou com prazo final nos próximos 60 dias, da mais urgente
  para a menos urgente, com o custo, a situação do pedido e o gestor. Toque numa pessoa para abrir a ficha.
- **Ficha da pessoa:** cargo, salário, tempo de casa e uma **linha do tempo** com admissão, promoções e reajustes,
  férias ganhas e tiradas, pedidos negados ou parados, prazos que vêm por aí e desligamento.

### Aba "Análises"

No topo do painel há duas abas: **Visão geral** e **Análises**. A aba Análises mostra por que as pessoas saem:

- **Filtro por área:** toque numa área para ver só ela, ou em "Toda a empresa".
- **Números da área:** saídas nos últimos 12 meses e rotatividade, quantos pediram para sair,
  tempo de casa de quem saiu e quantos ativos têm risco de sair.
- **Gráfico "Cada pessoa é um ponto":** tempo de casa (horizontal) × horas extras por mês (vertical, média dos
  últimos 3 meses; para quem saiu, os 3 meses antes da saída). A forma e a cor dizem quem é:
  - círculo laranja: ativo com risco de sair;
  - círculo vazado: ativo sem risco;
  - quadrado azul: saiu por liderança;
  - triângulo verde: saiu por hora extra, turno ou férias;
  - losango escuro: saiu por carreira ou salário;
  - quadrado vazado: saída por decisão da empresa ou motivo não apurado.

  Passe o mouse para ver os detalhes; clique (ou toque) para abrir a ficha.
  Quando existir a aba `Historico_Cargos`, aparece um botão para trocar o eixo vertical por **tempo sem promoção**.
- **Rescisão × entrevista:** o motivo escrito na rescisão ao lado do motivo apurado, nos pedidos de demissão.
- **Ativos com risco de sair:** um ponto por sinal. Os sinais são:
  - menos de 1 ano de casa;
  - 2º ou 3º turno de Estamparia, Montagem ou Logística;
  - hora extra acima de 20 h/mês;
  - férias vencidas, ou último pedido de férias negado ou sem resposta;
  - mais de 2 anos sem promoção (só para quem tem registro no histórico).

  Com 2 ou mais pontos, a pessoa entra na lista. Os sinais aparecem também na ficha da pessoa.
  A regra foi montada a partir dos padrões das saídas da planilha. É um alerta para conversar com a pessoa,
  não uma previsão.
- **Quem saiu:** a lista completa por trás do gráfico.

### Aba "E se..." (simulação de promoções)

Escolha quanto a empresa pode investir por mês em promoções, pela barra ou digitando o valor.
A tela se atualiza na hora e mostra:

- **Números:**
  - quantas pessoas são promovidas;
  - quantas pessoas em risco ficam na empresa (retidas);
  - o custo das promoções em 12 meses;
  - a reposição evitada, isto é, quanto custaria repor quem ficou.
- **Resumo em uma frase:** se as promoções saem mais baratas ou mais caras do que repor essas pessoas.
- **Gráfico:** custo das promoções × reposição evitada conforme o valor sobe. Ele mostra até onde investir
  compensa. Depois que todas as pessoas em risco são promovidas, a reposição evitada para de subir.
- **Ordem de prioridade:**
  - Primeiro vem quem está em risco, com mais sinais primeiro. No empate, entra antes a promoção mais barata.
  - Depois vêm os demais ativos.
  - Quem não cabe no valor que sobra é pulado.
  - Ficam fora da fila quem está em contrato de experiência, diretores e gerentes.

**Premissas** (ajustáveis em "Ajustar premissas"):

| Premissa | Padrão | De onde vem |
|---|---|---|
| Aumento por promoção | 15% | Pedido da direção do RH |
| Fator de encargos sobre o aumento | 1,00 (sem encargos) | Informe o fator do seu Departamento Pessoal |
| Promovidos em risco que ficam | 100% | A planilha não tem esse dado; ajuste conforme sua experiência |
| Reposição | rescisão + 21% do salário anual | [Center for American Progress](https://www.americanprogress.org/article/there-are-significant-business-costs-to-replacing-employees/), mediana de 30 estudos para cargos operacionais e técnicos. O [SHRM](https://www.shrm.org/executive-network/insights/myth-replaceability-preparing-loss-key-employees) cita de 50% a 200% para cargos mais altos |
| Rescisão de cada pessoa | salário × 1,81 | Mediana dos pedidos de demissão da própria planilha |

Promoções de quem não está em risco entram no custo, mas não contam como reposição evitada.

### Aba "Visão do gestor"

1. Escolha o gestor na lista. O número entre parênteses é o tamanho da equipe direta. O painel lembra a última escolha.
2. A tela mostra o resumo da equipe:
   - férias vencidas e vencendo;
   - pedidos de férias pendentes;
   - pessoas que pedem atenção à permanência;
   - hora extra média;
   - saídas da equipe no último ano.
3. Logo abaixo vem o **mapa de situação** de cada pessoa, da mais urgente para a mais tranquila, com o que fazer.
4. **Salvar relatório em PDF** gera um relatório limpo para enviar ao gestor. Ele pode ser impresso depois.
   - O relatório **não traz salários nem valores em reais**.
   - Desmarque "Incluir atenção à permanência" para tirar do PDF a coluna de sinais de risco de saída.
   - No link do celular, o claude.ai pede para você confirmar o download.

A situação das férias é recalculada **com a data do dia em que você abre o painel**.

## O que a planilha precisa ter

As abas `Funcionarios` e `Ferias_Periodos`, com os mesmos nomes de coluna da planilha original.
A aba `Ferias_Solicitacoes` é opcional e serve para mostrar os pedidos na ficha da pessoa.
A aba `Desligamentos` é opcional e mostra o tipo e o motivo da saída na linha do tempo.

### Promoções e reajustes (aba `Historico_Cargos`)

A planilha atual não guarda histórico de cargos. Para as promoções aparecerem na linha do tempo,
crie uma aba chamada `Historico_Cargos`, com uma linha para cada mudança:

| Matrícula | Data | Cargo | Salário (R$) | Motivo |
|---|---|---|---|---|
| 1049 | 27/01/2022 | Auxiliar de Usinagem | 2600 | Admissão |
| 1049 | 01/08/2023 | Operador CNC | 3400 | Promoção |
| 1049 | 01/03/2025 | Operador CNC | 3820 | Reajuste anual |

- A linha com a data da admissão mostra o cargo e o salário de entrada.
- Quando o cargo muda, o painel mostra "de → para" e o aumento em %.
- O Motivo vira o título do evento; sem motivo, o painel escreve "Novo cargo" ou "Reajuste de salário".
- Coluna `Setor` é opcional.

## Para quem for mexer no código

- `fonte/painel.template.html`: o código do painel.
- `fonte/xlsx.mini.min.js`: biblioteca SheetJS 0.18.5 (licença Apache 2.0, em `fonte/LICENSE-sheetjs.txt`) que lê o Excel.
- `fonte/montar.py`: junta os dois num único `Painel-RH.html`. Rode `python3 fonte/montar.py` depois de alterar o código.
