const tailwindcss = require("tailwindcss");
module.exports = {
  theme: {},
  variants: {},
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")]
};
