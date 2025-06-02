import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mr. Bizarre",
  description: "记录美好生活",
  lang: 'zh-Hans',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(timeline);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    lastUpdated: { text: '更新于' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    logo: "/favicon.ico",
    nav: [
      { text: '首页', link: '/' },
      { text: '作品', link: '/work' },
      { text: '关于', link: '/about' },
      { text: '日志', link: '/log' }
    ],
    notFound: {
      title: "页面未找到",
      quote: "但是，如果你不改变方向，如果你继续寻找，你最终可能会到达你要去的地方。",
      linkText: "返回首页",
    },

    // sidebar: [
    //   {
    //     text: '',
    //     collapsed: false,
    //     items: [
    //       { text: '关于', link: '/about' },
    //       { text: '作品', link: '/work' }
    //     ]
    //   }
    // ],

    footer: {
      message: `<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
        <img src="../img/icp.png" alt="ICP备案号">陕ICP备2023007133号-1
    </a>
      </br>
    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011502000871" target="_blank" rel="noreferrer">
        <img src="../img/anei.png" alt="川公网安备">川公网安备51011502000871号
    </a>`,
      copyright: `COPYRIGHT © 2024-${new Date().getFullYear()} & <a href="https://zhuns.top/">进函科技社</a>`
    },
    socialLinks: [
      // { icon: 'github', link: '' }
    ]
  }
})
