const path = require('path');

module.exports = {
  entry: {
    app: './app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: ['@babel/plugin-syntax-dynamic-import']
        },
      },
    ]
  },
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].bundle.[contenthash].js',
    hashDigestLength: 10,
  }
};
