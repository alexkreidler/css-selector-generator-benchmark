const path = require("path");

module.exports = {
  mode: "production",
  entry: "./node_modules/@medv/finder/finder.js",
  output: {
    path: path.resolve(__dirname, "../temp/finder/"),
    filename: "index.js",
    library: "finder",
    libraryTarget: "var",
  },
  // context: path.resolve(__dirname, "../node_modules/@medv/finder/")
  // resolve: {
  //   modules: [path.resolve(__dirname, "../node_modules/@medv/finder/")],
  //   // alias: {
  //   //   "finder": path.resolve(__dirname, '../node_modules/@medv/finder/')
  //   // }
  // },
};
