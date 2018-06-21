const webpack   	 = require('webpack');
const path 	    	 = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	
	mode: 'development',
	
	module: {
		
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'public/js/')],
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{loader: 'style-loader'	},
					{loader: 'css-loader'	},
					{loader: 'sass-loader'	}
				]
			}
		]
	},

	entry: [
		'./public/js/usuarios/index.js',
		'./public/js/produtos/index.js',
		'./public/js/clientes/index.js'
	],

	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'public/dist/js/')
	},

	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			minChunks: 1,
			name: true,

			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				}
			}
		}
	}
};
