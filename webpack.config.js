
var webpack = require('webpack'),
		autoprefixer = require('autoprefixer'),
		precss = require('precss');

module.exports = {
	entry: './assets/js/main.js',
	output:{
		path: __dirname,
		filename: 'bundle.js'
	},
	module:{
		loaders:[
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			}
		]
	},
	postcss: function() {
		return [precss, autoprefixer];
	},
	resolve: {
		extensions: ['','.js']
	}
}
