const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ETP = require('extract-text-webpack-plugin');

const port = process.env.port || 3000

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ETP.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),

        new ETP({
            filename: 'app.css'
        })
    ],

    devServer: {
        host: 'localhost',
        port: port
    },

    devtool: 'inline-source-map',
    mode: 'development'
}
