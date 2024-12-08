const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/', // Ruta base
    },
    plugins: [
        // No incluyas dotenv-webpack si no necesitas variables de entorno
    ],
});

