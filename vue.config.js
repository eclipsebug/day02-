// defineConfig:提示语法
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  // babel node_moudles 进行转移，安全性，缺点：耗时长
  transpileDependencies: true,

  // 关闭语法检查
  lintOnSave: false,

  // 写原生webpack的配置项
  configureWebpack: {
    devServer: {
      // 默认打开
      open: true,
      // 端口号
      port: 30000,
      // 访问地址
      host: 'localhost'
    }
  }
})
