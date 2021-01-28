// 在 vuepress 中完全地兼容 PWA
module.exports = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#6db5ff' }],
  [
    'link',
    {
      rel: 'stylesheet',
      href: `/iconfont/iconfont.css`,
    },
  ],
  [
    'meta',
    {
      name: 'author',
      content: 'sinlov',
    },
  ],
  [
    'script',
    {
      language: 'javascript',
      type: 'text/javascript',
      src: '/iconfont/iconfont.js',
    },
  ],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
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
];
