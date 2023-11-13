const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8081/'
    },
    devServer: {
        port: 8081
    },
    modules:{
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'MFE1',
            filename: 'remoteEntry.js',
            exposes:{
                './App': './src/App',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

}