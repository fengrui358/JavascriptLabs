'use strict';

const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const glob = require('glob')

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
        filename: '[name][chunkhash:8].js',
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader'
            },
            {
                test: /.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                // plugins: () => [
                                //     require('autoprefixer')({
                                //         // 最后两个版本，版本对应用户所对应份额
                                //         browsers: ['last 2 versions', '>1%', 'ios 7']
                                //     })
                                // ]
                                plugins: [
                                    ['autoprefixer']
                                ]
                            }
                        }
                    },
                    'less-loader',
                    { 
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75,
                            remPrecision: 8
                        }
                    }
                ]
            },
            {
                test: /.(jpg|png|gif|jpeg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]_[contenthash:8].css'
        }),
        // 会报错啊会报错
        // new OptimizeCssAssetsWebpackPlugin({
        //     assetNameRegExp: /\.css$/g,
        //     cssProcessor: require('cssnano')
        // }),
        new CleanWebpackPlugin()
    ].concat(htmlWebpackPlugins),
    devtool: 'eval'
}