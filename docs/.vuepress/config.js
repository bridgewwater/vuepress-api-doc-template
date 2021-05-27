const pluginConf = require('./config/pluginConf.js');
const heads = require('./config/heads.js');
const navConf = require('./config/navConf.js');

module.exports = {
  themeConfig: {
    // 导航栏 Logo path public
    logo: '/assets/img/logo.png',
    nav: navConf,
    sidebarDepth: 3,
    lastUpdated: 'Last Updated',
    // 项目开始时间
    startYear: '2021',
  },
  dest: './dist', // 设置输出目录
  title: 'vuepress api doc template',
  description: 'description vuepress api doc template',
  evergreen: true,
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  base: '/',
  // 在 vuepress 中完全地兼容 PWA
  head: heads,
  plugins: pluginConf,
  nav:navConf
};