const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }

    config.plugins.push(
        (process.env.NODE_ENV === 'production') ?
            new CopyWebpackPlugin([{ from: 'ace_src' }]) :
            new CopyWebpackPlugin([{ from: 'ace_src', to: 'dist' }])
    );

    return config;
}