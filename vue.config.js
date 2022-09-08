const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 9000, // 端口号
    host: "127.0.0.1",
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    proxy: {
      "/api": {//要把baseurl设置为 `/api`，用于匹配
        target: "http://127.0.0.1:9000", // 通过本地服务器将你的请求转发到这个地址（完整域名或ip，包含端口号）
        changeOrigin: true, // 设置这个参数可以避免跨域
        pathRewrite: {
          '^/api': ""  /* 重写路径重写为target，当我们在浏览器中看到请求的地址为：http://localhost:8080/api/core/getData/userInfo 时
          实际上访问的地址是：http://121.121.67.254:8185/core/getData/userInfo,因为重写了 `/api`*/
        }
      }
    }
  },

})
