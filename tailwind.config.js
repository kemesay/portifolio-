/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0F',
        surface: '#111118',
        panel: '#16161F',
        border: '#1E1E2E',
        accent: '#00FFB2',
        amber: '#FFB800',
        muted: '#4A4A6A',
        soft: '#8888AA',
        light: '#E8E8F0',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(0,255,178,0.3)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 40px rgba(0,255,178,0.6)' },
        }
      }
    },
  },
  plugins: [],
}
