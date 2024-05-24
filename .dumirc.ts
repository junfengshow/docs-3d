import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'WebGL',
    subName: '学习笔记',
    title: '算法与数据结构',
    logo: '//www.junfengshow.com/static/assets/logo.png',
    nav: [
      { link: '/webgl', title: '原生' },
      {
        link: '/three',
        title: 'three',
      },
    ],
    footer: `© 2018-2024 All Rights Reserved Developed by <a href='https://www.junfengshow.com' target='_blank'>wujunfeng</a>`,
  },
  favicons: ['//www.junfengshow.com/static/favicon.png'],

  history: {
    type: 'browser',
  },
  outputPath: 'docs-3d',
  base: '/',
  publicPath: '/',
  copy: [
    {
      from: 'public',
      to: 'docs-3d/public',
    },
  ],
  chainWebpack(memo: any) {
    return memo;
  },
});
