(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Ano no rodapé
  $('#year').textContent = new Date().getFullYear();

  // Menu mobile
  const menuBtn = $('#menu-btn'), list = $('#gnav-list');
  const closeMenu = () => { list.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };
  menuBtn.addEventListener('click', () => {
    const open = !list.classList.contains('open');
    list.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    closeSearch();
  });
  $$('a', list).forEach(a => a.addEventListener('click', closeMenu));

  // Busca (flyout)
  const flyout = $('#search-flyout'), scrim = $('#scrim');
  function closeSearch() { flyout.hidden = true; scrim.hidden = true; }
  $('#search-btn').addEventListener('click', () => {
    const open = flyout.hidden;
    closeMenu();
    flyout.hidden = !open; scrim.hidden = !open;
    if (open) $('input', flyout).focus();
  });
  scrim.addEventListener('click', closeSearch);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeSearch(); closeMenu(); } });

  // Sacola
  let count = 0;
  const badge = $('#bag-count'), toast = $('#toast');
  let t;
  const showToast = msg => { toast.textContent = msg; toast.classList.add('show'); clearTimeout(t); t = setTimeout(() => toast.classList.remove('show'), 2200); };
  $$('[data-add]').forEach(el => el.addEventListener('click', e => {
    e.preventDefault();
    count++; badge.textContent = count; badge.hidden = false;
    showToast(`${el.dataset.add} adicionado à sacola`);
  }));
  $('#bag-btn').addEventListener('click', () => showToast(count ? `Sua sacola tem ${count} ${count > 1 ? 'itens' : 'item'}.` : 'Sua sacola está vazia.'));

  // Rodapé: acordeão no mobile
  $$('.directory h3 button').forEach(btn => btn.addEventListener('click', () => {
    if (!matchMedia('(max-width:833px)').matches) return;
    const ul = btn.parentElement.nextElementSibling;
    const open = !ul.classList.contains('open');
    ul.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  }));

  // Animação ao rolar
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: .15 });
  $$('.reveal').forEach(el => io.observe(el));

  // Verificação de idade (+18)
  const age = $('#age');
  let ok = false;
  try { ok = localStorage.getItem('adega-18') === '1'; } catch (_) {}
  if (!ok) { age.hidden = false; $('#age-yes').focus(); }
  $('#age-yes').addEventListener('click', () => { try { localStorage.setItem('adega-18', '1'); } catch (_) {} age.hidden = true; });
  $('#age-no').addEventListener('click', () => {
    $('#age-title').textContent = 'Volte quando tiver 18 anos.';
    $('.age-card p').textContent = 'Este site é destinado apenas a maiores de idade.';
    $('.age-card .ctas').remove();
  });
})();
