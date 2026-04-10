# Design System Specification: The Ethereal Professional

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Atelier."** 

This system rejects the rigidity of traditional corporate dashboards in favor of an editorial, high-end experience that feels curated rather than manufactured. We achieve this through "Atmospheric Depth"—a technique where the UI isn't a flat plane, but a series of translucent, luminous layers floating over a vibrant, shifting environment. 

By leveraging intentional asymmetry, oversized serif typography for personal branding, and a "Glassmorphism" core, we move away from "template" layouts. The goal is a professional environment that feels dynamic and alive, balancing the authority of Navy typography with the energy of Electric Blue and Emerald mesh gradients.

---

## 2. Colors & Surface Logic
The palette is rooted in a "Pearl" base, enriched by a sophisticated interplay of deep professional tones and vibrant digital accents.

### Surface Hierarchy & The "No-Line" Rule
To maintain a premium feel, **1px solid borders for sectioning are strictly prohibited.** Boundaries must be defined through:
*   **Tonal Transitions:** Moving from `surface` (#f5f7f9) to `surface-container-low` (#eef1f3).
*   **The Layering Principle:** Treat the UI as physical sheets of glass. Use `surface-container-lowest` (#ffffff) for primary cards to create a natural "lift" against the pearl background.

### The "Glass & Gradient" Rule
Floating elements (modals, navigation bars, featured cards) should utilize a **Glassmorphism** effect:
*   **Background:** `surface-container-lowest` at 60-80% opacity.
*   **Blur:** 20px to 40px backdrop-blur.
*   **Luminous Border:** A "Ghost Border" using `outline-variant` at 15% opacity to catch the light.

### Signature Textures
The background is never static. Use large, soft mesh gradients transitioning between `secondary` (#0050d4) and `tertiary` (#006947) at low opacities (5-10%) to create a "living" pearl substrate.

---

## 3. Typography
This system uses a high-contrast typographic pairing to signal both heritage and modern efficiency.

*   **The Signature (Display):** *Playfair Display (Noto Serif)* is reserved for high-impact branding, specifically the name 'Alfredo Pabón' and major section headers. It conveys editorial authority.
*   **The Engine (UI):** *Inter* handles all functional data. It is chosen for its neutral, highly legible character, allowing the serif accents to shine without cluttering the interface.

**Key Scales:**
*   **Display-LG (3.5rem):** Playfair Display. Use for hero sections. Tighten letter-spacing (-2%) for a premium feel.
*   **Headline-MD (1.75rem):** Playfair Display. Use for section titles.
*   **Body-MD (0.875rem):** Inter. Use for general UI text. Set to `on-surface` (#2c2f31).
*   **Label-MD (0.75rem):** Inter Bold/Uppercase. Use for Emerald/Electric Blue tags.

---

## 4. Elevation & Depth
Depth is the soul of this system. We avoid the "muddy" shadows of standard UI.

### Ambient Shadows
When an object must float, use an **Ambient Shadow**:
*   **Color:** A tinted version of `on-surface` (e.g., #2c2f31 at 6% alpha).
*   **Spread:** Large blur (30px - 60px), 0px spread, and a slight Y-offset (8px - 12px). This mimics a soft studio light rather than a computer-generated drop shadow.

### Tonal Layering
Instead of shadows for every card, use the surface tiers:
1.  **Level 0 (Background):** `surface` (#f5f7f9) with mesh gradients.
2.  **Level 1 (Section):** `surface-container-low` (#eef1f3) - subtly recessed areas.
3.  **Level 2 (Content Card):** `surface-container-lowest` (#ffffff) - creates a clean, bright focal point.

---

## 5. Components

### Buttons
*   **Primary:** A gradient fill from `secondary` (#0050d4) to `secondary-dim` (#0046bb). Radius: `md` (0.75rem). Use a soft `secondary` tinted shadow.
*   **Secondary (Glass):** `surface-container-lowest` at 40% opacity with a 1px `outline-variant` (20% opacity) border. 
*   **Tertiary:** No background. `secondary` text with an underline that appears on hover.

### Input Fields
*   **Styling:** Forgo the traditional box. Use a `surface-container-low` fill with a bottom-only `outline` highlight. When focused, the background shifts to `surface-container-lowest` with a subtle glow.

### Chips & Tags
*   **Accent Tags:** Use `tertiary-container` (#69f6b8) with `on-tertiary-fixed` (#00452d) text for "Success" or "Active" states. Use `primary-container` for neutral categories.
*   **Shape:** Always `full` (pill-shaped) to contrast against the architectural lines of the cards.

### Cards (The Hero Component)
*   **Rule:** Forbid divider lines. Use `body-sm` text in `on-surface-variant` and increased vertical whitespace (1.5rem+) to separate metadata from primary content.
*   **Border:** A "Luminous Border"—a 1px stroke using a linear gradient of `outline-variant` to `transparent` to simulate light hitting an edge.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a structural element. If a section feels crowded, increase padding rather than adding a line.
*   **DO** allow mesh gradients to bleed behind glass cards to create a sense of immersion.
*   **DO** use asymmetrical layouts (e.g., a left-aligned serif headline with right-aligned sans-serif body text) to break the "Bootstrap" feel.

### Don't
*   **DON'T** use pure black (#000000). Use `on-background` (#2c2f31) for maximum readability and a premium "Navy" feel.
*   **DON'T** use 100% opaque borders. Always drop the opacity of `outline` tokens to 10-20%.
*   **DON'T** stack more than three layers of glass; it degrades performance and clarity. Focus on one primary "Glass" floating layer.

---

## 7. Interaction Patterns
*   **The Lift:** On hover, cards should transition from `surface-container-lowest` to a slightly more opaque state, with the Ambient Shadow increasing in blur radius by 20%.
*   **The Glow:** Buttons and interactive accents (Electric Blue) should have a soft outer glow (`box-shadow`) in their respective color when active, suggesting a luminous energy source within the UI.