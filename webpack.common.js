const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'ReactReduxSassStarterkit',
  inject: false,
  template: require('html-webpack-template'),
  bodyHtmlSnippet :'<main class="main" id="app"></main>'
});

var apiHost;

var setupAPI = function() {
  switch(process.env.NODE_ENV) {
    case 'staging':
      apiHost="staging";
      break;
    case 'production':
      apiHost="production";
      break;
    default:
      apiHost="default";
      break;
  }
}

setupAPI();
console.log(apiHost);

module.exports = {
  entry: ['./src/index.js','./src/sass/main.scss'],
  output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new webpack.DefinePlugin({
        __API__: JSON.stringify(apiHost),
        HOST: JSON.stringify('test')
      }),
  ],
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
  plugins: [htmlPlugin,
  new webpack.DefinePlugin({
    __API__: JSON.stringify(apiHost),
    HOST: JSON.stringify('test')
  })
  ]
};
