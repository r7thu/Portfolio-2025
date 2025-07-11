/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        doto: ['Doto', 'sans-serif'],
        outfit: ['var(--font-outfit)'],
        figtree: ['var(--font-figtree)'],
        jetbrains: ['var(--font-jetbrains)'],
      },
    },
  },
  plugins: [],
}
