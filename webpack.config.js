const Webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const Path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: Path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.sass$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: {
          name: "./dist/fonts/[name].[ext]"
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new Webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      server: { baseDir: ["dist"] }
    })
  ]
};
