/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardBg: '#f8fafc',
        alertError: '#f87171',
        alertSuccess: '#34d399',
        omni: {
          DEFAULT: '#2dd4bf',
          bright: '#5eead4',
          dim: '#14b8a6',
          dark: '#0f766e',
          glow: 'rgba(45,212,191,0.45)',
        },
        omniSecondary: {
          DEFAULT: '#a78bfa',
          bright: '#c4b5fd',
        },
        omniWarm: {
          DEFAULT: '#fb923c',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['Rajdhani', 'Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 8px rgba(45,212,191,0.5)',
        'glow': '0 0 20px rgba(45,212,191,0.4), 0 0 4px rgba(45,212,191,0.55)',
        'glow-lg': '0 0 40px rgba(45,212,191,0.3), 0 0 12px rgba(45,212,191,0.45)',
        'hud': 'inset 0 0 20px rgba(45,212,191,0.08), 0 0 1px rgba(45,212,191,0.55)',
      },
      keyframes: {
        scanline: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100%)' } },
        borderPulse: { '0%, 100%': { opacity: '0.5' }, '50%': { opacity: '1' } },
        flicker: { '0%, 100%': { opacity: '1' }, '92%': { opacity: '1' }, '93%': { opacity: '0.6' }, '94%': { opacity: '1' } },
      },
      animation: {
        scanline: 'scanline 3s linear infinite',
        borderPulse: 'borderPulse 2.5s ease-in-out infinite',
        flicker: 'flicker 6s linear infinite',
      },
    }
  },
  darkMode: ['class'],
  plugins: [require('daisyui'), require("tailwindcss-animate")],
  daisyui: { themes: ["light"] },
};
