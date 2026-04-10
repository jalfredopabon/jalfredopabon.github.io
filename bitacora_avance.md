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
