'use strict';

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const glob = require('glob')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const setMPA = () => {
    const entry = {};
    const htmlWebpackPlugins = [];

    const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'));

    Object.keys(entryFiles).map((index) => {
        const entryFile = entryFiles[index];
        // entryFiles [
        //     '/Users/free/Desktop/workspace/JavascriptLabs/WebpackLabs/jikeshijian/26multientry/src/index/index.js',
        //     '/Users/free/Desktop/workspace/JavascriptLabs/WebpackLabs/jikeshijian/26multientry/src/search/index.js'
        //   ]
        const pageName = entryFile.match(/src\/(.*)\/index\.js/)[1];
        
        entry[pageName] = entryFile;
        htmlWebpackPlugins.push(
            new HtmlWebPackPlugin({
                template: path.join(__dirname, `src/${pageName}/index.html`),
                filename: `${pageName}.html`,
                chunks: [pageName],
                inject: true,
                minify: {
                    html5: true,
                    collapseWhitespace: true,
                    preserveLineBreaks: false,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: false,
                }
            }),
        )
    });

    return {
        entry,
        htmlWebpackPlugins
    }
}

const {entry, htmlWebpackPlugins} = setMPA();

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
<<<<<<< HEAD
                use: 'babel-loader'
=======
                use: ['babel-loader', 'eslint-loader']
>>>>>>> cb383e26e7c40baf9bbf5d483177c4ecc530b4a9
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
    ].concat(htmlWebpackPlugins),
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    devtool: 'source-map'
}