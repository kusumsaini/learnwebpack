//const path = require('path');
// const webpack = require('webpack')
const config = {
	// entry: {
	// 	home: ['./src/index.js','./src/home.js'],
	//  page: ['./src/page.js'],
	// },
	// filename: '[name].main.js',
	entry:['./src/index.js','./src/home.js'],
	output: {
		filename: 'main.js',
		path: __dirname +'/dist'//path.resolve(__dirname, 'dist')
	}
	,
	target: 'web',
	module: {
		loaders: [
	    {
	      loader: "babel-loader",

	      // Skip any files outside of your project's `src` directory
	      include: [
	        __dirname +'/src'//path.resolve(__dirname, "src"),
	      ],

	      // Only run `.js` and `.jsx` files through Babel
	      test: /\.jsx?$/,

	      // Options to configure babel with
	      query: {
	        plugins: ['transform-runtime'],
	        presets: ['es2015', 'es2016', 'react'],
	      }
	    },
	  ]
        // loaders: [
        //     { test: /\.js$/, loader: 'babel-loader' }, //, exclude: /node_modules/
        // ]
    }
    ,
	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({
	// 	    compress: {
	// 	      warnings: false,
	// 	      drop_console: false,
	// 	    }
	//   })
	// ],
	// node: {
	//    fs: "empty",
	//    tls: "empty",
	//    net: "empty",
	//    child_process :"empty"
	// }
	// ,
	target: 'node'
};

module.exports = config;