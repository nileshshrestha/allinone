const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'ReactReduxSassStarterkit',
  inject: false,
  template: require('html-webpack-template'),
  bodyHtmlSnippet :'<main class="main" id="app"></main>'
});

module.exports = {
  entry: ['./src/index.js','./src/sass/main.scss'],
  output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['*','.js','.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
              presets: ['@babel/react', '@babel/env']
          }
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};
