import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FAF8F4',
        'soft-sand': '#F0EBE0',
        'honey': '#E5B67C',
        'coral-pop': '#F38AA6',
        'deep-navy': '#1C2B59',
        'soft-sage': '#45A145',
        'lavender-mist': '#3E63A6',
        'cloud': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['"DM Sans"', 'sans-serif'],
        'accent': ['"Fraunces"', 'serif'],
        'mono': ['"DM Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '1.5rem',
        'section': '2rem',
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(28, 43, 89, 0.06)',
      }
    },
  },
  plugins: [
    typography,
  ],
}
