const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development';
if(process.env.NODE_ENV === 'production') {
	mode = 'production'
}

const plugins = [
	new HtmlWebpackPlugin({
		template: './src/index.html'
	}),
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css'
	}),
	new ReactRefreshWebpackPlugin(),
];

module.exports = {
	mode,
	plugins,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: "bundle.js"
	},
	resolve: {
		extensions: [
			'*', '.js', '.jsx'
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
			},
			{
				test: /\.(html)$/,
				use: ['html-loader']
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: mode === 'production' ? 'asset' : 'asset/resource'
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		hot: true
	}
}