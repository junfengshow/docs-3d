import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'WebGL',
    title: '算法与数据结构',
    logo: '//www.junfengshow.com/static/assets/logo.png',
    nav: [
      { link: '/webgl', title: '原生' },
      { link: '/three', title: 'threejs' },
    ],
  },
  favicons: ['//www.junfengshow.com/static/favicon.png'],

  history: {
    type: 'browser',
  },
  outputPath: 'docs-3d',
  base: '/',
  publicPath: '/',
});
