var Webpack = require("webpack");
module.exports = {
    entry: ["./entry.js"],
    output: {
        path: __dirname + '/dist', // 图片和 JS 会到这里来
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                'url-loader?limit=8192'
                ]
            }
        ]
    },
    plugins: [
        new Webpack.BannerPlugin("这里是打包文件头部注释！")//注意这是一个数组..
    ],
    resolve: {
        // 现在可以写 require('file') 代替 require('file.coffee')
        extensions: ['.js', '.json', '.coffee'] 
    }
}