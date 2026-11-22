(() => {
  const $ = (sel) => document.querySelector(sel);
  const brl = (n) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const byId = Object.fromEntries(PRODUCTS.map((p) => [p.id, p]));
  const catLabel = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));
  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const state = { category: "todos", query: "", cart: loadCart() };

  function loadCart() {
    try {
      const raw = JSON.parse(localStorage.getItem("raizviva-cart") || "{}");
      return Object.fromEntries(Object.entries(raw).filter(([id, q]) => byId[id] && q > 0));
    } catch { return {}; }
  }
  function saveCart() {
    try { localStorage.setItem("raizviva-cart", JSON.stringify(state.cart)); } catch {}
  }

  /* ---------- Filtros ---------- */
  function renderFilters() {
    $("#filters").innerHTML = CATEGORIES.map((c) =>
      `<button class="chip" role="tab" data-cat="${c.id}" aria-selected="${c.id === state.category}">${c.label}</button>`
    ).join("");
  }
  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderFilters();
    renderGrid();
  });
  $("#search").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderGrid();
  });

  const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  /* ---------- Grade de produtos ---------- */
  function renderGrid() {
    const q = normalize(state.query.trim());
    const list = PRODUCTS.filter((p) =>
      (state.category === "todos" || p.categories.includes(state.category)) &&
      (!q || normalize(`${p.name} ${p.tagline} ${p.evidence}`).includes(q))
    );
    $("#empty").hidden = list.length > 0;
    $("#grid").innerHTML = list.map((p) => `
      <article class="card">
        <div class="card__art"><img src="${p.image}" alt="${escapeHtml(p.imageAlt)}" loading="lazy" width="900" height="675"></div>
        <div class="card__body">
          <div class="card__tags">${p.categories.map((c) => `<span class="tag">${catLabel[c]}</span>`).join(" · ")}</div>
          <h3>${escapeHtml(p.name)}</h3>
          <p class="card__form">${escapeHtml(p.form)}</p>
          <p class="card__tagline">${escapeHtml(p.tagline)}</p>
          <div class="card__foot">
            <span class="price">${brl(p.price)}</span>
            <div class="card__actions">
              <button class="link-btn" data-info="${p.id}">Detalhes</button>
              <button class="add-btn" data-add="${p.id}">Adicionar</button>
            </div>
          </div>
        </div>
      </article>`).join("");
  }
  $("#grid").addEventListener("click", (e) => {
    const add = e.target.closest("[data-add]");
    const info = e.target.closest("[data-info]");
    if (add) addToCart(add.dataset.add);
    if (info) openProduct(info.dataset.info);
  });

  /* ---------- Modal de detalhes ---------- */
  const modal = $("#productModal");
  function openProduct(id) {
    const p = byId[id];
    $("#modalBody").innerHTML = `
      <button class="icon-btn modal__close" data-close aria-label="Fechar">✕</button>
      <figure class="modal__img"><img src="${p.image}" alt="${escapeHtml(p.imageAlt)}"><figcaption>Foto: <a href="${p.credit.photo}" target="_blank" rel="noopener">${escapeHtml(p.credit.name)}</a> / Unsplash</figcaption></figure>
      <p class="tag">${p.categories.map((c) => catLabel[c]).join(" · ")}</p>
      <h2 id="modalTitle">${escapeHtml(p.name)}</h2>
      <p class="card__form">${escapeHtml(p.form)}</p>
      <h4>O que a ciência diz</h4>
      <p>${escapeHtml(p.evidence)}</p>
      <h4>Cuidados</h4>
      <p class="caution">${escapeHtml(p.caution)}</p>
      <h4>Fonte oficial</h4>
      <p class="modal__source"><a href="${p.source.url}" target="_blank" rel="noopener">${escapeHtml(p.source.label)} ↗</a></p>
      <div class="modal__foot">
        <span class="price">${brl(p.price)}</span>
        <button class="btn btn--primary" data-modal-add="${p.id}">Adicionar ao carrinho</button>
      </div>`;
    modal.showModal();
  }
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.closest("[data-close]")) modal.close();
    const add = e.target.closest("[data-modal-add]");
    if (add) { addToCart(add.dataset.modalAdd); modal.close(); }
  });

  /* ---------- Carrinho ---------- */
  function addToCart(id) {
    state.cart[id] = (state.cart[id] || 0) + 1;
    saveCart();
    renderCart();
    toast(`${byId[id].name} adicionado`);
    const count = $("#cartCount");
    count.classList.remove("bump"); void count.offsetWidth; count.classList.add("bump");
  }
  function setQty(id, qty) {
    if (qty <= 0) delete state.cart[id]; else state.cart[id] = qty;
    saveCart();
    renderCart();
  }
  function cartEntries() {
    return Object.entries(state.cart).map(([id, qty]) => ({ p: byId[id], qty }));
  }
  function renderCart() {
    const items = cartEntries();
    const count = items.reduce((s, i) => s + i.qty, 0);
    const total = items.reduce((s, i) => s + i.qty * i.p.price, 0);
    $("#cartCount").textContent = count;
    $("#cartTotal").textContent = brl(total);
    $("#cartEmpty").hidden = items.length > 0;
    $("#checkout").disabled = items.length === 0;
    $("#cartList").innerHTML = items.map(({ p, qty }) => `
      <li class="cart-item">
        <strong>${escapeHtml(p.name)}</strong>
        <div class="qty">
          <button data-dec="${p.id}" aria-label="Diminuir ${escapeHtml(p.name)}">−</button>
          <span>${qty}</span>
          <button data-inc="${p.id}" aria-label="Aumentar ${escapeHtml(p.name)}">+</button>
        </div>
        <small>${brl(p.price)} · subtotal ${brl(p.price * qty)}</small>
      </li>`).join("");
  }
  $("#cartList").addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    if (inc) setQty(inc.dataset.inc, state.cart[inc.dataset.inc] + 1);
    if (dec) setQty(dec.dataset.dec, state.cart[dec.dataset.dec] - 1);
  });

  const drawer = $("#drawer");
  const backdrop = $("#backdrop");
  function toggleCart(open) {
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    backdrop.hidden = !open;
    if (open) $("#closeCart").focus();
  }
  $("#openCart").addEventListener("click", () => toggleCart(true));
  $("#closeCart").addEventListener("click", () => toggleCart(false));
  backdrop.addEventListener("click", () => toggleCart(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggleCart(false); });

  /* ---------- WhatsApp ---------- */
  $("#checkout").addEventListener("click", () => {
    const items = cartEntries();
    if (!items.length) return;
    const name = $("#customerName").value.trim();
    const total = items.reduce((s, i) => s + i.qty * i.p.price, 0);
    const lines = [
      `Olá! ${name ? `Sou ${name} e ` : ""}gostaria de fazer este pedido na Raiz Viva:`,
      "",
      ...items.map(({ p, qty }) => `• ${qty}x ${p.name} (${p.form}) — ${brl(p.price * qty)}`),
      "",
      `Total: ${brl(total)}`,
      "",
      "Como combinamos pagamento e entrega?",
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
  }

  $("#year").textContent = new Date().getFullYear();
  renderFilters();
  renderGrid();
  renderCart();
})();
