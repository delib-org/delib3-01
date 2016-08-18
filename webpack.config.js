var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool:'inline-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015','stage-0']
      }
    },
    { test: /\.json$/, loader: 'json' },	  {
		test:   /\.css$/,
		loader: "style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]"
	  }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
