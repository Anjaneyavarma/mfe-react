const HtmlWebpackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    devServer: {
        port: 3000
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
            name: 'COCKPIT',
            filename: "remoteEntry.js",
            remotes:{
                MFE1: 'MFE1@http://localhost:8081/remoteEntry.js',
                MFE2: 'MFE2@http://localhost:8080/remoteEntry.js'
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],

}