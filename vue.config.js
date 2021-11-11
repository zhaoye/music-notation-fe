module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/music-notation-fe/'
    : '/',

  outputDir: 'docs',
}
