/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B2545',
            dark: '#071A31',
            light: '#133965',
            hover: '#081D37',
          },
          cyan: {
            DEFAULT: '#00A8E8',
            light: '#38BDF8',
            dark: '#0284C7',
            hover: '#0096D1',
          },
          accent: '#007EA7',
          sky: '#E0F2FE',
          ice: '#F0F9FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(11, 37, 69, 0.06)',
        'card': '0 10px 30px -4px rgba(11, 37, 69, 0.08)',
        'float': '0 20px 40px -6px rgba(11, 37, 69, 0.12)',
      }
    },
  },
  plugins: [],
}
