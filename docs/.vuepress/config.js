const heads = require('./config/heads.js');
// const nav = require('./config/nav.js');
// const sidebar = require('./config/sidebar.js');
const { getChildren } = require('vuepress-sidebar-atuo');

module.exports = {
  themeConfig: {
    // 导航栏 Logo path public
    logo: '/assets/img/logo.png',
    nav: [
      { text: '主页', link: '/index.html' },
      {
        text: '指南',
        items: [
          { text: '服务端', link: '/guide/service-api/service' },
          { text: 'nodejs', link: '/guide/nodejs-api/nodejs' },
        ],
      },
      { text: '关于我', link: '/about/' },
      {
        text: 'GitHub',
        link: 'https://github.com/sinlov',
        target: '_self',
        rel: '',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '服务端',
          collapsable: true,
          children: getChildren('./docs/guide/service-api/'),
        },
        {
          title: 'nodejs',
          collapsable: true,
          children: getChildren('./docs/guide/nodejs-api/'),
        },
      ],
    },
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
  plugins: [
    'vuepress-plugin-mermaidjs',
    '@vuepress/pwa', // 渐进式的网页应用程序 网页内容有更新的时候有刷新按钮
    {
      serviceWorker: true,
      updatePopup: {
        message: '有新的内容更新',
        buttonText: '刷新',
      },
    },
  ],
};
