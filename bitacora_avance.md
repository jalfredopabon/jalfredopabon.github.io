# Bitácora de Avance: Portafolio Elite Alfredo Pabón

## 🎯 Filosofía del Proyecto
Este portafolio no es solo una vitrina de proyectos; es una demostración de la **intervención en el ciclo completo de los datos**. Buscamos proyectar una imagen de "Data Strategist" con foco en impacto social, combinando rigor técnico con una estética premium y narrativa de blog profesional.

---

## 🗺️ Hoja de Ruta Estratégica (Hitos)

### 🟢 Momento 1: Consolidación Monolítica (Fase Actual)
*   **Objetivo:** Crear una experiencia de usuario impecable en una sola página.
*   **Arquitectura:** Single Page Application (HTML, Vanilla CSS/Tailwind, JS).
*   **Alcance:** Presentación de 6 activos clave (4 Power BI + 1 PPT + 1 Proyecto Astro).
*   **Prioridad:** Refinamiento UI/UX, transiciones fluidas y micro-interacciones que den sensación de producto "cerrado" y profesional.

### ⚪ Momento 2: Escalabilidad con Astro
*   **Objetivo:** Transición a sitio estático complejo.
*   **Arquitectura:** Astro (Component-based).
*   **Alcance:** Múltiples páginas, catálogo de servicios detallado, blog de artículos técnicos y gestión de activos más pesados.
*   **Disparador:** Incremento significativo de material y proyectos.

---

## 🎨 Investigación y Referentes (Design Systems)
Para elevar la UI/UX del Momento 1, nos inspiramos en:
- **Vercel (Geist):** Minimalismo técnico, alto contraste, tipografía limpia.
- **Adobe Spectrum:** Rigor institucional y profesionalismo.
- **Shadcn/ui:** Estética moderna, micro-interacciones y refinamiento visual.

---

---

## 📝 Auditoría Inicial (Momento 1)
*   **Estructura:** Header Hero -> Manifiesto -> Índice de Navegación -> Grid de Proyectos -> CTA -> Footer.
*   **Puntos de Mejora UI:** 
    1.  Evolucionar las "tarjetas planas" a un estilo de blog más inmersivo (espaciado, jerarquía tipográfica).
    2.  Optimizar la carga de iFrames (lazy loading).
    3.  Refinar el carrusel de la presentación de PowerPoint para que se sienta más integrado.

---

## 💎 Sistema de Diseño (Brand Identity)
*   **Colores Primarios:** 
    *   `brand-navy`: `#0A192F` (Fondo footer y textos fuertes - Profundidad Institucional)
    *   `brand-offwhite`: `#F8FAFC` (Fondo global - Estética limpia)
    *   `brand-accent`: `#2563EB` (Azul Cobalto - Puntos de acción y hover)
*   **Tipografía:** 
    *   Títulos: *Playfair Display* (Serif - Elegancia y autoridad)
    *   Cuerpo: *Inter* (Sans-serif - Claridad técnica)
    *   **Regla de Oro:** Uso estricto de **Sentence case** en toda la interfaz para mantener minimalismo y legibilidad.
*   **Interacción:** Sistema de inversión de colores en hover para botones CTA (Fondo azul <-> Texto blanco).

---

## ⚡ Funcionalidad y Performance
*   **Carga Diferida (Lazy Loading):** Implementación de `IntersectionObserver` para iframes de Power BI; la carga inicia solo al alcanzar un 20% de visibilidad.
*   **Feedback "Elite":** Barras de progreso con gradiente animado y badges de estado (*Glassmorphism*) para gestionar la percepción de latencia en reportes pesados.
*   **Multimedia:** Carrusel optimizado para diapositivas con rutas relativas centralizadas en `/imagenes/diapositivas/`.

---

## 🛠️ Registro de Actividad
| Fecha | Acción | Hito | Observaciones |
| :--- | :--- | :--- | :--- |
| 2026-04-10 | Auditoría Inicial e Inicio de Bitácora | Momento 1 | Se define la hoja de ruta y filosofía del proyecto. |
| 2026-04-10 | Optimización de Performance y Refinamiento UI | Momento 1 | Implementación de Lazy Load, feedback de carga, corrección de carrusel y sincronización de badges estratégicos. |
| 2026-04-12 | Refinamiento Hero & Toolkit | Momento 1 | Optimización de ritmo vertical (100vh), centrado vertical del Toolkit y auditoría/limpieza de activos (Kobo y PowerPoint). |
| 2026-04-12 | Narrativa Bio & Balance Visual | Momento 1 | Reducción de bio a versión directa/concisa, ampliación del bloque a 78ch para balance y eliminación de movimiento al hover en toolkit. |
| 2026-04-12 | Seguridad de Datos (Vademecum) | Momento 1 | Ocultación del botón 'Ver proyecto' en Mundo Homeopático para proteger información sensible mientras se prepara la versión demo. |

