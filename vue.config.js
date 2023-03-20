const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        //target: 'http://192.168.154.128:9999', // 后台请求地址
        target: 'http://192.168.84.128:9999/', //后台请求地址
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  }
})
