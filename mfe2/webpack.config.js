const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    output:{
        publicPath: 'http://localhost:8080/'
    },
    devServer: {
        inline: true,
        port: 8080
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
            name: 'MFE2',
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