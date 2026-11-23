---
name: objetivo
description: Registra e acompanha os objetivos do usuário no arquivo OBJETIVOS.md na raiz do repositório. Use quando o usuário digitar /objetivo, quiser criar um objetivo novo, atualizar o progresso, concluir ou ver a lista de objetivos.
---

# /objetivo — acompanhar objetivos

Os objetivos ficam em `OBJETIVOS.md`, na raiz do repositório. Esse arquivo é a única fonte da verdade: leia-o sempre antes de responder e nunca invente progresso que não esteja nele ou que o usuário não tenha informado.

## Como agir

1. Leia `OBJETIVOS.md`. Se não existir, crie-o com o modelo abaixo.
2. Veja o que o usuário escreveu depois de `/objetivo`:
   - **Nada** → mostre um resumo: objetivos ativos, % de progresso, prazo e o próximo passo de cada um. Depois pergunte se ele quer criar, atualizar ou concluir algum.
   - **`novo <descrição>`** (ou uma ideia nova) → antes de gravar, faça perguntas curtas para deixar o objetivo claro:
     - Qual é o resultado final esperado (como saber que terminou)?
     - Qual é o prazo?
     - Quais são as etapas ou metas intermediárias?
     - Por que esse objetivo importa?
     Só grave depois das respostas.
   - **`atualizar <objetivo>`** → pergunte o que avançou, marque as etapas concluídas, recalcule o progresso (etapas concluídas ÷ total) e acrescente uma linha no histórico com a data de hoje.
   - **`concluir <objetivo>`** → mova o objetivo para "Concluídos", com a data.
   - **`pausar <objetivo>`** → mova para "Pausados", com o motivo.
3. Mostre o que mudou no arquivo e dê o próximo passo sugerido.
4. Se o repositório for git e o arquivo mudou, pergunte se o usuário quer fazer commit.

## Regras

- Escreva em português, de forma simples e direta.
- Datas no formato AAAA-MM-DD.
- Se um prazo já passou, avise o usuário com gentileza e pergunte se quer ajustar.
- Não apague histórico; só acrescente.
- Se a informação depender de fatos externos (preços, regras, datas oficiais), pesquise em fontes confiáveis e cite a fonte, em vez de supor.

## Modelo do OBJETIVOS.md

```markdown
# Meus objetivos

## Ativos

### <Nome do objetivo>
- **Resultado esperado:** <como saber que terminou>
- **Por quê:** <motivação>
- **Prazo:** AAAA-MM-DD
- **Progresso:** 0% (0 de N etapas)
- **Etapas:**
  - [ ] Etapa 1
  - [ ] Etapa 2
- **Próximo passo:** <ação concreta>
- **Histórico:**
  - AAAA-MM-DD: objetivo criado

## Pausados

## Concluídos
```
