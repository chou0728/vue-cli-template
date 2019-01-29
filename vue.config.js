module.exports = {
  lintOnSave: false, // 不保存為eslint規範的代碼
  productionSourceMap: false, // 打包時不產生map文件，加快打包速度
  chainWebpack: config => {
    config.module
      .rule('vue')
      .test(/\.vue$/)
      .use('iview-loader')
      .loader('iview-loader')
      .options({
        prefix: true
      })
  }
}
