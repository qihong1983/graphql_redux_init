let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CleanWebpackPlugin = require('clean-webpack-plugin');
let AssetsPlugin = require('assets-webpack-plugin');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require("path");

var rootdir = __dirname;
// console.log(path.resolve(__dirname, './common/libs/jquery/jquery-1.11.1.min.js'));
let config = {
    entry: {
        // build: "./src/app.js",
        app: [
            'babel-polyfill',
            './src/app.js'
        ],
        vendor: ['react', 'prop-types', 'redux', 'react-router-redux', 'redux-thunk', 'react-router', 'antd', 'mockjs', 'echarts', 'js-export-excel-react'] //提取react模块作为公共的js文件
    },
    output: {
        filename: '[chunkhash:8].[name].js', //注意这里，用[name]可以自动生成路由名称对应的js文件
        path: path.join(__dirname, 'build'),
        publicPath: '/',
        chunkFilename: '[chunkhash:8].[name].js' //注意这里，用[name]可以自动生成路由名称对应的js文件
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
            path.resolve('./build'),
            path.resolve('./node_modules')
        ]
    },
    watch: false,
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                exclude: "./node_modules/"
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            /*{
                       test: /\.module\.less$/,
                       loader: ExtractTextPlugin.extract(
                           'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
                           'postcss!' +
                           `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
                       ),
                   },*/
            {
                test: /\.js?$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],

                // exclude: "./node_modules/",
                include: [path.resolve(__dirname, "src"), path.resolve('node_modules/js-export-excel-react/src')]
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192' //  <= 8kb的图片base64内联
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10&minetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10&minetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10&minetype=image/svg+xml'
            }
        ]
    },
    devServer: {
        contentBase: "./build", //以public为根目录提供文件
        colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8089
    },
    resolve: {
        alias: {
            // 'jquery': path.resolve(rootdir, './src/common/libs/jquery/jquery-1.11.1.min.js')
        }
    },
    plugins: [
        new CleanWebpackPlugin('build', {
            root: "./",
            verbose: false
        }),
        new webpack.ProvidePlugin({}),
        // new ExtractTextPlugin("styles.css.[contenthash:8]"),

        new ExtractTextPlugin("[contenthash:8].styles.css"),
        // new CopyWebpackPlugin([{
        //     from: __dirname + '/src'
        // }]),
        new htmlWebpackPlugin({
            title: "思源系统",
            filename: "index.html",
            template: "templates/demo.html",
            hash: true, // true | false。如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
            inject: false,
            chunks: ["app"]
        }),
        new CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[chunkhash:8].vendor.js'
        }),
        new AssetsPlugin({
            filename: '/build/webpack.assets.js', //自己的build路径
            processOutput: function(assets) {
                return 'window.WEBPACK_ASSETS=' + JSON.stringify(assets);
            }
        })
    ]
};

// let isWebCi = process.env.IS_WEB_CI.trim();
// if (isWebCi === "true") {
//     config.output.publicPath = "./";
// }

module.exports = config;