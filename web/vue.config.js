module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/myProject/' : '/',
  configureWebpack: config => {
    require('vux-loader').merge(config, {
      options: {},
      plugins: ['vux-ui']
    })
  },
}