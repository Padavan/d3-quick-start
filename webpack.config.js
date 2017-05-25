const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    entry: {
      app: './app/index.js',
    },
    output: {
       path: path.resolve('dist'),
       filename: '[name].bundle.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: 'babel-loader',
          exclude: '/node_modules/'
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new FaviconsWebpackPlugin({
        logo: './app/marisa.png',
        prefix: 'icons-[hash]/',
        emitStats: true,
        persisentCache: true,
        background: '#000',
        inject: true
      }),
      new HtmlWebpackPlugin({ template: './app/index.html', inject: 'body' }),
    ],
};
