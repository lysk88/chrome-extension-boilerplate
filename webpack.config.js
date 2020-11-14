const webpack = require('webpack'),
    {resolve, join} = require('path'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtensionReloader = require('webpack-extension-reloader');

const mode = process.env.NODE_ENV || 'development';
const options = {
    mode,
    //devtool: 'inline-source-map',
    entry: {
        background: join(__dirname, 'src','background.js'),
        content: join(__dirname, 'src','content.js'),
    },
    output: {
        publicPath: '.',
        path: resolve(__dirname, 'dist/'),
        filename: '[name].js',                
        libraryTarget: 'umd'
    },
    plugins: [
        new ExtensionReloader({
            contentScript: "content",
            background: "background",
        }),
        new CopyWebpackPlugin([
            { 
                from: mode === "development"
                ? "./src/manifest.dev.json"
                : "./src/manifest.prod.json", 
                to: 'manifest.json' 
            }
          ]),
    ]
};

module.exports = options;