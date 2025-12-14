/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        macos: {
          bg: '#1e1e1e',
          menubar: 'rgba(40, 40, 40, 0.85)',
          dock: 'rgba(255, 255, 255, 0.15)',
          window: 'rgba(255, 255, 255, 0.95)',
          windowDark: 'rgba(40, 40, 40, 0.95)',
          accent: '#007AFF',
          red: '#FF5F57',
          yellow: '#FFBD2E',
          green: '#28CA42',
        },
      },
      backdropBlur: {
        'macos': '40px',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
        'window-open': 'windowOpen 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        windowOpen: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'macos': '0 10px 40px rgba(0, 0, 0, 0.3)',
        'macos-lg': '0 20px 60px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