---

### 📚 Galería de Recursos (SVG)

Esta sección sirve como respaldo de los activos visuales del toolkit para evitar pérdidas durante refactorizaciones.

#### Power BI
```html
<svg class="h-6 w-auto" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#eda503" d="M38,44H26c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v38C39,43.552,38.552,44,38,44z"/><path fill="#ffca28" d="M30,44H18c-0.552,0-1-0.448-1-1V15c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v28C31,43.552,30.552,44,30,44z"/><path fill="#ffe082" d="M22,44H10c-0.552,0-1-0.448-1-1V25c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v18C23,43.552,22.552,44,22,44z"/></svg>
```

#### Excel
```html
<svg class="h-6 w-auto" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#1b5e20" d="M9,17.139c0-2.624,2.126-4.75,4.749-4.75H41v27.444C41,41.582,39.583,43,37.834,43H15.332 C11.835,43,9,40.164,9,36.667C9,36.667,9,17.139,9,17.139z"/><path fill="#43a047" d="M9,22.75C9,20.126,11.126,18,13.749,18h14.418c-1.749,0-3.166,1.418-3.166,3.167v6 c0,1.749-1.417,3.167-3.166,3.167h-6.502c-3.497,0-6.332,2.836-6.332,6.333L9,22.75L9,22.75z"/><path fill="#9ccc65" d="M9,11.333C9,7.836,11.835,5,15.332,5h12.941v13H15.332C11.835,18,9,20.836,9,24.333 C9,24.333,9,11.333,9,11.333z"/><path fill="#ccff90" d="M28.166,5h9.668C39.582,5,41,6.418,41,8.166v6.668C41,16.582,39.582,18,37.834,18h-9.668 C26.417,18,25,16.582,25,14.834V8.166C25,6.418,26.417,5,28.166,5z"/><path fill="#2e7d32" d="M7.5,23h10c1.933,0,3.5,1.567,3.5,3.5v10c0,1.933-1.567,3.5-3.5,3.5h-10C5.567,40,4,38.433,4,36.5 v-10C4,24.567,5.567,23,7.5,23z"/><path fill="#fff" d="M16.965,36.357h-2.62L12.7,33.261c-0.059-0.109-0.104-0.194-0.135-0.258 c-0.027-0.067-0.057-0.145-0.088-0.23H12.45c-0.041,0.109-0.079,0.197-0.115,0.264c-0.036,0.068-0.079,0.151-0.129,0.251 l-1.706,3.068H8.03l2.965-4.864l-2.762-4.85h2.586l1.462,2.764c0.059,0.113,0.109,0.213,0.149,0.298 c0.045,0.081,0.09,0.178,0.135,0.291h0.027c0.063-0.131,0.112-0.235,0.149-0.311c0.041-0.076,0.095-0.178,0.162-0.304l1.516-2.736 h2.464l-2.802,4.776L16.965,36.357L16.965,36.357z"/></svg>
```

#### PowerPoint
```html
<svg class="h-8 w-auto" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#dc4c2c" d="M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z"></path>
    <path fill="#f7a278" d="M26,6v18h18C44,14.059,35.941,6,26,6z"></path>
    <path fill="#c06346" d="M26,6C16.059,6,8,14.059,8,24h18V6z"></path>
    <path fill="#9b341f" d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"></path>
    <path fill="#fff" d="M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z"></path>
</svg>
```

#### Google Sheets
```html
<svg class="h-8 w-auto" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#43a047" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"></path>
    <path fill="#c8e6c9" d="M40 13L30 13 30 3z"></path>
    <path fill="#2e7d32" d="M30 13L40 23 40 13z"></path>
    <path fill="#e8f5e9" d="M31,23H17h-2v2v2v2v2v2v2v2h18v-2v-2v-2v-2v-2v-2v-2H31z M17,25h4v2h-4V25z M17,29h4v2h-4V29z M17,33h4v2h-4V33z M31,35h-8v-2h8V35z M31,31h-8v-2h8V31z M31,27h-8v-2h8V27z"></path>
</svg>
```

