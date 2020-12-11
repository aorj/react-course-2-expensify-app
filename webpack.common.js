const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [ new MiniCSSExtractPlugin() ],
  entry: './src/app.js', //'./src/playground/hoc.js'
  output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        MiniCSSExtractPlugin.loader, 
        'css-loader',
        'sass-loader'
      ]
    }]
  },
};