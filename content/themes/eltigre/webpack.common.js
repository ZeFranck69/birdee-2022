const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: {
		'app': ['./src/js/App.js', './src/scss/global.scss'],
		'services/support': ['./inc/services/support/js/index.js', './inc/services/support/style/index.scss'],
		'services/acf': './inc/services/acf/js/index.js',
	},
	resolve: {
		preferRelative: true,
		preferAbsolute: true,
		roots: [path.resolve(__dirname, 'src/js/')],
		alias: {
			'@contact': path.resolve(__dirname, 'inc/services/contact/js')
		}
	},
	output: {

		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/plugin-proposal-class-properties'],
						},
					},
				],
			},
			{
				test: /\.(svg)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'icons/[hash][ext][query]',
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[hash][ext][query]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash][ext][query]',
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: ['postcss-preset-env', autoprefixer()],
							}
						}
					},
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new WebpackBar(),
		new ESLintPlugin({
			fix: true,
			exclude: './node_modules/',
		}),
	],
};
