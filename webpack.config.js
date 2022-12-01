//webpack.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    main: './src/app.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app-bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
};
