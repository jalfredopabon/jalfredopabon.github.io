/**
 * dashboards.js — Tableros en vivo (Power BI / Looker Studio)
 *
 * Cada botón es un enlace normal (funciona sin JS):
 *   <a href="URL" data-dashboard data-dashboard-title="Título" target="_blank">Ver tablero en vivo</a>
 *
 * En escritorio (>= 768px) el enlace abre el tablero dentro de un <dialog> sobre la página.
 * En móvil se deja el comportamiento normal: pestaña nueva (los iframes de BI no son usables ahí).
 */
(function () {
  'use strict';

  var modal = document.getElementById('dashboard-modal');
  if (!modal || typeof modal.showModal !== 'function') return;

  var frame = modal.querySelector('iframe');
  var title = modal.querySelector('[data-modal-title]');
  var external = modal.querySelector('[data-modal-external]');
  var closeBtn = modal.querySelector('[data-modal-close]');
  var desktop = window.matchMedia('(min-width: 768px)');

  function open(link) {
    var src = link.getAttribute('href');
    var name = link.getAttribute('data-dashboard-title') || 'Tablero interactivo';
    title.textContent = name;
    frame.title = name;
    external.setAttribute('href', src);
    frame.src = src;
    modal.showModal();
  }

  function close() {
    modal.close();
  }

  // Al cerrar se descarga el iframe para liberar memoria
  modal.addEventListener('close', function () {
    frame.src = 'about:blank';
  });

  // Clic fuera del contenido (sobre el fondo) cierra el modal
  modal.addEventListener('click', function (event) {
    if (event.target === modal) close();
  });

  closeBtn.addEventListener('click', close);

  document.querySelectorAll('[data-dashboard]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      if (!desktop.matches) return;
      event.preventDefault();
      open(link);
    });
  });
})();
