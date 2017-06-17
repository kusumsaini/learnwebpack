const path = require('path');
const webpack = require('webpack')
const config = {
	// entry: {
	// 	home: ['./src/index.js','./src/home.js'],
	//  page: ['./src/page.js'],
	// },
	// filename: '[name].main.js',
	entry:['./src/index.js','./src/home.js'],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
		    compress: {
		      warnings: false,
		      drop_console: false,
		    }
	  })
	]
};

module.exports = config;