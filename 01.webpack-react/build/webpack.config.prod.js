const path = require('path')
const webpack = require('webpack')


module.exports = {
    entry:'',
    output:{
        path: {
            "app": path.resolve('build', '../dist'),
            "vendor": ['react', 'react-dom']
        },
        filename: 'app.[hash:8].js',
        publicPath: '/'
    },
    modules:{
        rules:[
            {
                test:/\.jsx?/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, 'src'),
                use:{
                    loader: 'bable-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'sass-loader',
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
              }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
}