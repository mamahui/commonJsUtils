/**
 * @Description:
 * @Author: mahui
 * @Date: 2019/4/24 5:12 PM
 */
const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry: path.join(__dirname, './index'),
    output:{
        filename: '[name][hash:5].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
    ]
};