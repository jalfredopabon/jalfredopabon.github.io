/**
 * footer-scene.js — Enciende las luces del footer ilustrado al llegar a él.
 *
 * Orden: primero la pantalla del portátil, luego las ventanas de los pueblos
 * (los retrasos están en el atributo style="--d:…" de cada luz en index.html).
 * Se enciende una sola vez. Sin JS, o con "reducir movimiento", las luces se ven
 * encendidas desde el inicio.
 */
(function () {
  'use strict';

  var scene = document.querySelector('[data-scene]');
  if (!scene || !('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // "Armar" la escena: apaga las luces hasta que el footer sea visible
  scene.classList.add('is-armed');

  var observer = new IntersectionObserver(function (entries) {
    if (!entries[0].isIntersecting) return;
    scene.classList.add('is-lit');
    observer.disconnect();
  }, { threshold: 0.4 });

  observer.observe(scene);
})();
