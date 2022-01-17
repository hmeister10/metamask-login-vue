module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/metamask-login-vue/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
