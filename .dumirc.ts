import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'WebGL',
    title: '算法与数据结构',
    logo: '//www.junfengshow.com/static/assets/logo.png',
    nav: [
      { link: '/webgl', title: '原生', icon: '/public/image-stack.png' },
      {
        link: '/three',
        title: 'three',
        icon: '/public/creator.png',
      },
    ] as any[],
    // sidebar: {
    //   '/three': [
    //     {
    //       title: '',
    //       children: [
    //         {
    //           title: '简介',
    //           link: '/three',
    //         },
    //         {
    //           title: '形状',
    //           link: '/three/buffer-geometry',
    //         },
    //       ],
    //     },
    //   ],
    //   '/three/buffer-geometry': [
    //     {
    //       title: '形状',
    //       children: [
    //         {
    //           title: 'index',
    //           link: '/three/buffer-geometry',
    //         },
    //         {
    //           title: 'map-0-index',
    //           link: '/three/buffer-geometry/map',
    //         },
    //         {
    //           title: 'map-1-impl',
    //           link: '/three/buffer-geometry/map1',
    //         },
    //         {
    //           title: 'map-2-hash',
    //           link: '/three/buffer-geometry/map2',
    //         },
    //       ],
    //     },
    //   ],
    // },
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
});
