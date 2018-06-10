const miniCSSExtractPluging = require('mini-css-extract-plugin');
const optimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: "./src/client/index.tsx",
    output: {
        filename: "index.js",
        path: __dirname + "/dist/client"
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "awesome-typescript-loader",
                    options: {
                        configFileName: "./tsconfig.client.json"
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: miniCSSExtractPluging.loader,
                }, {
                    loader: 'css-loader',
                },
                {
                    loader: 'sass-loader',
                }
                ]
            }
        ]
    },
    plugins: [
        new optimizeCSSAssetsPlugin(),
        new miniCSSExtractPluging({
            filename: 'index.css',
        }),
    ]
};