/* eslint global-require: off, import/no-extraneous-dependencies: off */

const tailwindcss = require('tailwindcss');
const autoprefixer =  require('autoprefixer');

module.exports = {
  options: {
    postcssOptions: {
      plugins: [tailwindcss, autoprefixer]
    }
  }
};
