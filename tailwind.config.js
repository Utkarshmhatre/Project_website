/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        golden: {
          primary: '#D4AF37',
          secondary: '#C5A028',
          accent: '#FFE5B4',
        },
        dark: {
          primary: '#0A0908',
          secondary: '#1A1815',
          lighter: '#2A2520',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      width: {
        'max-content': 'max-content',
      }
    },
  },
  plugins: [],
};