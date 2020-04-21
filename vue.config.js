const webpack = require("webpack");
const path = require('path');
const HappyPack = require("happypack");
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const TerserPlugin = require('terser-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    publicPath: 'E://study/typescript/shijian/demo01/dist',
    chainWebpack: config => {
        const jsRule = config.module.rule('js');
        jsRule.uses.clear();
        jsRule.use('happypack/loader?id=babel')
            .loader('happypack/loader?id=babel')
            .end();
    },
    configureWebpack: {
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require("./public/vendor/vendor-manifest.json")
            }),
            new HappyPack({
                id: 'babel',
                loaders: ['babel-loader?cacheDirectory=true'],
                threadPool: happyThreadPool
            }),
            // 将 dll 注入到 生成的 html 模板中
            new AddAssetHtmlPlugin({
                // dll文件位置
                filepath: path.resolve(__dirname, './public/vendor/*.js'),
                // dll 引用路径
                publicPath: './vendor',
                // dll最终输出的目录
                outputPath: './vendor'
            })

        ]

    }
}