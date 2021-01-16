const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
module.exports = {
  purge:{
   content: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx", "./src/**/*.js"],
   options: {
    safelist: [ 'bg-pink-100', 'bg-pink-500', 'text-pink-800', 'bg-yellow-100', 'bg-yellow-500', 'text-yellow-800' ]
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "light-blue": colors.lightBlue,
        cyan: colors.cyan,
        rose: colors.rose,
      },
    },
  },
  variants: {},
  plugins: [forms, typography],
};
