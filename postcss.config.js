const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

module.exports = {
  Plugins: [tailwidncss("./tailwind.js"), require("autoprefixer")],
};
