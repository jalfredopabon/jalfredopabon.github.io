# Design System Document: The Digital Atelier

## 1. Overview & Creative North Star

**Creative North Star: The Editorial Architect**
This design system moves beyond the generic utility of standard web frameworks to embrace the "Digital Atelier"—a space that feels curated, bespoke, and intentionally structured. It draws inspiration from high-end fashion editorial and architectural portfolios where the "grid" is not a cage, but a canvas.

To achieve this, the system rejects traditional UI tropes like heavy borders and generic shadows. Instead, it relies on **Tonal Contrast** and **Structural Asymmetry**. We break the "template" look by using exaggerated typographic scales, overlapping images that break container boundaries, and a sophisticated "No-Line" philosophy that uses color shifts rather than strokes to define space.

---

## 2. Colors

The palette is a study in slate, chalk, and muted earth tones. It is designed to feel professional and calm, allowing the portfolio content to remain the primary focus.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   *Correct:* A `surface-container-low` (`#f1f4f3`) section sitting directly against a `background` (`#f9f9f8`) section.
*   *Incorrect:* Using an `#abb4b3` border to separate two white sections.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine heavyweight paper.
*   **Base:** `surface` (`#f9f9f8`)
*   **Sectioning:** `surface-container-low` (`#f1f4f3`) for large secondary areas.
*   **Floating Elements:** `surface-container-lowest` (`#ffffff`) for cards to create a subtle lift.
*   **Interaction/Depth:** `surface-container-high` (`#e3e9e8`) for nested elements that need to feel "recessed."

### Glass & Gradient Accents
To provide visual "soul," use `Glassmorphism` for skill badges or floating labels. 
*   **The Glass Effect:** Apply `primary` (`#546067`) at 10% opacity with a `backdrop-blur` of 12px.
*   **The Signature Gradient:** For high-impact CTAs, use a subtle linear gradient from `primary` (`#546067`) to `primary-dim` (`#48545b`) at a 135-degree angle.

---

## 3. Typography

The typographic soul of this system lies in the tension between the classic, high-contrast serif and the modern, utilitarian sans-serif.

*   **Display & Headlines (Newsreader):** This is our "Editorial" voice. Use `display-lg` for hero statements. Headlines should feel authoritative. Use `italic` variants sparingly to highlight key words, mimicking the "Atelier" aesthetic found in the reference images.
*   **UI & Body (Manrope):** Our "Functional" voice. Manrope provides a clean, technical contrast to the serif. It should be used for all data-heavy elements, navigation, and skill badges.
*   **Visual Hierarchy:** Large `display-sm` titles should often sit adjacent to much smaller `label-md` metadata to create a "High-Contrast" scale that feels intentionally designed rather than defaulted.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional structural lines.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift.

### Ambient Shadows
When a "floating" effect is required (e.g., a project card on hover), shadows must be:
*   **Blur:** 40px - 60px.
*   **Opacity:** 4% - 8%.
*   **Color:** Use a tinted version of `on-surface` (`#2c3433`) rather than pure black.

### The "Ghost Border" Fallback
If a border is absolutely necessary for accessibility (e.g., an input field), it must be a **Ghost Border**: use the `outline-variant` (`#abb4b3`) token at 20% opacity. Forbid 100% opaque borders.

---

## 5. Components

### Project Cards
The centerpiece of the "Atelier."
*   **Structure:** No dividers. Use `surface-container-lowest` as the card base.
*   **Imagery:** Aspect ratios should be intentional (e.g., 4:5 or 3:2). Images should have a subtle `0.25rem` (DEFAULT) corner radius.
*   **Skill Badges:** Integrated directly into the card. Use `secondary-container` (`#cde6f4`) with `on-secondary-container` (`#3e5560`) text. Shape should be `full` (pill-shaped).

### Buttons
*   **Primary:** Background `primary` (`#546067`), text `on-primary` (`#f0f9ff`). Use `md` (`0.375rem`) roundedness.
*   **Secondary (Ghost):** No background. Text `primary`. Use a "Ghost Border" only on hover.
*   **Tertiary:** Text `primary` with a 1px underline using `primary-fixed-dim`.

### Inputs & Fields
*   **Styling:** Forbid the "box" look. Use a `surface-container-low` background with a bottom-only "Ghost Border."
*   **Error State:** Use `error` (`#9f403d`) for text and `error-container` for a very subtle background tint behind the input.

### Skill Badges (Data Analysis / UI/UX)
*   **Anatomy:** Small `label-sm` text in all-caps.
*   **Digital Atelier Style:** Use `tertiary-container` (`#f6cfc2`) for Data Analysis to provide a warm, human contrast to the slate-heavy UI/UX badges (`secondary-container`).

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins. A project card might be offset from the grid by 1-2 columns to create visual interest.
*   **Do** use `Newsreader` for large, decorative quotes or section numbers.
*   **Do** rely on generous white space (vertical padding of `8rem`+ between sections) to signify premium quality.

### Don't
*   **Don't** use 1px solid lines to separate content blocks. Use `surface-dim` or `surface-container` background shifts instead.
*   **Don't** use pure black `#000000`. Use `on-surface` (`#2c3433`) for all "black" text to maintain the slate-professional tone.
*   **Don't** use standard "drop shadows." If an element needs to pop, use Tonal Layering or a 4% opacity Ambient Shadow.
*   **Don't** crowd the cards. If a card has skill badges, ensure they have at least `1rem` of breathing room from the card edge.