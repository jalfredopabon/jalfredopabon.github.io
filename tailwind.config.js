/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0A192F',
        'brand-offwhite': '#F8FAFC',
        'brand-slate': '#475569',
        'brand-accent': '#2563EB',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        'premium': '8px',
      }
    },
  },
  plugins: [],
}
