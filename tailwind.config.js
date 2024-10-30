module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}