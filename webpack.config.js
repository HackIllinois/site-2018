'use strict';

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const copy = require('copy-webpack-plugin');
const versioner = require('webpack-git-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'source');

const config = {

    entry: {
        app: [APP_DIR + '/index.jsx'],
        vendor: ['react', 'react-dom', 'react-router']
    },

    output: {
        path: BUILD_DIR,
        filename: 'bundle.[githash].js'
    },

    context: path.join(__dirname, 'source'),

	module: {
        loaders : [

            {
                test: /\.jsx?/,
                exclude : [/node_modules/, /bower_components/],
                include : APP_DIR,
                loader : 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },

            {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract('css!sass')
                loaders: ['style-loader', 'css-loader?url=false', 'sass-loader', 'postcss-loader']
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?url=false', 'postcss-loader']
            }

        ]
    },

    plugins: [
        new copy([
            {from: APP_DIR + '/html/', to: BUILD_DIR},
            {from: APP_DIR + '/assets/', to: BUILD_DIR + '/assets/'}
        ], {
            copyUnmodified: false,
            debug: 'debug'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
            filename: 'vendor.bundle.js'
        }),

				new versioner(),
        new HtmlWebpackPlugin({
					template: APP_DIR + '/html/index.html',
				})
    ]
};

module.exports = config;
