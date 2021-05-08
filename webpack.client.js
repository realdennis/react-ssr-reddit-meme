const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./client.js"),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "client.js",
  },
};
