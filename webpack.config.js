const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: "./index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'file-loader'
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules)/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {loader: 'css-loader',  options: {sourceMap: true}},
                        {loader: 'autoprefixer-loader'},
                        {loader: 'sass-loader', options: { sourceMap: true}}
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(__dirname + '/dist/assets/index.css')
    ]
}
