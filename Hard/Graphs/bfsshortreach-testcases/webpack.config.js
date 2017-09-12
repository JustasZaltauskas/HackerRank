var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/bfs.js",
  output: {
    path: __dirname,
    filename: "scripts.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurenceOrderPlugin()
  ],
};