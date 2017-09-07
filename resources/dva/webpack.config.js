const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        server: ["babel-polyfill", './lib/server.js'],
        app: ["babel-polyfill", './lib/client.js'],
    },
    output: {
        path: __dirname + "/../../public/dva",
        filename: '[name].js'
    },
    devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : undefined,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // name: '[path][name][hash].[ext]',
                            name: '[path][name].[ext]',
                            publicPath: '/dva/'
                        }
                    }
                ]
            },
            {
                test: /\.(css)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'postcss-loader'],
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[local]_[hash:base64:5]',
                                minimize: true
                            },
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                    fallback: 'style-loader',
                }),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        // new webpack.HotModuleReplacementPlugin() // 启用 HMR
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['polyfills', 'vendor'].reverse()
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: process.env.NODE_ENV !== 'production',
        //     // beautify: false,
        //     // mangle: {
        //     //     screw_ie8: true,
        //     //     keep_fnames: true
        //     // },
        //     // compress: {
        //     //     screw_ie8: true
        //     // },
        //     // comments: false
        // })
    ]
}
;