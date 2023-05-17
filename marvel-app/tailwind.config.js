/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'marvel': "url('../../public/marvel.jpeg')",
    },
  },
  plugins: [],
}

