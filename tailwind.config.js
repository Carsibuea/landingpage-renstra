/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["{index.html,script.js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding : '2rem'
      },
      colors: {
        navi: "#000080",
      },
      fontFamily: {
        poppin: "poppins ",
      },
    },
  },
  plugins: [],
};
