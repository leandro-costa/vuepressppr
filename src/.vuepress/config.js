const { description } = require('../../package')

module.exports = {
  base: '/vuepressppr/',

  dest: 'docs',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Padrões de Projetos',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Material para as aulas da disciplina de Padrões de Projetos',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.11/katex.min.css' }],
    //PWA
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon-192x192.png' }],
    ['link', { rel: 'mask-icon', href: '/icon-192x192.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: 'leandro-costa/vuepressppr',
    //repoLabel: '',
    docsDir: 'src',
    editLinks: true,
    editLinkText: 'Edit!',
    lastUpdated: true,

    sidebarDepth: 2,
    sidebar: [
      '01_padroes',
      '02_AntiPadroes',
      'SOLID/',
      '03_GOF',
      '04_nao_GOF'
    ]

  },

  markdown: {

    extendMarkdown: md => {
      md.use(require("markdown-it-plantuml"))
      md.use(require("markdown-it-footnote"))
      md.use(require("markdown-it-deflist"))
      md.use(require("markdown-it-katex"))
      md.use(require("markdown-it-include"))
      
    },
    lineNumbers: true

  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    ['@vuepress/plugin-medium-zoom', {
      options: {
        margin: 0,
        background: '#252525'
      }
    }],
    ['container', {
      type: 'col-wrapper',
      defaultTitle: '',
    }],
    ['container', {
      type: 'col-half',
      defaultTitle: '',
    }],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ]
}
