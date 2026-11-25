# Movimento: como decidir, ajustar e conferir

Adaptado da filosofia de design engineering de Emil Kowalski (skill `emil-design-eng`).
Para coreografar vários elementos juntos, veja também `../../choreograph/SKILL.md`.

## Roteiro de decisão (responda nesta ordem)

### 1. Deve animar?

Quantas vezes a pessoa vai ver?

| Frequência | Decisão |
| --- | --- |
| 100+ vezes por dia (atalhos, paleta de comandos) | Nunca anima |
| Dezenas por dia (hover, navegar em lista) | Remover ou reduzir muito |
| Ocasional (modal, gaveta, toast) | Animação padrão |
| Rara ou primeira vez (boas-vindas, formulário de opinião, celebração) | Pode ter encanto |

Ações iniciadas pelo teclado não animam: repetidas o dia todo, ficam lentas e desconectadas.

### 2. Para quê?

Motivos válidos:
- **Consistência espacial:** o toast entra e sai pelo mesmo lado, então arrastar para dispensar faz sentido.
- **Indicar estado:** um botão que se transforma mostra a mudança.
- **Explicar:** uma animação de marketing que mostra como algo funciona.
- **Resposta:** o botão afunda no clique e confirma que foi ouvido.
- **Evitar saltos:** algo que some ou aparece sem transição parece quebrado.

Se o motivo for só "fica bonito" e a pessoa vê isso com frequência, não anime.

### 3. Qual curva?

- Entrando ou saindo → **ease-out** (começa rápido, parece responder).
- Movendo ou se transformando na tela → **ease-in-out**.
- Hover ou troca de cor → **ease**.
- Movimento contínuo (faixa, barra de progresso) → **linear**.
- Na dúvida → ease-out.

Use curvas próprias; as curvas nativas do CSS são fracas:

```css
--ease-out: cubic-bezier(0.23, 1, 0.32, 1);      /* interações */
--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);  /* movimento na tela */
--ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);   /* gaveta estilo iOS */
```

**Nunca `ease-in` em interface.** Começa devagar exatamente no momento em que a pessoa está
olhando; um dropdown com `ease-in` em 300 ms parece mais lento que `ease-out` nos mesmos 300 ms.
Para achar variações, use easing.dev ou easings.co em vez de inventar.

### 4. Quanto tempo?

| Elemento | Duração |
| --- | --- |
| Resposta ao clique em botão | 100–160 ms |
| Tooltip, popover pequeno | 125–200 ms |
| Dropdown, select | 150–250 ms |
| Modal, gaveta | 200–500 ms |
| Marketing, explicação, momento assinatura da página | pode ser mais longo |

Interações de interface ficam abaixo de 300 ms. Saída mais rápida que entrada
(por exemplo, entra em 250 ms, sai em 200 ms).

**Percepção de velocidade:** um spinner que gira mais rápido faz o carregamento parecer menor;
um select de 180 ms parece mais responsivo que um de 400 ms; depois que um tooltip abriu, os
vizinhos abrem na hora, sem atraso nem animação.

## Molas (springs)

Parecem mais naturais porque simulam física e não têm duração fixa. Use em: arrastar com
inércia, elementos que devem parecer "vivos", gestos que podem ser interrompidos e interações
decorativas que seguem o mouse.

```js
// Jeito Apple (mais fácil de pensar)
{ type: "spring", duration: 0.5, bounce: 0.2 }
// Física tradicional (mais controle)
{ type: "spring", mass: 1, stiffness: 100, damping: 10 }
```

Quique sutil (0,1 a 0,3) e só em contextos brincalhões ou de arrastar para dispensar.
Molas mantêm a velocidade quando interrompidas; animações CSS com keyframes recomeçam do zero.

Movimento ligado direto à posição do mouse parece artificial; passe o valor por uma mola:

