const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({env=[], mode='production'}={env:[], mode:'production'}) => {
  const config = {
    mode,
    devServer: {
      open: false,
      port: 9090
    },
    devtool: 'inline-source-map',
    // entry: './src/index',
    entry: './src/ts-entrypoint',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(t|j)s$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin()
    ]
  }

  return config;
}
