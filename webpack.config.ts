const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = {
  entry: [ "./index.ts"],
  watch: true,
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
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
    contentBase: './build',
     hot: true,
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins:[
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/*.png',
          to: 'assets',
          context: '../simulation-one/',
        },
      ],
    }),
    new HtmlWebpackPlugin({
    templateContent: `
    <html>
      <head>
      
      </head>
      <body id="body">
      </body>
    </html>
  `,
  title:'Simulation | Longitudinal Wave'
  })],
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js"
  }
};
