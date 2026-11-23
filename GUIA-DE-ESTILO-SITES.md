# Guia de estilo para sites

Este é o padrão que o dono deste repositório gosta de usar em todo site novo. Leia este guia antes de começar e siga-o, a menos que o pedido diga outra coisa.

Exemplo de referência: `sites/despacho/index.html`.

---

## 1. Como trabalhar (o "pedido em 7 partes")

1. **Faça as perguntas antes de começar, todas de uma vez.** Pergunte o objetivo do site, o público, a ação principal (WhatsApp, formulário ou agendamento), se os dados são reais ou de treino, e onde publicar. Depois disso, trabalhe sozinho até entregar.
2. **Defina critérios concretos.** Uma abertura forte, resultados em destaque, serviços explicados em linguagem simples e nada com cara de modelo pronto.
3. **Use as melhores ferramentas disponíveis.**
4. **Você decide o design**, seguindo este guia.
5. **Revise pelo menos 3 vezes antes de entregar.** Em cada revisão, tire capturas em 1280px e 390px, nos modos claro e escuro. Anote o problema encontrado e a correção feita.
6. **Entregue o link** e mostre uma comparação de antes e depois das revisões.
7. **Faça o mais bonito possível.**

**Honestidade:** nunca invente depoimentos, números ou clientes apresentando-os como reais. Em site de treino, coloque uma faixa avisando que é demonstração e marque os números como "Ilustrativo". Telefones e e-mails de exemplo levam o aviso "fictício".

**Pesquisa:** use fontes confiáveis, como documentação oficial, e não respostas genéricas. Se uma fonte não puder ser lida, diga isso ao dono do repositório.

---

## 2. Imagens: evitar o genérico

- **Busque a ação, não o conceito.** "Mãos embalando caixa" funciona melhor que "sucesso no e-commerce". Evite apertos de mão, notebooks em escritório e pessoas sorrindo para a câmera.
- **Monte uma folha de contato** com todas as candidatas lado a lado e escolha comparando.
- **Leia o que está escrito na foto.** Camisetas, placas e rótulos podem contradizer a mensagem: uma camiseta dizia "Sometimes, worse is better" e foi descartada.
- **Descarte marcas reais visíveis.** Uma marca real não pode aparecer como cliente fictício.
- **Confira o foco depois do corte.** Ajuste o `object-position` e troque a foto se a área cortada ficar borrada.
- **Todas as fotos seguem a mesma luz e a mesma paleta.** Tons quentes e naturais, sem misturar estilos.
- **Hospede as imagens junto com o site** (pasta `img/`) e dê crédito aos fotógrafos no rodapé.
- No Unsplash, registre o download pela ferramenta oficial antes de usar a foto.

---

## 3. Layout e animação: estilo Apple

**De onde vem cada regra:** as regras de movimento e hierarquia vêm das Human Interface Guidelines da Apple ([Motion](https://developer.apple.com/design/human-interface-guidelines/motion) e [Layout](https://developer.apple.com/design/human-interface-guidelines/layout)), lidas em 23/11/2026. Os padrões visuais do apple.com vêm de observação conhecida do site, porque a página não pôde ser carregada nesta sessão.

### Layout
- **Uma ideia por tela.** Cada seção tem um título grande e centralizado, uma frase de apoio em cinza e uma imagem ou número protagonista.
- **Muito espaço em branco.** Seções com 88–120px de respiro vertical. Texto até ~1024px de largura e grades até ~1260px.
- **Blocos alternados.** Branco `#FFFFFF`, cinza-claro `#F5F5F7` e preto `#000` para os números de impacto.
- **Grade de "tiles" (bento).** Cartões com cantos de 28px, larguras variadas (4+2 e 2+4 colunas), sem sombra pesada.
- **Navegação fina e translúcida.** Altura de 48px, links de 12px, fundo com desfoque (`backdrop-filter: blur(20px)`) e fixa no topo.
- **Botões em pílula.** Azul `#0071E3`, `border-radius: 980px`. O botão secundário é um link com "›".
- **Hierarquia** (HIG): o mais importante vai no topo; elementos alinhados formam grupos; espaço vazio separa o que não tem relação.
- **Revelação progressiva** (HIG): mostrar menos de cada vez, com galeria horizontal (`scroll-snap`) para etapas e listas.
- **Imagem fixa com texto rolando** (`position: sticky`) para contar uma história em capítulos.

### Tipografia
- Fonte do sistema primeiro: `-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif`. Inter (Google Fonts) é a alternativa fora da Apple.
- Títulos com peso 600–700, entrelinha ~1.05 e espaçamento negativo (−0.03em). Na abertura, 48–96px; nas seções, 40–64px.
- Texto de apoio em 19–28px, cinza `#6E6E73` e peso 500. Corpo do texto em 17px.
- Números grandes com `tabular-nums`.

### Cores
- Claro: fundo `#FFFFFF` e `#F5F5F7`, texto `#1D1D1F`, secundário `#6E6E73`, link `#0066CC`.
- Escuro: fundo `#000` e `#161617`, texto `#F5F5F7`, secundário `#A1A1A6`, link `#2997FF`.
- O azul é o único destaque. A cor da marca entra pequena, ou quando o cliente pedir.
- Sempre funcionar nos dois temas, sem texto claro sobre fundo claro. Teste o modo escuro.

### Animação (regras da HIG)
- **Movimento com propósito.** "Don't add motion for the sake of adding motion" (HIG, Motion). Um efeito marcante por seção, no máximo.
- **Movimento opcional.** Respeitar `prefers-reduced-motion` e nunca usar a animação como única forma de passar uma informação.
- **Breve e preciso.** Nada de animação em interações frequentes, e ninguém espera a animação terminar para agir.
- **Ligada à rolagem**, com CSS `animation-timeline: view()` / `scroll()`:
  - entrada das seções: de opacidade 0.2 e 48px abaixo até a posição normal, entre `entry 5%` e `cover 28%`;
  - imagem da abertura cresce de `scale(.9)` até `1` nos primeiros 70vh de rolagem;
  - números grandes "aparecem" com escala de .86 até 1.
- **Nada some quando a página está parada.** Use `animation-fill-mode: none` nas entradas: fora do intervalo, o elemento fica visível. Navegadores sem suporte mostram a página normal (`@supports`).

---

## 4. Checklist antes de entregar
- [ ] Perguntas feitas antes de começar
- [ ] Fotos curadas: sem texto contraditório, sem marcas reais, com foco no corte
- [ ] 3 revisões com capturas (1280 e 390px, claro e escuro)
- [ ] Sem rolagem lateral no celular; botões sem quebra de linha
- [ ] Números fictícios marcados como "Ilustrativo"
- [ ] `prefers-reduced-motion` respeitado
- [ ] Créditos das fotos no rodapé
- [ ] Link entregue, com comparação de antes e depois
