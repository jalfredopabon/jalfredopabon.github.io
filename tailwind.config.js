/** @type {import('tailwindcss').Config} */
// Los colores leen las variables RGB de src/css/tokens.css (fuente de verdad: DESIGN.md)
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        subtle: token('subtle'),
        ink: {
          DEFAULT: token('ink'),
          strong: token('ink-strong'),
          muted: token('ink-muted'),
          subtle: token('ink-subtle'),
          faint: token('ink-faint'),
        },
        line: {
          DEFAULT: token('line'),
          strong: token('line-strong'),
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
