/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: "#0067ff",
        yellowColor: "#feb60d",
        purpleColor: "#9771ff",
        irisBlueColor: "#01b5c5",
        headingColor: "#181a1e",
        textColor: "#4e545f",
      },

      boxShadow: {
        panelShadow: "rgb(17, 12, 46, 0.15) 0px 48px 100px 0px;"
      },
    },
  },
  plugins: [],
}


// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }