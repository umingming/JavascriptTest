var path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname, 'dist')
    }
};