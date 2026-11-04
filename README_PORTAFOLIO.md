# Portafolio Digital Profesional - José Alfredo Pabón

> **Proyecto:** Sitio Web y Portafolio Digital Personal  
> **URL Pública:** [https://jalfredopabon.github.io/](https://jalfredopabon.github.io/)  
> **Repositorio Origen:** `jalfredopabon/jalfredopabon.github.io` (Rama: `main`)  
> **Ruta Local:** `C:\Users\JosePabon\Music\proyecto_portafolio_digital`  
> **Tecnologías:** HTML5, Tailwind CSS, JavaScript nativo, GitHub Pages  
> **Fecha de Sincronización:** Octubre 2026  

---

## 1. Propósito del Proyecto

Este repositorio contiene el código fuente completo del **Portafolio Digital Profesional de José Alfredo Pabón**, desplegado públicamente a través de **GitHub Pages**. 

El objetivo principal de este sitio es presentar de forma ejecutiva, interactiva y visual:
* Perfil profesional y experiencia en gestión de proyectos humanitarios, monitoreo y evaluación (MEAL), ingeniería y análisis de datos.
* Showcase de proyectos destacados (Dashboards en Power BI, herramientas de seguimiento, aplicaciones de terreno y visualización analítica).
* Competencias técnicas y metodológicas (DAX, Power Query, Python, GIS, UI/UX enfocado en datos).
* Canales directos de contacto profesional y redes (LinkedIn, GitHub, correo).

---

## 2. Estructura del Proyecto Local

```text
proyecto_portafolio_digital/
├── index.html                   # Página principal del portafolio (Single Page Application / Landing)
├── assets/                      # Recursos estáticos compilados (CSS, JS, iconos)
├── imagenes/                    # Imágenes de proyectos, fotos de perfil y capturas de dashboards
├── src/                         # Fuentes de estilos o scripts pre-compilados
├── package.json                 # Dependencias y scripts de desarrollo (Tailwind CSS)
├── tailwind.config.js           # Configuración de tema, paleta de colores y plugins de Tailwind
├── bitacora_avance.md           # Registro histórico de cambios y mejoras implementadas
├── README_PORTAFOLIO.md         # Esta especificación técnica y de contexto
└── .nojekyll                    # Indicador para GitHub Pages para evitar procesamiento con Jekyll
```

---

## 3. Flujo de Trabajo para Edición y Publicación

Al estar vinculado directamente al repositorio remoto de GitHub Pages, cualquier actualización sigue este ciclo:

1. **Edición Local:** Modificar archivos de contenido ([`index.html`](file:///C:/Users/JosePabon/Music/proyecto_portafolio_digital/index.html)), estilos o agregar nuevas imágenes en `imagenes/`.
2. **Previsualización:** Abrir `index.html` en el navegador web local o mediante un servidor ligero local.
3. **Publicación Automática:**
   ```bash
   git add .
   git commit -m "feat: actualizar secciones de proyectos y experiencia"
   git push origin main
   ```
   *GitHub Pages detecta el push en la rama `main` y actualiza automáticamente el sitio web en producción en pocos segundos.*

