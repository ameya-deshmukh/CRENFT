/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}",
"./src/**/*"

],
  theme: {
    extend: {
      colors:{
        primary:'#808080'
      }
    },
    fontFamily:{
  sans: ['Montserrat', 'sans-serif']

    }
  },
  plugins: [],
}
