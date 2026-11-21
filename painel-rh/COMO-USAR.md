# Painel de RH: como usar

Este painel é **um arquivo só**: `Painel-RH.html`. Ele roda no navegador do seu computador
e **não precisa de internet** nem de instalar nada.

## Passo a passo

1. Baixe o arquivo `Painel-RH.html` e salve numa pasta do seu computador (por exemplo, junto com a planilha).
2. Dê **dois cliques** no arquivo. Ele abre no seu navegador (Chrome, Edge ou Firefox).
3. Clique em **Escolher planilha** e selecione a planilha de RH (`.xlsx`), ou arraste a planilha para a tela.
4. Pronto. A planilha é lida no próprio computador e nada é enviado para a internet.

Quando a planilha for atualizada, abra o painel de novo e escolha a planilha outra vez.

## O que aparece

- **Pessoas ativas:** quantas pessoas estão com status "Ativo".
- **Custo de férias vencidas:** quanto a empresa deve pagar em dobro pelas férias que passaram do prazo (CLT, art. 137).
  É uma estimativa: saldo de dias ÷ 30 × salário base × 4/3, sem encargos.
- **Férias que vencem em 60 dias:** quantas pessoas têm férias com prazo final nos próximos 60 dias e quanto custariam se dobrassem.
- **A empresa por área:** cada área (setor) com o número de pessoas. Clique na área para ver a lista e
  clique numa pessoa para abrir a ficha (dados, férias em aberto e últimos pedidos de férias).
  Use a caixa de busca para achar alguém pelo nome, cargo ou gestor.

A situação das férias é recalculada **com a data do dia em que você abre o painel**.

## O que a planilha precisa ter

As abas `Funcionarios` e `Ferias_Periodos`, com os mesmos nomes de coluna da planilha original.
A aba `Ferias_Solicitacoes` é opcional e serve para mostrar os pedidos na ficha da pessoa.

## Para quem for mexer no código

- `fonte/painel.template.html`: o código do painel.
- `fonte/xlsx.mini.min.js`: biblioteca SheetJS 0.18.5 (licença Apache 2.0, em `fonte/LICENSE-sheetjs.txt`) que lê o Excel.
- `fonte/montar.py`: junta os dois num único `Painel-RH.html`. Rode `python3 fonte/montar.py` depois de alterar o código.
