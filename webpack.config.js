const webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devtool: 'source-map',
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
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            }
        ]
    }
}
