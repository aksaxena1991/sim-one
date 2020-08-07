const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: [ "./index.ts"],
  watch: true,
  devtool: 'inline-source-map',
  target: "node",
  externals: [
    nodeExternals({
      // whitelist: ["webpack/hot/poll?100"]
    })
  ],
  module: {
    
    rules: [
      {
        test: /.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      
    ]
  },
  mode: "development",
  devServer: {
    contentBase: './dist',
     hot: true,
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [
    
   new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  }
};
