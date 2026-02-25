/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50:  '#FFF0F7',
          100: '#FDE4EF',
          200: '#F9B8D0',
          300: '#F5849B',
          400: '#E8607A',
        },
        mauve: {
          300: '#D4A0B0',
          400: '#C4768A',
          500: '#A85C72',
          600: '#8A4A5E',
          700: '#6B3449',
        },
        champagne: {
          100: '#FDF5E4',
          200: '#F5E6C8',
          300: '#E8D09A',
        },
        pearl: {
          50:  '#FDFAF8',
          100: '#F8F4F0',
          200: '#EDE8E3',
          300: '#DDD5CE',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'sparkle-a':    'sparkle 2.0s ease-in-out infinite',
        'sparkle-b':    'sparkle 2.0s ease-in-out 0.35s infinite',
        'sparkle-c':    'sparkle 2.0s ease-in-out 0.70s infinite',
        'sparkle-d':    'sparkle 2.0s ease-in-out 1.05s infinite',
        'sparkle-e':    'sparkle 2.0s ease-in-out 1.40s infinite',
        'shimmer':      'shimmer 2.5s linear infinite',
        'fade-up':      'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-up-slow': 'fadeUp 1s cubic-bezier(0.22,1,0.36,1) 0.15s forwards',
        'reveal':       'reveal 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'pulse-soft':   'pulseSoft 2.4s ease-in-out infinite',
      },
      keyframes: {
        sparkle: {
          '0%, 100%': { opacity: '1',   transform: 'scale(1) rotate(0deg)' },
          '50%':       { opacity: '0.2', transform: 'scale(0.55) rotate(15deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-300% 0' },
          '100%': { backgroundPosition: '300% 0' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%':   { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%':       { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
