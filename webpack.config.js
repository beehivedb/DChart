module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/public",
        filename: "dchart.js"
    },
    mode: "development",
    devServer:{
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    },
}