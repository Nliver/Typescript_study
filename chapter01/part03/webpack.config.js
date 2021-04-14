// 引入一个包
const path = require('path');
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// npm init -y 初始化 创建package.json文件
// npm i -D webpack webpack-cli typescript ts-loader  安装四个依赖
// 编写webpack配置文件
// 编写tsconfig.json文件
// 修改package.json中加上build命令
// npm i -D html-webpack-plugin //自动生成html
// npm i -D webpack-dev-server //自动响应浏览器更新
// npm i -D clean-webpack-plugin //清楚dist目录旧文件

//webpack 中所有的配置信息都应该写在module.exports中
module.exports = {

    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件的名字
        filename: "bundle.js",
        //告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false
        }

    },
    //指定webpack打包时要使用的模块
    module: {
        // 指定要loader加载的规则
        rules: [
            {
                // test指定的时规则生效的文件
                test: /\.ts$/,//以ts结尾的文件
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        //指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器及版本
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式 "usage"  表示按需加载
                                        "useBuiltIns": "usage" 
                                    }

                                ]
                            ]
                        }
                    },
                    // 'babel-loader',
                    'ts-loader'
                ],
                // 要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    //配置Webpack 插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "这是一个自定义的title"、
            template: "./src/index.html" 
        }),
    ],

    // 用来设置引用模块，可以将这些文件识别为模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}