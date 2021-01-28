//侧边栏
const { getChildren } = require('vuepress-sidebar-atuo');

module.exports = {
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
};
