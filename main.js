// Alternância de tema dia/noite. O tema inicial é definido inline no <head>
// (sem flash). Aqui só tratamos o clique no botão e salvamos a preferência.
(function () {
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  if (!btn) return;
  btn.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
