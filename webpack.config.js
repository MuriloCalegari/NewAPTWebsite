/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlwebpackPlugin = require("html-webpack-plugin");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const codesandbox = require("remark-codesandbox");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, ""),
    publicPath: "/",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "bundle.js",
    publicPath: "./",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.mp3/,
        type: "asset",
      },
      {
        test: /\.(jpg|png|svg|riv)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              publicPath: "/",
            },
          },
        ],
      },
      {
        test: /\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: "@mdx-js/loader",
            /** @type {import('@mdx-js/loader').Options} */
            options: {
              providerImportSource: "@mdx-js/react",
              remarkPlugins: [[codesandbox, { mode: "button" }]],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: "Textbook",
      filename: "index.html",
      template: "./src/index.html",
      inject: true,
      hash: true,
      path: "./",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
  ],
};
