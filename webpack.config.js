const Webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Path = require('path');

require('babel-register');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: Path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        //exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        options: {
          name: './fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpg|jpeg|png|webp|gif)$/,
        //exclude: /(node_modules|bower_components)/,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(pug|jade)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }
      }
    ]
  },
  plugins: [
    new Webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      //favicon: 'favicon.ico',
      template: './src/index.pug'
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['dist']
      }
    })
  ]
};