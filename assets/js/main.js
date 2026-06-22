// --- Menu mobile ---
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu de navegação');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu de navegação');
    }
  });

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// --- Validação do formulário de reserva ---
(function () {
  var form = document.querySelector('.booking-card');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var checkin  = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;
    if (!checkin || !checkout) {
      alert('Por favor, preencha as datas de check-in e check-out.');
      return;
    }
    if (new Date(checkout) <= new Date(checkin)) {
      alert('A data de check-out deve ser após o check-in.');
      return;
    }
    var hospedes = document.getElementById('hospedes').value;
    var msg = encodeURIComponent(
      'Olá! Gostaria de verificar disponibilidade.\n' +
      'Check-in: ' + checkin + '\n' +
      'Check-out: ' + checkout + '\n' +
      'Hóspedes: ' + hospedes
    );
    window.open('https://nextautomatik.com/', '_blank');
  });
})();

// --- Reveal ao rolar ---
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function (el) { io.observe(el); });
})();
