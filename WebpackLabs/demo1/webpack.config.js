// ./webpack.config.js
// import { Configuration, NoEmitOnErrorsPlugin } from "webpack";

// ./webpack.config.js
const path = require("path");

/**
 * @type {Configuration}
 */
const config = {
  mode: 'none',
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "output"),
  },
};

module.exports = config;
