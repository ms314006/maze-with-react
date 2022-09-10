module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': { top: 5 },
          '25%': { right: 5 },
          '50%': { bottom: 5 },
          '75%': { left: 5 },
        },
      },
      animation: {
        shake: 'shake 0.1s linear',
      },
    },
  },
  plugins: [],
};
