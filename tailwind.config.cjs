/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '15': '3.75rem'
      },
      height: {
        '15': '3.75rem'
      }
    },
  },
  plugins: [],
}
