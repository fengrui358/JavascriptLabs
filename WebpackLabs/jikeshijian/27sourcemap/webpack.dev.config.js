'use strict';

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const glob = require('glob')

const setMPA = () => {
    const entry = {};

    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

    Object.keys(entryFiles).map((index) => {
        const entryFile = entryFiles[index];
        // entryFiles [
        //     '/Users/free/Desktop/workspace/JavascriptLabs/WebpackLabs/jikeshijian/26multientry/src/index/index.js',
        //     '/Users/free/Desktop/workspace/JavascriptLabs/WebpackLabs/jikeshijian/26multientry/src/search/index.js'
        //   ]
        const pageName = entryFile.match(/src\/(.*)\/index\.js/)[1];
        
        entry[pageName] = entryFile;
    });

    return {
        entry
    }
}

const {entry} = setMPA();

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(jpg|png|gif|jpeg)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    }
}