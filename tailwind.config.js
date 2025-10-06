/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#404a3d",
          50: "#e6e6e6",
          100: "#cfcfcf",
          200: "#a6a6a6",
          300: "#7d7d7d",
          400: "#555555",
          500: "#404a3d",
          600: "#333c31",
          700: "#272d25",
          800: "#1a1f19",
          900: "#0d100c"
        }
      }
    }
  },
  plugins: [],
}