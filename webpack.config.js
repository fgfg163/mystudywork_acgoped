var webpack = require('webpack');

module.exports = {
	entry: {
		"index": './public/js_src/index',
	},
	output: {
		path: './public/js',
		filename: "[name].js",
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: "style!css"
			}
		]
	},
	resolve:{
		extensions:['','.js','.json']
	},
 };