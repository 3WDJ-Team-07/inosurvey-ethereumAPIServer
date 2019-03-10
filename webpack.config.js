const path = require("path");
const slsw = require("serverless-webpack");
const webpack = require("webpack");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  resolve: {
    modules: [path.resolve("./src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  output: {
    libraryTarget: "commonjs",
    path: path.join(__dirname, ".webpack"),
    filename: "[name].js"
  }
};
