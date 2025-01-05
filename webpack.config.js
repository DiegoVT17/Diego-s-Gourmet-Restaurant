const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "dist",
    path: path.resolve(__dirname, "main.js"),
  },
};
