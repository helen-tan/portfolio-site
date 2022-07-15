/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1B1B1B',
        'teal': '#00B7C7',
        'grey': '#F2F2F2'
      }
    },
  },
  plugins: [require('daisyui')],
}
