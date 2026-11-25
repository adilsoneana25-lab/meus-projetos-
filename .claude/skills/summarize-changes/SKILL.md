---
name: summarize-changes
description: Gera uma mensagem de commit em português a partir das alterações atuais do git (git diff). Use quando o usuário pedir para resumir as mudanças, sugerir ou escrever uma mensagem de commit, ou digitar /summarize-changes.
---

# Resumir alterações em mensagem de commit

Escreve uma mensagem de commit em português do Brasil que descreve as alterações atuais do repositório.

## Passos

1. Veja o que mudou:
   - `git status --short`
   - `git diff --staged --stat` e `git diff --staged`
   - Se não houver nada no stage, use `git diff --stat` e `git diff`, e avise o usuário que as alterações ainda não foram adicionadas com `git add`.
   - Arquivos novos não rastreados (`??`) não aparecem no diff: leia-os, se forem relevantes.
   - Se não houver nenhuma alteração, diga isso e pare.
2. Entenda o motivo das mudanças, não apenas quais linhas mudaram. Se o motivo não estiver claro, pergunte ao usuário antes de escrever.
3. Escreva a mensagem no formato abaixo.

## Formato

```
<tipo>: <resumo no imperativo, até 72 caracteres, sem ponto final>

<corpo opcional: o que mudou e por quê, linhas de até 72 caracteres>

- <mudança relevante 1>
- <mudança relevante 2>
```

Tipos (Conventional Commits): `feat` (funcionalidade nova), `fix` (correção), `docs` (documentação), `refactor` (reestruturação sem mudar comportamento), `test` (testes), `style` (formatação), `chore` (manutenção, dependências, configuração).

## Regras

- Português do Brasil, verbo no imperativo: "adiciona", "corrige", "remove" (ou "adicionar", "corrigir": escolha um e mantenha).
- O resumo diz o efeito da mudança, não a lista de arquivos.
- Para mudança pequena, só a linha de resumo basta; não invente corpo.
- Se o diff misturar assuntos sem relação, sugira dividir em mais de um commit e proponha uma mensagem para cada parte.
- Não invente mudanças que não estão no diff.
- Não faça o commit: apenas mostre a mensagem num bloco de código, pronta para copiar. Só execute `git commit` se o usuário pedir.
