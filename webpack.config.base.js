const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // absolute path
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', // use babel loader to transform our code before creating output bundle
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'], // preset are browser, react
          plugins: [
            'react-hot-loader/babel', // preserve state on reload
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // css loader, let webpack handle css syntax. style loader will inject css into html at runtime
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
