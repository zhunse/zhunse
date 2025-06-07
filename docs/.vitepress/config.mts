import { defineConfig } from 'vitepress'
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mr. Bizarre",
  description: "记录美好生活",
  base: '/',
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
      { text: '动态', link: '/work' },
      { text: '关于', link: '/about' },
      {
        text: '其他',
        items: [
          { text: '我的装备', link: '/equip' },
          { text: '关注微信', link: '/wx' },
          { text: '维护日志', link: '/log' }
        ]
      },
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
    //       { text: '动态', link: '/work' }
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
    </a>
      </br>
    <a href="https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral" target="_blank" rel="noreferrer">
        本网站由<img src="../img/ypy.png" title="又拍云" alt="又拍云" style="height: 1em;">提供CDN加速/云存储服务
    </a>`,
      copyright: `COPYRIGHT © 2024-${new Date().getFullYear()} & <a href="https://zhuns.top/">进函科技社</a>`
    },
    socialLinks: [
      {
        icon: {
          svg: '<img src="/icon/ks.svg" width="55%" color="#808080">'
        },
        link: "https://v.kuaishou.com/rpfhY6",
      },
      {
        icon: {
          svg: '<img src="/icon/wxs.svg" width="65%" color="#808080">'
        },
        link: "/wx",
      },
      {
        icon: 'github',
        link: "https://github.com/zhunse/Wincooa",
      },
      {
        icon: {
          svg: '<img src="/icon/ugnas.svg" width="55%" color="#808080">'
        },
        link: "https://www.ug.link/",
      }
    ]
  }
})
