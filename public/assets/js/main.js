
(function () {
  "use strict";

  /* -------------------------
     MOBILE MENU
  -------------------------- */

  const menuBtn = document.getElementById('menuBtn');
  const mobileClose = document.getElementById('mobileClose');
  const mobilePanel = document.getElementById('mobilePanel');
  const backdrop = document.getElementById('backdrop');

  function openMenu() {
    mobilePanel?.classList.add('open');
    backdrop?.classList.add('show');
  }

  function closeMenu() {
    mobilePanel?.classList.remove('open');
    backdrop?.classList.remove('show');
  }

  menuBtn?.addEventListener('click', openMenu);
  mobileClose?.addEventListener('click', closeMenu);
  backdrop?.addEventListener('click', closeMenu);

  document
    .querySelectorAll('.mobile-links a, .mobile-cta a')
    .forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

  /* -------------------------
     HEADER SCROLL EFFECT
  -------------------------- */

  const header = document.querySelector('.site-header');

  function updateHeader() {
    if (!header) return;

    header.style.boxShadow =
      window.scrollY > 8
        ? '0 6px 20px rgba(0,0,0,0.25)'
        : 'none';
  }

  window.addEventListener('scroll', updateHeader, {
    passive: true
  });

  updateHeader();

})();
