const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_DIRECTORY = path.join(__dirname, '..');
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, 'src');

const config = {
	entry: [path.resolve(__dirname, '../src/index.js')],
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	resolve: {
		modules: [path.resolve('node_modules'), 'node_modules'],
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(SRC_DIRECTORY, 'index.html'),
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(SRC_DIRECTORY, 'assets'),
				to: path.join(ROOT_DIRECTORY, 'build'),
			},
		]),
		new MiniCssExtractPlugin({
			filename: './src/sass/styles.scss',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					{ loader: 'sass-loader' },
				],
			},
			{
				test: /\.(png|svg|jpg|gif|pdf)$/,
				use: ['file-loader'],
			},
		],
	},
};

module.exports = config;
