import * as path from 'path';
import * as webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'production',
    entry: './pages/_app.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.tsx',
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader' },
            { test: /\.txt$/, use: 'raw-loader' }
            
        ],
    },
};

export default config;