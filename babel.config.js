module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      //组件和样式按需加载配置
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ]
  ]
}
