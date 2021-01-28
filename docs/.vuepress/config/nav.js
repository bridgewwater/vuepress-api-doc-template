//导航栏
module.exports = [
  { text: '主页', link: '/index.html' },
  {
    text: '指南',
    items: [
      { text: '服务端', link: '/guide/service-api/service' },
      { text: 'nodejs', link: '/guide/nodejs-api/nodejs' },
    ],
  },
  {text: '关于我', link: '/about/',},
  {
    text: 'GitHub',
    link: 'https://github.com/sinlov',
    target: '_self',
    rel: '',
  },
];
