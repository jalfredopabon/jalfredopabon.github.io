---
name: Portafolio Alfredo Pabón
version: 2.0-alpha
description: Sistema de diseño de la landing (SPA). Lo visual es el de la maqueta de Stitch con ajustes mínimos; el código está organizado por capas.
sources:
  visual: Stitch "Clarity & Evidence" (nueva_version/stitch_portafolio_digital/) — base visual, se respeta
  audiencia_y_tono: .impeccable.md
  reglas_tecnicas: Mundo Homeopático v2 (nueva_version/referencias/design_mundo_homeopatico.md)
colors:
  canvas: "#F8F9FA"        # Fondo global y header (Stitch)
  surface: "#FEFEFD"       # Tarjetas. Ajuste: Stitch usaba #FFFFFF
  subtle: "#F1F5F9"        # Fondos de media, hovers, etiquetas
  ink: "#0F172A"           # Texto principal y botón oscuro (carbón, no negro puro)
  ink-strong: "#1E293B"    # Hover del botón oscuro
  ink-muted: "#475569"     # Texto de apoyo
  ink-subtle: "#64748B"    # Etiquetas de sección, metadatos
  ink-faint: "#94A3B8"     # Micro-etiquetas
  line: "#E2E8F0"
  line-strong: "#CBD5E1"
typography:
  family: Geist (única)
  h1: 1.875rem / 42px desde sm, bold, tracking-tight, line-height 1.18
  card-title: 0.875rem / 1rem desde sm, bold, tracking-tight
  body: 0.75rem / 0.875rem desde sm, line-height relaxed
  section-label: 0.75rem, bold, uppercase, tracking-wider
rounded:
  card: 16px (rounded-2xl)
  media: 10px (concéntrico: 16px de tarjeta - 6px de marco)
  card-frame: 6px de padding entre la imagen y el borde de la tarjeta; el texto conserva 16/20px al borde (.card-body)
  button: 8px (rounded-lg) en TODOS los botones y en el hover de los enlaces de texto; mismo radio que el logo AP
  pill: 9999px solo en etiquetas (no son botones: la forma distingue lo que se puede hacer clic)
layout:
  header: max-w-5xl
  main: max-w-4xl
  footer: max-w-5xl (mismo ancho que el header; el nombre queda alineado arriba y abajo)
  grid: 1 columna en móvil, 2 desde md
motion:
  ease: cubic-bezier(0.16, 1, 0.3, 1)
  card-hover: ninguno (las tarjetas no son enlaces; solo los botones reaccionan)
---

## Proyecto

Documento único de referencia del portafolio. El historial de cambios está en `bitacora_avance.md`.

- **Sitio público:** https://jalfredopabon.github.io/ (GitHub Pages)
- **Repositorio:** `jalfredopabon/jalfredopabon.github.io`; `main` es lo publicado, `rediseno` es la rama de trabajo
- **Ruta local:** `C:\Users\JosePabon\Music\proyecto_portafolio_digital`
- **Contenido:** 4 tableros de Power BI y una galería UI/UX; contacto solo por LinkedIn
- **Previsualizar:** abrir `index.html` en el navegador (funciona sin servidor). Tras cambiar CSS: `npm run build`
- **Publicar:** fusionar en `main` y hacer push; GitHub Pages actualiza en segundos. **Solo cuando José lo pida**

## Principio

**Lo visual es Stitch.** Solo se ajusta lo que rompe una regla del proyecto. Por debajo, el código se ordena en capas.

## Ajustes respecto a Stitch

| Stitch | Ajuste | Motivo |
| :--- | :--- | :--- |
| Header con vidrio (`backdrop-filter: blur`) | Header sólido `canvas` con el mismo borde | Sin efectos de cristal |
| Tarjetas `#FFFFFF` | `#FEFEFD` | Sin blanco puro |
| `primary: #000000` en su DESIGN.md | No se usa; la tinta es `#0F172A` | Sin negro puro |
| Títulos con `truncate` (se cortaban en una línea) | `line-clamp-2` en títulos, `line-clamp-3` en descripciones | No ocultar contenido |
| Botones en Title Case ("Explorar Tableros") | Sentence case en el texto ("Explorar tableros") | Regla de Sentence case |
| Tailwind por CDN + estilos en cada etiqueta | Tailwind compilado + componentes en `components.css` | Rendimiento y mantenimiento |
| Dos fuentes (Geist + Plus Jakarta) | Solo Geist | Una sola familia |
| Imagen grande del footer (temporal de Google) | Eliminada | La URL caduca y era genérica |
| Contenido de relleno (Alex Rivera, cifras ficticias) | Contenido real | Honestidad |

**Excepción conocida:** las etiquetas de sección y la micro-etiqueta de herramientas van en mayúsculas por CSS (`uppercase`), como en Stitch. Esto contradice la regla de Sentence case del proyecto; se mantiene por decisión visual. Se cambia quitando `uppercase` en `.section-label > h2`.

