// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CardLayout from './components/CardLayout.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import AboutPage from './components/AboutPage.vue'
import "vitepress-markdown-timeline/dist/theme/index.css";
import './style/index.css'
import './style.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('CardLayout', CardLayout,)
    app.component('ThemeToggle', ThemeToggle,)
    app.component('AboutPage', AboutPage,)
    // ...
  }
} satisfies Theme
