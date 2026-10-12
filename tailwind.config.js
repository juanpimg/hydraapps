/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Sin toggle in-app: seguimos prefers-color-scheme (dark-mode.md › Best practices).
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Tokens semánticos Apple-like (color.md › Best practices): roles, no valores fijos.
        surface: 'var(--hydra-surface)',
        raised: 'var(--hydra-raised)',
        ink: 'var(--hydra-ink)',
        secondary: 'var(--hydra-secondary)',
        line: 'var(--hydra-line)',
        accent: 'var(--hydra-accent)',
        accentInk: 'var(--hydra-accent-ink)',
      },
      fontFamily: {
        // Display con carácter, cuerpo del sistema para legibilidad (typography.md › Using system fonts).
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', '"SF Pro Display"', 'Inter', 'sans-serif'],
        sans: ['system-ui', '-apple-system', '"SF Pro Text"', 'Inter', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
};
