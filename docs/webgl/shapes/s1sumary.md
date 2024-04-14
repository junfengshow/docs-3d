---
title: 简介
group:
  title: 形状
  order: 1
order: 1
footer: false
---

## 从一个简单的例子开始

```jsx
/**
 * title: demo 标题
 * description: descriptiondescriptiondescription
 * compact: false
 * background: '#fff'
 * tocDepth: 10
 */
import React from 'react';

export default () => <>Hello world!</>;
```

```typescript
/**
 * background: '#333'
 */
const width = node.offsetWidth / 2,
  height = width,
  perSize = Float32Array.BYTES_PER_ELEMENT;

// 渲染器
const renderer = new MyRender.WebGLRenderer();
renderer.setSize(width, height);
node.appendChild(renderer.domElement);

// program
const program = renderer.createProgram(vSource, fSource);
const gl = renderer.getContext();

// buffer
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex), gl.STATIC_DRAW);

const position = gl.getAttribLocation(program, 'position');
gl.vertexAttribPointer(position, 4, gl.FLOAT, false, perSize * 6, 0);
gl.enableVertexAttribArray(position);

const coord = gl.getAttribLocation(program, 'coord');
gl.vertexAttribPointer(coord, 2, gl.FLOAT, false, perSize * 6, perSize * 4);
gl.enableVertexAttribArray(coord);

// texture
const colorTexture = gl.createTexture();
const u_sampler = gl.getUniformLocation(program, 'u_sampler');
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, colorTexture);

gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

/* prettier-ignore */
const data = new Uint8Array([
    255, 0, 0, 255, // 红色
    255, 255, 0, 255, // 黄色
    0, 0, 255, 255, // 蓝色
    0, 255, 0, 255, // 绿色
  ]);

gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA,
  2,
  2,
  0,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  data,
);
gl.uniform1i(u_sampler, 0);

return {
  renderer,
  render() {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  },
};
```