**Conflictos con `.impeccable.md`:** las píldoras, los radios de 16px y la paleta monocroma (sin acento azul) contradicen sus líneas 17-18. Se priorizó el aspecto de Stitch por decisión del 2026-11-03.

## Estructura de la página

1. Header
2. Hero a pantalla completa (`min-height: calc(100svh - 53px)`): título grande (`clamp(2.25rem, 6vw, 4.25rem)`, Geist bold), un solo botón "Explorar tableros", sin bio, fondo con enjambre de partículas (`.hero-bg`), franja de herramientas sin etiqueta al pie con logo + nombre en gris y sin hover.

   **Enjambre de partículas (`assets/js/hero-swarm.js`)**
   - Adaptación sin React del componente SwarmCursor de React Bits (WebGL2). Ajustes en el objeto `settings` al inicio del archivo.
   - 800 partículas en escritorio, 400 en móvil; gris `#94A3B8`, se vuelven carbón `#0F172A` al acelerar o al hacer clic.
   - Escritorio: sigue al cursor; rodea el botón al pasar el mouse; clic = explosión en el punto del clic.
   - Táctil: toque corto y quieto (≤300 ms, ≤10 px) = explosión donde esté el enjambre; deslizar = sigue al dedo sin explotar; al levantar el dedo vuelve a deambular de inmediato.
   - Sin cursor ni dedo: deambula solo.
   - Se pausa fuera de pantalla o con la pestaña oculta; con `prefers-reduced-motion` queda fijo.
   - Sin WebGL2 el hero se ve sin fondo, sin errores.
3. Tableros de impacto (Power BI, tarjetas a 2 columnas; abren en vivo en un modal)
4. Diseño UI/UX (galería de imágenes, sin enlaces)
5. Footer ilustrado: grabado andino a dos tonos con una persona analizando datos en un portátil, pueblos detrás. El texto (nombre, frase, © y LinkedIn) va sobre el cielo desde md y arriba del paisaje en móvil. La imagen usa `mix-blend-mode: multiply` (el blanco del papel toma el color del fondo) y se desvanece arriba con `mask-image`. Al llegar al footer se enciende en ámbar `#F4B544` la pantalla del portátil y luego, una a una, 18 ventanas (`assets/js/footer-scene.js`; coordenadas en píxeles de la imagen original 3584 × 1156). Una sola vez; con `prefers-reduced-motion` o sin JS, las luces se ven encendidas. Imágenes en `imagenes/footer/` a 1200, 2400 y 3584 px (`srcset`)

## Arquitectura de código

| Capa | Archivo | Contiene |
| :--- | :--- | :--- |
| Tokens | `src/css/tokens.css` | Colores como canales RGB (permiten opacidad: `border-line/80`), curva, sombra |
| Base | `src/css/base.css` | `body`, selección, foco, movimiento reducido |
| Componentes | `src/css/components.css` | `.site-header`, `.brand-mark` (logo AP), `.hero`, `.hero-bg`, `.hero-title`, `.btn-hero`, `.tools-list`, `.tool`, `.tool-logo`, `.section-label`, `.btn-dark`, `.btn-light`, `.btn-card`, `.bento-card`, `.card-media`, `.card-title`, `.card-text`, `.card-caption`, `.card-tag`, `.dashboard-modal` |
| Entrada | `src/css/input.css` | Importa en orden; compila a `assets/style.css` con `npm run build` |
| Comportamiento | `assets/js/dashboards.js`, `assets/js/hero-swarm.js`, `assets/js/footer-scene.js` | Modal del tablero en vivo; enjambre de partículas del hero; luces del footer |
| Marcado | `index.html` | Una `<section>` por bloque; utilidades de Tailwind solo para layout |

Convenciones:
- El JS se engancha por `data-*` (`data-dashboard`), nunca por clases de estilo.
- Scripts clásicos con `defer`: la página funciona abriendo el HTML sin servidor.
- Sin JS, cada botón de tablero sigue siendo un enlace normal a Power BI.

## Componentes

- **Tablero (`.bento-card` + `.btn-card[data-dashboard]`)**: vista previa 16:9, título, descripción y botón. En escritorio abre un `<dialog>` con el iframe; en móvil (<768px) abre una pestaña nueva.
- **Modal de tablero (`.dashboard-modal`)**: barra de carga `.dashboard-loader` encima del iframe; se oculta 1,5 s después del evento `load` (`RENDER_MARGIN_MS` en `dashboards.js`). El foco inicial va a la ventana (`autofocus` en el `<dialog>`).
- **Pieza UI (`figure.bento-card` + `.card-caption`)**: imagen 16:9 alineada arriba, nombre y etiqueta de proyecto. No enlaza.

## Agregar contenido

- **Tablero nuevo:** copiar un `<article class="bento-card">` de `#tableros`, cambiar imagen (`imagenes/preview/`), título, texto, `href` y `data-dashboard-title`.
- **Pieza UI nueva:** copiar un `<figure class="bento-card">` de `#diseno`, cambiar imagen, nombre y etiqueta.
