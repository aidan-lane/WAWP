module.exports = {
    devServer: {
        host: 'localhost',
        watchOptions: {
            poll: true
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
}