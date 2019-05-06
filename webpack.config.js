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
        include: __dirname,
        exclude: /node_modules\/(?!(koa-bodyparser|koa-logger)\/).*/,
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