```jsx
import { useSpring, useTransform } from 'motion/react';
const rotation = useTransform(mouseX, (x) => x * 0.1);            // instantâneo, artificial
const springRotation = useSpring(rotation, { stiffness: 100, damping: 10 }); // com inércia
```

Isso vale porque é decorativo. Num gráfico funcional de um banco, sem animação é melhor.

## Desempenho

- **Anime só transform e opacity.** Elas pulam layout e pintura e rodam na GPU; `padding`,
  `margin`, `height` e `width` refazem tudo.
- **Variáveis CSS são herdadas:** mudar uma variável no pai recalcula todos os filhos. Em
  arrastos com muitos itens, mude o `transform` do elemento direto, não `--variavel` no container.
- **Motion (Framer Motion):** a partir da 14.2, `x`, `y`, `scale` e `rotate` são acelerados.
  Antes disso use `transform: "translateX(...)"`. Animações de layout (`layout`, `layoutId`),
  com `onUpdate`, inércia e valores dirigidos a cada quadro continuam na thread principal.
- **CSS ganha sob carga:** animações CSS de transform e opacity rodam no compositor e continuam
  lisas quando a página está carregando; animações em `requestAnimationFrame` perdem quadros.
  CSS para o que é predefinido; JS para o que é dinâmico e interrompível.
- **Web Animations API** dá controle em JS com desempenho de CSS:

```js
element.animate([{ clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0 0)' }], {
  duration: 1000, fill: 'forwards', easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
});
```

## Acessibilidade

Movimento reduzido significa menos e mais suave, não zero: mantenha opacidade e cor que ajudam
a entender; tire deslocamentos.

```css
@media (prefers-reduced-motion: reduce) {
  .element { animation: fade 0.2s ease; }
}
@keyframes fade { from { opacity: 0; } }
```

Hover em telas de toque dispara no toque. Proteja:

```css
@media (hover: hover) and (pointer: fine) {
  .element:hover { transform: scale(1.05); }
}
```

## Escalonamento (stagger)

Elementos que entram juntos entram em cascata, com 30 a 80 ms entre eles e atrasos não
uniformes. É decorativo: nunca bloqueie a interação enquanto a cascata acontece.

```css
.item { opacity: 0; transform: translateY(8px); animation: fadeIn 300ms var(--ease-out) forwards; }
.item:nth-child(2) { animation-delay: 50ms; }
.item:nth-child(3) { animation-delay: 90ms; }
.item:nth-child(4) { animation-delay: 120ms; }
@keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
```

## Conferir

- **Câmera lenta:** aumente a duração 2 a 5 vezes ou use o painel Animations do DevTools.
  Procure cores que se sobrepõem como dois estados, curva que começa ou para de repente,
  origem errada e propriedades fora de sincronia.
- **Quadro a quadro** no DevTools para problemas de tempo entre propriedades.
- **Aparelho real** para gestos (USB + Safari remoto; o simulador é a segunda opção).
- **Revise no dia seguinte:** com olhos descansados aparecem defeitos que passaram.

## Checklist de revisão

| Problema | Correção |
| --- | --- |
| `transition: all` | Propriedades exatas: `transition: transform 200ms var(--ease-out)` |
| Entrada com `scale(0)` | `scale(0.95)` com `opacity: 0` |
| `ease-in` em interface | `ease-out` ou curva própria |
| `transform-origin: center` em popover | Origem no gatilho ou `var(--transform-origin)` (modal fica centralizado) |
| Animação em ação de teclado | Remover |
| Mais de 300 ms em interface (fora modal, gaveta, toast) | 150–250 ms |
| Hover sem media query | `@media (hover: hover) and (pointer: fine)` |
| Keyframes em elemento disparado rápido | Transição CSS, que pode ser interrompida |
| `x`/`y` do Motion sob carga (antes da 14.2) | Atualizar ou usar `transform: "translateX()"` |
| Entrada e saída na mesma velocidade | Saída mais rápida |
| Tudo aparece de uma vez | Cascata de 30–80 ms, não uniforme |
