import path from 'path';

import webpack from 'webpack';
import ExtractText from 'extract-text-webpack-plugin';

export default {
  entry: {
    main: './source/main.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(
          'style',
          'css?root=.&sourceMap!sass?' +
            JSON.stringify({
              outputStyle: 'expanded',
              precision: 9,
              sourceComments: true,
              sourceMap: true,
            }),
        ),
      },
    ],
  },

  output: {
    filename: '[name].js',
    publicPath: '',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    }),
    new ExtractText('main.css'),
  ],
};
