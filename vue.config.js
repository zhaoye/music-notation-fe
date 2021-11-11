module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/music-notation-fe/'
    : '/',

  outputDir: 'docs',
  configureWebpack: config => {
    return {
      title: '识谱练习',
      resolve: {
        alias: {
          '@': resolve('src')
        }
      },
      plugins: []
    }
  } 
}
