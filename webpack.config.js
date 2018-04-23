const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "index.css",
    disable: process.env.NODE_ENV === "development"
});
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
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            //load scss
            {
                test: /\.(css|scss)$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                })
            }
        ]
    },
    plugins: [
        extractSass
    ]
};