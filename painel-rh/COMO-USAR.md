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
