


module.exports = function(env){
    if( env == "dev") {
        return require('webpack.config.dev')
    }
}