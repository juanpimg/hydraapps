/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#07090e',
          900: '#0d1117',
          850: '#131822',
          800: '#1b2230',
          750: '#263043',
          700: '#334155',
        },
      },
    },
  },
  plugins: [],
};
