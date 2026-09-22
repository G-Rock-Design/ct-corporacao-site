/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Teal
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        secondary: {
          500: '#3b82f6', // Blue
        },
        accent: {
          500: '#8b5cf6', // Violet
        },
        dark: '#050505',
        light: '#ffffff',
        brand: {
          red: '#ED1C24',
          black: '#0A0A0C', // Made slightly less than pure black for depth
          pure: '#000000',
          graphite: '#292A2D',
          gray: '#A7A9AC',
          white: '#FFFFFF',
          blue: '#75CEE5'
        }
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'spin-slow-reverse': 'spin 15s linear infinite reverse',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-complex': 'floatComplex 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 10s infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'border-flow': 'borderFlow 4s linear infinite',
        'spotlight': 'spotlight 5s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatComplex: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0)' },
          '25%': { transform: 'translate(10px, -15px) rotate(2deg)' },
          '50%': { transform: 'translate(0, -30px) rotate(0)' },
          '75%': { transform: 'translate(-10px, -15px) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(237, 28, 36, 0.4)' },
          '50%': { opacity: '.5', boxShadow: '0 0 40px rgba(237, 28, 36, 0.8)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' }
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        spotlight: {
          '0%': { transform: 'translate(-30%, -30%) scale(1)', opacity: '0.3' },
          '100%': { transform: 'translate(10%, 10%) scale(1.2)', opacity: '0.7' },
        }
      }
    }
  },
  plugins: [],
}
