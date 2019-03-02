let webpack = require('webpack')

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                jQuery: 'jquery',
                $: 'jquery'
            })
        ]
    },
    devServer: {
        disableHostCheck: true
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/'
};
