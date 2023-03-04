/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'weather-app-bg': "url('./assets/weather-app-bg.jpg')",
      }),
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0.0,
          },
          '100%': {
            opacity: 1.0,
          },
        },
      },
      animation: {
        'fade-in': 'fade-in ease-in 150ms',
      },
    },
  },
  plugins: [],
};
