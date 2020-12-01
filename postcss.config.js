const autoprefixer = require("autoprefixer");
// const cssnano = require("cssnano");

// отключено, чтобы не было минификации

module.exports = {
  plugins: [
    autoprefixer,
    // cssnano({
    //   preset: "default"
    // }) // set default minification settings
  ]
};
