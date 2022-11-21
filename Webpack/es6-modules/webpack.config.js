var path = require('path');
/*
	entry; 진입점
	output; 결과물
	loader; 웹 자원을 변환할 수 있도록 도와주는 속성
	
*/

module.exports = {
	mode: 'none',
	entry: './js/app.js', 
	output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'main.bundle.js'
	},
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	}
};