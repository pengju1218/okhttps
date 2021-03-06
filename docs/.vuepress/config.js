module.exports = {
  title: 'OkHttps',
  description: 'OkHttps 官网 比 Retrofit 更好用的网络框架！ OkHttp3 轻量封装 ，开箱即用、Java领域前后端处理 Http问题的新选择。',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '教程', link: '/guide/' },
      { text: '历史版本', link: 'https://gitee.com/ejlchina-zhxu/okhttps/releases' },
      { text: '码云', link: 'https://gitee.com/ejlchina-zhxu/okhttps' }
    ],
    sidebar: [
      ['/guide/', '起步'],
      ['/guide/foundation', '基础'],
      ['/guide/configuration', '配置'],
      ['/guide/features', '特色'],
      ['/guide/updown', '上传下载'],
      ['/guide/android', '安卓'],
    ],
    sidebarDepth: 2,
    smoothScroll: true,
    lastUpdated: '上次更新',
    repo: 'ejlchina/okhttps',
    repoLabel: 'Github',
    docsBranch: 'dev',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    author: 'Troy Zhou'
  },
  // 若全局使用 vuepress，back-to-top 就会失效
  plugins: [
    '@vuepress/back-to-top', 'code-switcher',
    ['smartlook', {id: "309988eea09b54d04d69edf5864d0414949892f4"}],
    ['seo', { 
      description: $page => $page.frontmatter.description,
      tags: $page => $page.frontmatter.tags
    }]
  ],
  markdown: {
    lineNumbers: true
  }
}
