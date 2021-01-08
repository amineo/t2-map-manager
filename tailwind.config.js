const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const forms = require('@tailwindcss/forms');
const typography = require('@tailwindcss/typography');
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.tsx", "./src/**/*.jsx"],
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
