/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f9f9',
          100: '#dcf0f0',
          200: '#bce0e0',
          300: '#8cc8c8',
          400: '#54a8a8',
          500: '#3a9090',
          600: '#2c7878',
          700: '#266363',
          800: '#235253',
          900: '#214646',
          950: '#0f2828',
        },
        accent: '#F25C05',
      },
      fontFamily: {
        sans: ['var(--font-zen-kurenaido)', 'sans-serif'],
        hand: ['var(--font-yomogi)', 'cursive'],
        title: ['var(--font-kaisei-decol)', 'serif'],
      },
    },
  },
  plugins: [],
};