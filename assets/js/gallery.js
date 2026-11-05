/**
 * gallery.js — Vista ampliada de la galería UI/UX
 *
 * Cada pieza es un enlace normal a su imagen o video (funciona sin JS):
 *   <figure class="gallery-item">
 *     <a href="imagen-grande.webp" data-gallery-item> <img …> </a>
 *     <figcaption><span>Nombre</span><span class="card-subtitle">Plataforma · Contexto</span></figcaption>
 *     <template data-gallery-desc> …texto ampliado… </template>
 *   </figure>
 * Video: el <a> apunta al .mp4/.webm y lleva data-type="video"; la <img> de la miniatura sirve de poster.
 *
 * Con JS, el clic abre la pieza en #gallery-modal: flechas ‹ ›, teclado (← → Esc),
 * deslizar en móvil y contador "2 / 4".
 */
(function () {
  'use strict';

  var modal = document.getElementById('gallery-modal');
  if (!modal || typeof modal.showModal !== 'function') return;

  var links = Array.prototype.slice.call(document.querySelectorAll('[data-gallery-item]'));
  if (!links.length) return;

  var media = modal.querySelector('[data-gallery-media]');
  var stage = modal.querySelector('[data-gallery-stage]');
  var titleEl = modal.querySelector('[data-gallery-title]');
  var subtitleEl = modal.querySelector('[data-gallery-subtitle]');
  var descEl = modal.querySelector('[data-gallery-desc-target]');
  var counter = modal.querySelector('[data-gallery-counter]');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  var SWIPE_MIN_PX = 50;
  var current = 0;

  if (links.length < 2) modal.setAttribute('data-single', '');

  // Lee los datos de una pieza desde su <figure>
  function read(index) {
    var link = links[index];
    var figure = link.closest('figure');
    var thumb = link.querySelector('img');
    var name = figure.querySelector('figcaption > span:first-child');
    var subtitle = figure.querySelector('.card-subtitle');
    return {
      src: link.getAttribute('href'),
      isVideo: link.getAttribute('data-type') === 'video',
      poster: thumb ? thumb.getAttribute('src') : '',
      alt: thumb ? thumb.getAttribute('alt') : '',
      title: name ? name.textContent : '',
      subtitle: subtitle ? subtitle.textContent : '',
      desc: figure.querySelector('template[data-gallery-desc]')
    };
  }

  function render(index) {
    current = (index + links.length) % links.length;
    var item = read(current);

    media.textContent = ''; // también detiene el video anterior
    var el;
    if (item.isVideo) {
      el = document.createElement('video');
      el.src = item.src;
      if (item.poster) el.poster = item.poster;
      el.muted = true;
      el.loop = true;
      el.playsInline = true;
      el.controls = true; // siempre se puede pausar
      el.preload = 'metadata';
      el.setAttribute('aria-label', item.alt || item.title);
      // Con movimiento reducido no arranca solo: la persona le da play
      if (!reduceMotion.matches) el.autoplay = true;
    } else {
      el = document.createElement('img');
      el.src = item.src;
      el.alt = item.alt;
      el.decoding = 'async';
    }
    media.appendChild(el);

    titleEl.textContent = item.title;
    subtitleEl.textContent = item.subtitle;
    subtitleEl.hidden = !item.subtitle;
    descEl.textContent = '';
    if (item.desc) descEl.appendChild(item.desc.content.cloneNode(true));
    descEl.parentElement.scrollTop = 0; // el panel con scroll vuelve arriba
    counter.textContent = (current + 1) + ' / ' + links.length;
  }

  function open(index) {
    render(index);
    if (!modal.open) modal.showModal();
  }

  // Al cerrar se vacía el escenario (libera el video) y el foco vuelve a la pieza
  // (el evento llega en diferido: si ya se reabrió, no se toca)
  modal.addEventListener('close', function () {
    if (modal.open) return;
    media.textContent = '';
    links[current].focus({ preventScroll: true });
  });

  modal.querySelector('[data-gallery-close]').addEventListener('click', function () { modal.close(); });
  modal.querySelector('[data-gallery-prev]').addEventListener('click', function () { render(current - 1); });
  modal.querySelector('[data-gallery-next]').addEventListener('click', function () { render(current + 1); });

  // Clic sobre el fondo oscuro cierra
  modal.addEventListener('click', function (event) {
    if (event.target === modal) modal.close();
  });

  // Teclado: ← → navegan (Esc ya lo cierra el <dialog>). No interfiere con los controles del video
  modal.addEventListener('keydown', function (event) {
    if (links.length < 2 || event.target.tagName === 'VIDEO') return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); render(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); render(current + 1); }
  });

  // Deslizar en móvil: horizontal y más largo que vertical
  var startX = 0;
  var startY = 0;
  stage.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
  }, { passive: true });
  stage.addEventListener('touchend', function (event) {
    if (links.length < 2) return;
    var dx = event.changedTouches[0].clientX - startX;
    var dy = event.changedTouches[0].clientY - startY;
    if (Math.abs(dx) < SWIPE_MIN_PX || Math.abs(dx) < Math.abs(dy)) return;
    render(dx < 0 ? current + 1 : current - 1);
  }, { passive: true });

  links.forEach(function (link, index) {
    link.addEventListener('click', function (event) {
      // Ctrl/Cmd/Shift-clic: se respeta abrir en pestaña nueva
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      open(index);
    });
  });
})();
