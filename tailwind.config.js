/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        // グラフィックレコーディング用の配色
        fashion: {
          1: '#593C47',
          2: '#F2E63D',
          3: '#F2C53D',
          4: '#F25C05',
          5: '#F24405',
        },
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        kaisei: ['Kaisei Decol', 'serif'],
        yomogi: ['Yomogi', 'cursive'],
        zen: ['Zen Kurenaido', 'sans-serif'],
      },
    },
  },
  plugins: [],
};