const fs = require("fs");
const path = require("path");
const template = require("lodash/template");
const WebpackUserscript = require("webpack-userscript");

module.exports = {
  entry: {
    "student-hub-notes": "./src/student-hub-notes/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new WebpackUserscript({
      metajs: false,
      headers: ({ chunkName }) =>
        require(path.join(__dirname, "src", chunkName, "meta.js"))
    })
  ]
};
