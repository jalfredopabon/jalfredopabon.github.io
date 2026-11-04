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

  // Power BI dibuja el reporte después de que el iframe avisa "load";
  // se espera este margen extra antes de ocultar la barra de carga.
  var RENDER_MARGIN_MS = 1500;
  var loadToken = 0;
  var hideTimer = 0;

  function open(link) {
    var src = link.getAttribute('href');
    var name = link.getAttribute('data-dashboard-title') || 'Tablero interactivo';
    title.textContent = name;
    frame.title = name;
    external.setAttribute('href', src);

    loadToken += 1;
    var token = loadToken;
    window.clearTimeout(hideTimer);
    modal.setAttribute('data-state', 'loading');

    frame.onload = function () {
      if (token !== loadToken) return; // carga de un tablero anterior o de about:blank
      hideTimer = window.setTimeout(function () {
        if (token === loadToken) modal.setAttribute('data-state', 'ready');
      }, RENDER_MARGIN_MS);
    };

    frame.src = src;
    modal.showModal();
  }

  function close() {
    modal.close();
  }

  // Al cerrar se descarga el iframe para liberar memoria y se reinicia la barra
  modal.addEventListener('close', function () {
    loadToken += 1;
    window.clearTimeout(hideTimer);
    frame.onload = null;
    frame.src = 'about:blank';
    modal.setAttribute('data-state', 'loading');
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
