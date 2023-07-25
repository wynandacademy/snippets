const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries"); //Used to delete the automaticaly generated js files

const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
      '/base/main': './base/js/app.js',
      '/drip/style': './drip/style.scss',
      '/accordion/style': './accordion/style.scss',
      '/preloader/style': './preloader/style.scss',
      '/particles-hover/style': './particles-hover/style.scss',
      '/packages/style': './packages/style.scss',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './'),
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(svg)$/i,
        use: 'url-loader?limit=1024'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: { outputPath: '/assets/images', publicPath: '../assets/images', useRelativePaths: false}
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        loader: 'file-loader',
        options: { outputPath: '/fonts', publicPath: '../assets/fonts', useRelativePaths: true }
      },
    ],
  },
};