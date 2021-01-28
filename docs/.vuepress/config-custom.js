module.exports = {
  title: 'android 技能成长攻略',
  description: 'android 技能收集',
  dest: './dist', // 设置输出目录
  themeConfig: {
    // 禁用导航栏
    // navbar: false,
    // 导航栏 Logo path public
    logo: '/assets/img/logo.png',
    // 导航栏链接
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: 'java相关',
        items: [
          { text: 'java基础', link: '/java/java-base/' },
        ],
      },
      { text: 'GitHub', link: 'https://github.com/sinlov', target:'_self', rel:'' },
    ],
    // 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar，基本的配置，需要一个包含了多个链接的数组
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ],
    smoothScroll: true,
    sidebar: [],
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  },
  // 在VuePress中完全地兼容 PWA
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#6db5ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#6db5ff',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins: {
    '@vuepress/active-header-links': {
      // 菜单高亮 自带主题不用安装
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
    '@vuepress/back-to-top': true, // 回到顶部 自带主题不用安装
    // 文章的末尾会自动显示文章的更新日期 自带主题不用安装
    // lastUpdated 是基于 git 的, 所以你只能在一个基于 git 的项目中启用它, 由于使用的时间戳来自 git commit，因此它将仅在给定页的第一次提交之后显示，并且仅在该页面后续提交更改时更新
    // '@vuepress/last-updated': true,
    '@vuepress/last-updated': {
      // 插件为每个页面生成一个 13 位的时间戳，你可以传入一个 transformer 将其转换为你想要的任何格式
      transformer: (timestamp, lang) => {
        // 不要忘了安装 moment
        const moment = require('moment');
        moment.locale(lang);
        return moment(timestamp).fromNow();
      },
    },
    '@vuepress/plugin-nprogress': true, // 默认为true，设置为false可以关闭进度条 默认主题自带不用安装
    '@vuepress/search': {
      // 在导航栏进行全局搜索 默认主题自带不用安装
      search: true, //默认false
      searchMaxSuggestions: 10, // 默认是5
    },
    '@vuepress/pwa': {
      // 渐进式的网页应用程序 网页内容有更新的时候有刷新按钮
      serviceWorker: true,
      updatePopup: {
        message: '有新的内容更新',
        buttonText: '刷新',
      },
    },
  },
};
