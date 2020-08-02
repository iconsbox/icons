const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin").default;

// const CopyWebpackPlugin = require('copy-webpack-plugin');
const appSrc = path.join(__dirname, "app");
const exportSrc = path.join(__dirname, "docs");

// Is the current build a development build
const IS_DEV = process.env.NODE_ENV === "dev";

module.exports = {
  devtool: "source-map",
  output: {
    path: exportSrc,
    filename: "[name][hash].js",
    chunkFilename: "[name][hash].js"
  },
  entry: appSrc,

  plugins: [
    new webpack.DefinePlugin({
      IS_DEV
    }),

    new MiniCssExtractPlugin({
      filename: "[name][hash].css",
      chunkFilename: "[id][hash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.join(appSrc, "index.html"),
      title: "IconBox"
    }),

    new HTMLInlineCSSWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: path.join(__dirname, "./app/resources/"), to: "./static/" },
      { from: path.join(__dirname, "./CNAME"), to: "./" },
    ]),

    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        exclude: /(node_modules|addflow)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              // compact: true,
              presets: [
                [
                  "@babel/env",
                  {
                    targets: {
                      edge: "17",
                      firefox: "40",
                      chrome: "40",
                      safari: "11.1"
                    },
                    useBuiltIns: "usage"
                  }
                ]
              ]
            }
          }
        ]
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: IS_DEV
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: IS_DEV,
              includePaths: [appSrc]
            }
          }
        ]
      },

      // IMAGES
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  }
};
