/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg_theme: "#2d3748",
      },
      transitionProperty: {
        hide_nav: "all ease-in-out",
      },
    },
  },
  plugins: [],
};
