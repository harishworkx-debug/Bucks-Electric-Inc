/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF3F9',
          100: '#D5E0EE',
          200: '#A9BEDB',
          300: '#7B9BC6',
          400: '#4D74A8',
          500: '#2D5387',
          600: '#1E3F6E',
          700: '#15305A',
          800: '#0E2446',
          900: '#0A1A33',
        },
        volt: {
          50: '#FFFBEB',
          100: '#FFF4C7',
          200: '#FFE98A',
          300: '#FFDD52',
          400: '#FFD12E',
          500: '#FFC629',
          600: '#E5A800',
          700: '#B88300',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 700ms cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
};
