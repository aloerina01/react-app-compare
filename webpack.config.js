const path = require('path');

const __MODE__ = process.env.NODE_ENV; 
const __DEV__ = __MODE__ === 'development';
const __TARGET__ = process.env.TARGET || 'mobx'

module.exports = {
  mode: __MODE__ || 'development',
  entry: `./src/${__TARGET__}/main.tsx`,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}