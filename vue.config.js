const path = require("path");
// 开发环境下的移动端调试工具
const vConsolePlugin = require("vconsole-webpack-plugin");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/activity" : "/",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: true, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("views", resolve("src/views"));
    config.optimization.runtimeChunk("single");
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true;
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = [
        "console.log"
      ];
    } else {
      // 添加移动端调试工具
      config.plugins.push(
        new vConsolePlugin({
          filter: [], // 需要过滤的入口文件
          enable: false // 发布代码前记得改回 false
        })
      );
    }
  },
  devServer: {
    port: "8080",
    host: "192.168.0.156",
    hot: true,
    open: true,
    overlay: {
      warning: false,
      error: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://as.pc.fm.com",
        changeOrigin: true,
        secure: false
      }
    }
  }
};
