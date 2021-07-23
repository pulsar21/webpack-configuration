const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

let mode = "development";
let target = "web"

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist"
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src'),
    output: {
        assetModuleFilename: "images/[hash][ext][query]",
        filename: "scripts/[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: mode,
    target: target,
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        port: 8001,
        open: true,
        hot: true
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                type: "asset",
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ""
                        }
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "index.html"
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ]
}