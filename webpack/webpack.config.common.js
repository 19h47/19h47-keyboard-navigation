/**
 *
 * @file webpack.config.common.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (http://19h47.fr)
 */

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ESLintPlugin = require('eslint-webpack-plugin');

const path = require('path');

const resolve = require('./webpack.utils');

module.exports = {
	entry: {
		dist: resolve('lib/index.ts'),
		docs: resolve('lib/index.ts'),
	},
	output: {
		library: 'KeyboardNavigation',
		libraryTarget: 'umd',
		filename: '../[name]/main.js',
		path: path.resolve(process.cwd(), 'dist'),
	},
	devServer: {
		port: 3000,
		static: [resolve('/')],
		compress: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		alias: {
			'@': resolve('src'),
			Utils: resolve('src/utils'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [resolve('dist')],
		}),
		new WebpackNotifierPlugin({
			title: 'Webpack',
			excludeWarnings: true,
			alwaysNotify: true,
		}),
		new ESLintPlugin(),
	],
};
