---
name: Clarity & Evidence
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fc'
  on-secondary-container: '#57657a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 3.5rem
    fontWeight: '600'
    lineHeight: 4rem
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  metric-display:
    fontFamily: Geist
    fontSize: 2.5rem
    fontWeight: '500'
    lineHeight: 2.75rem
    letterSpacing: -0.03em
  label-md:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.125rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 0.6875rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-lg: 1.75rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system positions Monitoring, Evaluation, Accountability, and Learning (MEAL) as an exact, empirical discipline rooted in structural restraint and quiet confidence. Designed for executive evaluators, global development partners, and data-driven institutions, the aesthetic avoids corporate dashboard clutter in favor of an Apple-grade, editorial Bento-grid experience. 

The emotional signature is precise, serene, and authoritative. Visual noise is stripped back so complex quantitative metrics, theory-of-change frameworks, and qualitative impact narratives communicate with clarity. The interface draws from modern architectural minimalism and Bento modularity: discrete 16:9-proportioned containers, crisp hairline separations, generous negative space, and disciplined typography.

## Colors
The palette intentionally rejects stark polar opposites (#FFFFFF and #000000) to reduce glare and convey material quality:

- **Canvas & Surfaces**: The base backdrop relies on an off-white ivory tint (`#F8FAFC` to `#FAFAFA`). Card surfaces use an elevated warm-white tint (`#FFFFFF` with a slight warm undertone or alpha overlay) resting over the base tone to generate natural, ambient separation without heavy drop shadows.
- **Ink & High-Contrast Accents**: Primary typographic ink and high-impact solid controls leverage deep slate and graphite (`#0F172A` and `#111827`).
- **Supportive & Analytical Inks**: Supporting copy, metadata, field descriptions, and table headers use muted mid-tone neutrals (`#475569` and `#64748B`). Tertiary labels and timestamps resolve at `#94A3B8`.
- **Structural Outlines**: All panel separators, grid edges, and borders use a subtle neutral tone (`#E2E8F0` and `#E5E7EB`). 
- **Functional Accents**: Indicators for evaluations, statistical confidence intervals, and tracking badges employ monochromatic tones or low-chroma status fills with muted slate and charcoal text.

## Typography
Typographic rhythm is unified under **Geist** across all roles, delivering systematic clarity and optical balance across prose, dense data readouts, and display metrics.

- **Tracking & Proportion**: Tight negative letter spacing is applied to headings (`-0.02em` to `-0.035em`) to evoke Swiss modernist rigor. Smaller technical labels use subtle positive tracking (`+0.01em` to `+0.04em`) to ensure legibility in tight grid constraints.
- **Metric Presentation**: Numeric data points (such as indicator targets, sample sizes, and statistical indices) leverage tabular alignment (`font-variant-numeric: tabular-nums`) to prevent horizontal jitter during interactive exploration.

## Layout & Spacing
The layout model follows a structured Bento Grid hierarchy with clean division of analytical work, research papers, and impact evaluations:

- **Desktop Grid (>= 1024px)**: 12-column responsive grid constrained to a maximum width of 1280px. Standard Bento modules adopt a 16:9 proportional anchor for key dashboard previews and case studies, allowing balanced combinations of 4-column, 6-column, 8-column, and full-span (12-column) blocks. Column gutters rest at `1.75rem`.
- **Tablet Grid (768px - 1023px)**: 6-column grid with `1.25rem` gutters. Bento cards adapt to 3-column (half-width) or 6-column (full-width) arrangements.
- **Mobile Grid (< 768px)**: Single-column linear stack with `1rem` outer canvas padding. Fixed aspect ratios release to dynamic content heights to preserve reading flow for deep qualitative summaries.
- **Bento Flow & Rhythm**: Outer canvas margins use generous spacing (`2.5rem` to `4rem` on desktop) to anchor the portfolio as a calm exhibition space. Cards maintain consistent internal padding using `space-lg` (`1.5rem`).

## Elevation & Depth
Depth in this design system is architectural, flat, and tactile, avoiding heavy artificial drops:

- **Low-Contrast Hairlines**: Elevation boundaries are defined through 1px solid borders (`#E2E8F0` / `#E5E7EB`) rather than dark drop shadows. Cards hover subtly on the off-white field with a faint, ultra-diffused atmospheric glow (`0 1px 3px rgba(15, 23, 42, 0.04), 0 6px 16px rgba(15, 23, 42, 0.02)`).
- **Glassmorphism Navigation**: The sticky header employs a frosted glass plane using `rgba(248, 250, 252, 0.8)` layered with a 16px backdrop blur (`backdrop-filter: blur(16px)` and `-webkit-backdrop-filter: blur(16px)`) bounded by a subtle bottom border (`1px solid rgba(226, 232, 240, 0.8)`).
- **Active & Hover States**: Bento cards respond to hover with a gentle 1px border shift to `#CBD5E1` and a micro-translation of `-2px` on the Y-axis accompanied by a faint lift shadow (`0 10px 25px -5px rgba(15, 23, 42, 0.05)`).

## Shapes
The shape language aligns with modern hardware-inspired industrial design:

- **Bento Containers**: Main cards, modular widgets, and project preview surfaces use 1rem (`16px`) corner radiuses (`rounded-lg`), establishing smooth, calm perimeters.
- **Interactive Controls**: Buttons, pill badges, and search bars utilize full pill geometries (`9999px`) or refined `0.5rem` (`8px`) curves to create visual contrast against the structured square/16:9 rectangular grid modules.
- **Technical Badges**: Tool and methodology tags utilize full circular-radius pill silhouettes to soften the data-heavy presentation.

## Components

### Buttons
- **Primary**: Solid deep slate (`#0F172A`) fill with crisp off-white (`#F8FAFC`) typography. Pill or `0.5rem` rounded corners. Subtle scale on press (`scale(0.98)`).
- **Secondary / Outline**: Transparent fill, 1px border (`#E2E8F0`), slate text (`#0F172A`). On hover: background transitions to `#F1F5F9`.
- **Tertiary / Ghost**: Borderless, mid-tone slate text (`#475569`). On hover: text deepens to `#0F172A` with a background fill of `rgba(15, 23, 42, 0.03)`.

### Bento Dashboard Cards (16:9 & Modals)
- Outer container constructed with a 1px border (`#E2E8F0`), background `#FFFFFF`, and `1rem` corner rounding.
- Header region contains category micro-labels in uppercase `label-sm` with muted slate tones.
- Media and data visualization zones respect the 16:9 ratio where possible, housing interactive charts, survey sample breakdowns, or field project captures with clean internal borders.

### Badges & Tech Stack Tags
- Monochromatic, understated appearance. 
- Background `#F1F5F9`, hairline border `1px solid #E2E8F0`, text color `#334155`.
- Padding: `0.25rem 0.625rem`, typography set to `label-md` or `label-sm` in full pill format.

### Lists & Key Performance Indicator (KPI) Tiers
- Data lists omit alternating zebra stripes; items are separated by clean 1px bottom border rules (`#F1F5F9`).
- KPI metrics showcase a stacked hierarchy: large tabular number (`metric-display`) resting above an analytical caption (`body-sm`) in muted secondary slate.

### Form Inputs & Search Fields
- Minimalist inset look. Background `#FFFFFF` or `#F8FAFC`, 1px border (`#E2E8F0`), padding `0.625rem 1rem`.
- Focus state activates a precise 1px border tint to `#0F172A` without loud colorful glow rings.

### Checkboxes & Segmented Controls
- Minimalist rounded squares for checkboxes with a 1px neutral border. Selected state fills with solid `#0F172A` and displays a crisp white checkmark.
- Segmented controls feature a recessed background (`#F1F5F9`) housing an elevated active white pill with micro-shadow for tab switching.