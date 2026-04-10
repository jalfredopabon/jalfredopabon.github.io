# Design System Specification: The Precision Ledger

## 1. Overview & Creative North Star
**Creative North Star: "The Precision Ledger"**

This design system is engineered for Alfredo Pabón, a Monitoring & Evaluation Specialist whose work is defined by rigor, data integrity, and clarity. To move beyond a generic "minimalist" template, we are adopting an **Editorial Data-Driven** aesthetic. This approach treats white space as a structural element rather than a void, and typography as the primary visual anchor. 

We break the standard grid through **intentional asymmetry**: text-heavy insights are balanced by expansive, high-contrast data visualizations. The experience should feel like a high-end physical ledger—authoritative, permanent, and meticulously organized. We reject "loud" design patterns in favor of tonal depth and rhythmic spacing.

---

## 2. Colors
The palette is a sophisticated range of slates and off-whites, designed to reduce eye strain while maintaining high legibility.

### The "No-Line" Rule
To achieve a premium, seamless feel, designers are **prohibited from using 1px solid borders** to section off major content areas. Structural boundaries must be defined through background color shifts. For example, a "Key Metrics" section might transition from `surface` (#F7F9FB) to `surface-container-low` (#F0F4F7) to signal a change in context without introducing visual clutter.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, high-quality paper stocks. 
*   **Base:** `surface` (#F7F9FB) for the main background.
*   **Layer 1:** `surface-container-lowest` (#FFFFFF) for primary content cards.
*   **Layer 2:** `surface-container-high` (#E1E9EE) for nested elements or sidebars.

### Glass & Texture
To prevent the UI from feeling "flat" or "cheap," use Glassmorphism for floating navigation bars or overlays. Utilize the `surface` color at 80% opacity with a `24px` backdrop blur. For primary CTAs, apply a subtle linear gradient from `primary` (#565E74) to `primary-dim` (#4A5268) to provide a "weighted" feel that flat hex codes cannot replicate.

---

## 3. Typography
The typography system relies on **Inter** to convey a modern, technical, and mature tone. 

*   **Display & Headlines:** Use `display-lg` through `headline-sm`. These must always use `letter-spacing: -0.02em` (tracking-tight) to create a dense, authoritative "newspaper" header feel.
*   **Body:** `body-md` is the workhorse. Ensure a line height of `1.6` to maintain the editorial feel across long-form evaluation reports.
*   **Labels:** Use `label-md` or `label-sm` for metadata. To contrast the tight headers, labels should be uppercase with `0.05em` letter-spacing.

**Identity Through Scale:** Contrast is our primary tool. Pair a `display-md` headline directly with a `body-sm` caption to create a high-fashion, high-data-integrity hierarchy that feels custom-built.

---

## 4. Elevation & Depth
We eschew traditional material shadows in favor of **Tonal Layering**.

*   **The Layering Principle:** Depth is achieved by placing `surface-container-lowest` (pure white) cards onto the `surface` (off-white) background. This creates a "soft lift" that feels architectural.
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a tinted ambient shadow: `box-shadow: 0 20px 40px rgba(42, 52, 57, 0.06)`. The shadow color is derived from `on-surface` to ensure it feels like a natural light obstruction rather than a gray smudge.
*   **The Ghost Border:** When accessibility requires a border, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use semi-transparent layers for elements that sit above the main scroll (e.g., global navigation). This allows the "data" below to bleed through, maintaining the user's context within the "Ledger."

---

## 5. Components

### Cards & Lists
*   **No Dividers:** Forbid the use of horizontal rules (`<hr>`). Use the Spacing Scale (specifically `py-16` or `py-24`) to separate list items. 
*   **Style:** Cards use `border-radius: lg` (8px) and a `surface-container-lowest` fill.

### Buttons
*   **Primary:** `primary` fill with `on-primary` text. Radius: `md` (6px). No pill shapes.
*   **Secondary:** `surface-container-high` fill with `primary` text. 
*   **Interaction:** On hover, shift background to `primary-dim`. Use a `200ms` ease-in-out transition.

### Data Placeholders (The "Hero" Component)
Since no photography is used, data visualizations are the "art."
*   **Empty States/Graphs:** Use `surface-container-highest` for chart backgrounds and `primary` or `tertiary` for data points. 
*   **Layout:** Graphs should often bleed off the edge of their container or the grid, emphasizing the "infinite" nature of data.

### Input Fields
*   **Style:** Minimalist underline or "ghost" box. 
*   **State:** Focus state uses a 1px `primary` border—this is the only exception to the "No-Line" rule to ensure clear user intent.

---

## 6. Do's and Don'ts

### Do
*   **Embrace Macro-Spacing:** Use `py-24` (96px) for major section breaks. Let the content breathe.
*   **Geometric Precision:** Stick strictly to `4px` (sm) or `8px` (lg) border-radii. 
*   **Asymmetric Grids:** Place text in a narrow column (e.g., 4 columns) and data visualizations in a wider column (e.g., 8 columns).

### Don't
*   **No Pill Shapes:** Never use fully rounded corners; it undermines the mature, professional tone of an M&E specialist.
*   **No Person Photography:** Use abstract geometric shapes, data visualizations, or high-end typography to fill visual voids.
*   **No Generic Grays:** Use the provided slate-tinted neutrals (`on-surface-variant`) to maintain a cohesive, "cool" temperature throughout the interface.
*   **No Standard Dividers:** If you feel the urge to draw a line, increase the whitespace instead.