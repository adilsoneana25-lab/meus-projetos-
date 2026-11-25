# Componentes: os detalhes que fazem a interface parecer certa

Adaptado da filosofia de design engineering de Emil Kowalski (skill `emil-design-eng`).
Para arrastar e deslizar em profundidade, veja também `../../gestures/SKILL.md`.

## Princípios de construção

### Botão responde ao clique
Tudo que é clicável afunda um pouco no `:active` (escala 0,95 a 0,98):

```css
.button { transition: transform 160ms var(--ease-out); }
.button:active { transform: scale(0.97); }
```

### Nada entra de scale(0)
Nada no mundo real some e reaparece do nada. Comece de 0,9 ou mais, junto com opacidade:

```css
.entering { transform: scale(0.95); opacity: 0; }
```

### Popover nasce de quem o abriu
`transform-origin: center` está errado para quase todo popover. Exceção: modal, que não tem
gatilho e fica centralizado.

```css
.popover { transform-origin: var(--transform-origin); }
```

### Tooltip: atraso só no primeiro
O primeiro tooltip espera para não abrir por acidente; com um aberto, os vizinhos abrem na hora:

```css
.tooltip { transition: transform 125ms var(--ease-out), opacity 125ms var(--ease-out); transform-origin: var(--transform-origin); }
.tooltip[data-starting-style], .tooltip[data-ending-style] { opacity: 0; transform: scale(0.97); }
.tooltip[data-instant] { transition-duration: 0ms; }
```

### Transições em vez de keyframes para interface dinâmica
Transições podem ser interrompidas e redirecionadas no meio; keyframes recomeçam do zero.
Para algo disparado várias vezes seguidas (toasts, alternâncias), use transição.

### Desfoque para disfarçar uma troca imperfeita
Se uma troca entre dois estados ainda parece dois objetos sobrepostos, um `filter: blur(2px)`
durante a transição mistura os dois. Mantenha abaixo de 20 px (desfoque pesado é caro, no Safari mais).

```css
.button-content { transition: filter 200ms ease, opacity 200ms ease; }
.button-content.transitioning { filter: blur(2px); opacity: 0.7; }
```

### Entrada com @starting-style
O jeito moderno de animar a entrada sem JavaScript:

```css
.toast {
  opacity: 1; transform: translateY(0);
  transition: opacity 400ms ease, transform 400ms ease;
  @starting-style { opacity: 0; transform: translateY(100%); }
}
```

Sem suporte, use um atributo `data-mounted` definido depois da primeira renderização.

## Transform

- **Porcentagem em translate** é relativa ao próprio elemento: `translateY(100%)` move a altura
  dele, qualquer que seja. Prefira a pixels fixos.
- **scale() escala os filhos** (texto, ícones), o que é desejado no clique de um botão.
- **3D** com `rotateX()`, `rotateY()` e `transform-style: preserve-3d` faz órbitas, moedas
  girando e profundidade só com CSS.
- **transform-origin** define o ponto de apoio; ajuste para onde está o gatilho.

## clip-path para animar

`clip-path: inset(cima direita baixo esquerda)` recorta um retângulo; cada valor "come" um lado.

- **Revelar imagem na rolagem:** de `inset(0 0 100% 0)` para `inset(0 0 0 0)` quando entra na
  tela (IntersectionObserver ou `useInView` com `{ once: true, margin: "-100px" }`).
- **Abas com troca de cor perfeita:** duplique a lista de abas, estilize a cópia como ativa e
  recorte a cópia para mostrar só a aba ativa; anime o recorte.
- **Segurar para apagar:** camada colorida com `inset(0 100% 0 0)`; no `:active` vai para
  `inset(0 0 0 0)` em 2 s linear; ao soltar volta em 200 ms ease-out.
- **Comparador antes/depois:** duas imagens sobrepostas; a de cima recortada com
  `inset(0 50% 0 0)` e o valor da direita segue o arraste.

```css
.overlay { clip-path: inset(0 100% 0 0); transition: clip-path 200ms var(--ease-out); }
.button:active .overlay { clip-path: inset(0 0 0 0); transition: clip-path 2s linear; }
```

Tempo assimétrico: devagar onde a pessoa está decidindo (segurar), rápido onde o sistema responde (soltar).

## Arrastar e deslizar

- **Dispensar por velocidade:** não exija passar de um limite; se `distância / tempo` passar de
  cerca de 0,11, dispense mesmo com pouco arraste.

```js
const velocity = Math.abs(swipeAmount) / (Date.now() - dragStart);
if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) dismiss();
```

- **Amortecer nas bordas:** além do limite, quanto mais arrasta, menos o elemento anda.
- **Capturar o ponteiro** ao começar a arrastar, para continuar mesmo saindo do elemento.
- **Ignorar outros dedos** depois que o arraste começou, para não pular de posição.
- **Atrito em vez de parede:** permita arrastar além com resistência crescente.

## Princípios de componente querido (aprendidos com o Sonner)

1. **Pouca fricção para adotar:** sem configuração complicada; quanto mais fácil, mais usam.
2. **Bons padrões valem mais que opções:** a maioria nunca personaliza.
3. **O nome cria identidade.**
4. **Trate os casos de canto sem aparecer:** pausar timers com a aba escondida, preencher os
   vãos entre itens empilhados para manter o hover, capturar o ponteiro no arraste.
5. **Transições, não keyframes, em interface dinâmica.**
6. **Documentação em que dá para tocar e brincar.**

**Coerência:** curva, duração, visual e nome combinam entre si. Um componente brincalhão pode
quicar mais; um painel profissional deve ser seco e rápido. Ajuste o movimento ao clima.

Quando itens entram e saem de uma lista, a opacidade precisa combinar com a animação de altura;
não há fórmula, ajuste até parecer certo.
