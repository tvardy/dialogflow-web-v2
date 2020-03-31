module.exports = {
    lintOnSave: false,
    publicPath: '',
    productionSourceMap: false,
    pwa: {
        workboxOptions: {
            exclude: ['web.config']
        }
    }
}