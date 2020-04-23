const path = require('path');
const config = require('./webpack.config.js');

config.devServer = {
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
		'Access-Control-Allow-Headers':
			'X-Requested-With, content-type, Authorization',
	},
	historyApiFallback: true,
	contentBase: path.join(__dirname, '../build'),
	compress: true,
	port: 8080,
};

config.devtool = 'inline-source-map';

module.exports = config;
