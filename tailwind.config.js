/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Manrope"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Bleu marine principal + dégradé
        navy: {
          50:  '#eef4fb',
          100: '#d6e4f4',
          200: '#a8c3e6',
          300: '#7ba2d7',
          400: '#4d80c7',
          500: '#2563b2',     // primary
          600: '#1e4f93',
          700: '#173d75',
          800: '#102a56',
          900: '#0a1c3e',
          950: '#06112a',
        },
        sky: {
          50:  '#f0f7ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#60a5fa',
          500: '#3b82f6',
        },
        ink: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          500: '#64748b',
          400: '#94a3b8',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50:  '#f8fafc',
        },
        accent: {
          DEFAULT: '#2563b2',
          flame:   '#f97316', // pour la flamme (orange chaleureux qui reste lisible sur bleu/blanc)
        },
      },
      animation: {
        'flame-flicker': 'flicker 1.6s ease-in-out infinite alternate',
        'fade-up': 'fadeUp .6s ease-out both',
      },
      keyframes: {
        flicker: {
          '0%':   { transform: 'scale(1) rotate(-1deg)', filter: 'brightness(1)' },
          '100%': { transform: 'scale(1.06) rotate(2deg)', filter: 'brightness(1.15)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: [],
};
