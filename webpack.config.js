const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = "development";
let target = "web"

if (process.env.NODE_ENV === "production") {
    mode = "production";
    target = "browserslist"
}

module.exports = {
    mode: mode,
    target: target,
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        port: 8001,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",

                }
            },
            {
                test: /\.(scss)$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}