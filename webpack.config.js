const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = env => {
  return {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      contentBase: "./dist",
      port: 9000,
      hot: true
    },
    entry: {
      main: "./src/index.js"
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist")
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          }
        }
      },
      runtimeChunk: "single",
      moduleIds: "deterministic"
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },

    plugins: [
      // new BundleAnalyzerPlugin({ generateStatsFile: false }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: "Caching"
      })
    ]
  };
};
