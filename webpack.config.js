var path = require('path');
var webpack = require('webpack');

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/ThumbUp/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ThumbUp.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: require.resolve('babel-loader'),
                // query: {
                //     presets: ['es2015']
                // }
            },
            {
              test: /\.scss$/,
              use: [
                  "style-loader", // creates style nodes from JS strings
                  "css-loader", // translates CSS into CommonJS
                  "sass-loader" // compiles Sass to CSS, using Node Sass by default
              ]
            }
        ]
    },
    stats: {
        colors: true
    },
    // devtool: 'source-map'
};
