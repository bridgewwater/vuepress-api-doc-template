const moment = require('moment');

module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: "发现新内容可用.",
      buttonText: "刷新"
    }
  },
  'vuepress-plugin-mermaidjs': true, // https://github.com/eFrane/vuepress-plugin-mermaidjs
  'fulltext-search': true, // https://github.com/leo-buneev/vuepress-plugin-fulltext-search
  '@vuepress/back-to-top': true,
  '@vuepress/medium-zoom': {
    selector: '.content__default img',
  },
  '@vuepress/last-updated': {
    transformer: (timestamp) => moment(timestamp).format('LLLL')
  },
  "vuepress-plugin-auto-sidebar": {
    // title: {
    //   mode: "uppercase",
    //   map: {
    //     "/frontend/javascript/": "JS 基础",
    //   }
    // },
    // collapse: {
    //   collapseList: ["/frontend/javascript/"]
    // }
  }
};