const path = require('path');

module.exports = {
  entry: {
    app: [
      '!!script-loader!foundation-sites/dist/plugins/foundation.core.js',
      './app.js',
    ],
    app2: './app2.js'
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
