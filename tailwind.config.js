/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '3': '1fr 4fr 1fr',

    },
    colors:{
    buttoncolor: "#312e81"
    }
    }
  },
  plugins: [],
}

