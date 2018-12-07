module.exports = {
  entry: {
    app: [
      '!!script-loader!foundation-sites/dist/plugins/foundation.core.js',
      './app.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ]
  },
  output: {
    filename: '[name].[contenthash:10].js'
  }
};