#### Looker Studio
```html
<svg class="h-8 w-auto" viewBox="-78.5 0 413 413" xmlns="http://www.w3.org/2000/svg">
    <path d="M127.128486,0 C113.797782,0.0058471726 101.556004,7.36006381 95.2905253,19.126605 C89.0250469,30.8931461 89.7564532,45.1553578 97.1927396,56.2192339 L112.606279,40.8274339 C112.096845,39.2920176 111.839876,37.6841242 111.845385,36.066411 C111.845385,27.6618072 118.658663,20.8485297 127.063267,20.8485297 C135.467871,20.8485297 142.281148,27.6618072 142.281148,36.066411 C142.281148,44.4710148 135.467871,51.2842924 127.063267,51.2842924 C125.452814,51.2878362 123.852389,51.0308872 122.323984,50.5233983 L106.932184,65.9151983 C119.749817,74.6084738 136.686605,74.1479499 149.012895,64.7709924 C161.339185,55.3940349 166.302744,39.1943452 161.345227,24.5216568 C156.387711,9.84896827 142.61604,-0.0205786569 127.128486,0 L127.128486,0 Z" fill="#34A853"></path>
    <path d="M112.780303,105.112113 C112.803794,92.9288201 108.858278,81.0693768 101.540706,71.3284161 L81.5400617,91.3073204 C87.7949796,102.747737 85.5440645,116.967804 76.0616244,125.917131 L86.9315396,152.483203 C103.037113,142.110661 112.772753,124.268811 112.780303,105.112113 Z" fill="#FBBC04"></path>
    <path d="M56.8870939,133.786949 L56.3653379,133.786949 C44.0975407,133.788013 33.1858466,125.990585 29.2128405,114.383946 C25.2398344,102.777307 29.0843199,89.9287712 38.7794013,82.4118404 C48.4744826,74.8949096 61.8756692,74.3722813 72.126715,81.1113398 L91.9317006,61.3063543 C72.6737207,45.6936654 45.4778243,44.4893124 24.9151409,58.3385684 C4.35245741,72.1878245 -4.75374244,97.8421492 2.47549859,121.556363 C9.70473962,145.270576 31.5737,161.482171 56.3653379,161.50524 C60.1906548,161.507115 64.0066702,161.128427 67.7570091,160.374762 L56.8870939,133.786949 Z" fill="#EA4335"></path>
    <path d="M127.88938,156.76595 C115.371706,156.753269 102.919887,158.577095 90.9316684,162.179168 L106.780005,200.897806 C113.678715,199.188192 120.760254,198.326726 127.86764,198.332506 C169.050784,198.344513 204.491034,227.444917 212.516351,267.838552 C220.541668,308.232187 198.917134,348.670095 160.866351,364.424121 C122.815568,380.178148 78.9350487,366.861058 56.0581359,332.616375 C33.1812232,298.371692 37.6787581,252.735993 66.8004566,223.615929 C72.8771111,217.558264 79.8143655,212.430409 87.3880761,208.398047 L71.7136583,169.788108 C13.2865745,198.402523 -14.3767247,266.297107 7.41546106,327.59645 C29.2076468,388.895793 93.5203541,424.092503 156.898395,409.404661 C220.276436,394.716818 262.550912,334.818559 255.157557,270.182291 C247.764201,205.546024 193.055814,156.741054 127.998079,156.74421 L127.88938,156.76595 Z" fill="#4285F4"></path>
</svg>
```

#### KoboToolbox (Limpio)
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" class="h-6 w-auto">
  <path fill="#1E8FED" fill-rule="evenodd" d="M93.5,26.5 C110.5,26.3 127.5,26.5 144.5,27 C168.3,32.7 180.6,47.9 181.5,72.5 C177,72.1 172.5,71.4 168,70.5 C164.2,71.4 160.4,72.1 156.5,72.5 C157,61.8 152,55.3 141.5,53 C127.2,52.3 112.8,52.3 98.5,53 C91.2,54.3 86.4,58.5 84,65.5 C83.3,102.2 83.3,138.8 84,175.5 C86.5,183 91.6,187.1 99.5,188 C113.5,188.7 127.5,188.7 141.5,188 C148.4,186.8 153.2,183 156,176.5 C156.3,168.5 156.7,160.5 157,152.5 C164.6,143 172.4,133.6 180.5,124.5 C193.8,195.7 164.8,224.9 93.5,212 C74.6,208.4 62.7,197.2 58,178.5 C57.3,139.2 57.3,139.2 58,60.5 C62.9,41.8 74.7,30.4 93.5,26.5 Z M165.5,88.5 C171,88.1 176,89.5 180.5,92.5 C181.9,95.8 181.4,98.8 179,101.5 C165.2,117.3 151.3,133.2 137.5,149 C130.8,153.7 124.1,153.7 117.5,149 C112.9,144.4 109,139.2 106,133.5 C103.5,125.8 105,118.9 110.5,113 C112.9,112.3 115.2,112.5 117.5,113.5 C120.8,117.5 124.1,121.5 127.5,125.5 C137.3,114.8 147,104 156.5,93 C159.3,90.9 162.3,89.4 165.5,88.5 Z" />
</svg>
```
