/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'light': 'var(--bg-light)',
        'dark': 'var(--bg-dark)',
      }
    },
  },
  plugins: [],
}