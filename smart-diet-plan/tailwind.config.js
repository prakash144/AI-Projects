/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode support
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Ensure it scans all files for classes
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
