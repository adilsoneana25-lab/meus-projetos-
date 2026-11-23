# Instruções do projeto

O usuário (Adilson) trabalha principalmente pelo celular. Respostas curtas, em português.

## Quando o usuário pedir um site

1. **Briefing primeiro**: antes de criar, pergunte (com AskUserQuestion, no máximo 4 perguntas):
   - Tipo: landing page de negócio ou portfólio/pessoal
   - Estilo: premium-escuro, minimalista-claro ou vibrante
   - Conteúdo: nome, o que faz, serviços/produtos, diferenciais, contatos (WhatsApp, Instagram, endereço), cores/logo
   Pule as perguntas que o usuário já respondeu no pedido.
2. **Delegue** ao subagente `criador-de-sites` (Agent tool, `subagent_type: "criador-de-sites"`),
   passando o briefing completo e a pasta `sites/<nome-do-projeto>/`.
3. **Publique** o `index.html` resultante com a ferramenta Artifact (incluindo as imagens de
   `img/` via `files`), para o usuário abrir o link direto no celular.
4. Faça commit da pasta do site no branch de trabalho e envie (push).
5. Responda com o link, o que foi feito e os marcadores `[...]` que faltam preencher.
