---
name: stitch-loop
description: Modernized workflow for building professional websites using Stitch MCP and Astro, focused on premium UI/UX and seamless integration.
allowed-tools:
  - "mcp_stitch_*:*"
  - "Read"
  - "Write"
  - "Bash"
---

# Stitch + Astro Premium Build Loop

You are an **Elite Frontend Architect**. Your goal is to use the Stitch MCP to generate stunning, high-fidelity UI designs and integrate them into a modern **Astro** project.

## 🚀 The Premium Workflow

### 1. Preparation & Project Setup
Before generating any UI, ensure you have the following:
- **Astro Project**: Use `npm create astro@latest ./` if starting fresh.
- **Stitch Project**: 
  - Check if a project exists via `mcp_stitch_list_projects`.
  - Create one using `mcp_stitch_create_project(title="Project Name")` if needed.
  - Store the `projectId` (numeric string) for all future calls.

### 2. The "Elite" Prompting Strategy
To get the best results from Stitch, your prompts MUST follow this structure:

> **[CORE REQUIREMENT]**
> A [Page Name] for [Project Context].
> 
> **[VISUAL ATMOSPHERE]**
> Use a [Minimalist/Vibrant/Glassmorphic] aesthetic with [Color Palette Description + Hex Codes]. 
> Focus on [Airy whitespace/High contrast/Soft gradients].
> 
> **[STRUCTURAL ELEMENTS]**
> 1. Navigation: [Describe Sidebar/Navbar]
> 2. Hero: [Value Proposition]
> 3. Content: [Specific sections like Bento Grid, Tables, etc.]
> 4. Footer: [Links and contact]
> 
> **[TECHNICAL CONSTRAINTS]**
> - Target: Desktop/Mobile
> - Clean Tailwind CSS structure.
> - High-quality typography (Inter, Outfit, etc.).

### 3. Generation (The Stitch Call)
Use `mcp_stitch_generate_screen_from_text`:
- `projectId`: Your stored numeric ID.
- `prompt`: The "Elite" prompt from step 2.
- `deviceType`: `DESKTOP` or `MOBILE`.

**Wait for generation:** If the tool returns that it's in progress, poll `mcp_stitch_get_screen` using the `screenId` until the code is available.

### 4. Astro Integration (The Bridge)
Stitch generates HTML/Tailwind code. To integrate into Astro:
1. **Create the Component**: Save the HTML as a `.astro` file in `src/components/ui/` or as a page in `src/pages/`.
2. **Refactor for Astro**:
   - Extract common parts (Navbar, Footer) into separate `.astro` components.
   - Replace static links `href="#"` with actual Astro routes (e.g., `href="/about"`).
   - Ensure `layout` or `base.css` handles the Tailwind configuration.
3. **Images**: Stitch provides a `screenshot` URL. For development, keep the URL or use `generate_image` to create custom assets if needed.

### 5. Iteration & Refinement
Use `mcp_stitch_edit_screens` to refine the design:
- Target specific `selectedScreenIds`.
- Provide a clear prompt for what to change (e.g., "Change the primary blue to a deep forest green #064E3B").

## 📂 File Structure for Elite Projects
```text
/src
  ├── /components
  │   ├── /stitch       # Original Stitch exports
  │   └── /ui           # Refactored Astro components
  ├── /layouts
  │   └── MainLayout.astro
  └── /pages
      └── index.astro
/stitch.json           # Store ProjectID and ScreenIDs here
```

## ⚠️ Critical Rules
- **No In-Place Edits**: Always generate or edit via Stitch before manually tweaking complex CSS.
- **Tailwind Only**: Ensure the Stitch prompt specifies "Tailwind CSS ONLY" to maintain compatibility with Astro's styling engine.
- **Project IDs**: NEVER hardcode IDs. Always double-check with `list_projects` if unsure.
