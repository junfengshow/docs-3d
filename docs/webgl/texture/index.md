---
title: 颜色
group:
  title: 纹理
  order: 2
order: 2
footer: false
---

# 简单的颜色纹理

## 使用到的 api

### shader

fragment shader

```glsl
varying vec2 v_pin;
uniform Sampler2D u_sampler;
void main () {
  gl_FragColor = texture2D(u_sampler, v_pin);
}
```

### webglcontext

1. createTexture
2. pixelStorei
3. activeTexture
4. bindTexture
5. texParameteri
6. texImage2D
7. uniform1i

```typescript
// texture
const u_sample = gl.getUniformLocation(program, 'u_sample');
const texture = gl.createTexture();
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
gl.activeTexture(gl.TEXTURE0);
gl.bindTexture(gl.TEXTURE_2D, texture);

// prettier-ignore
const data = new Uint8Array([
    255, 0, 0, 255, 
    255, 255, 0, 255, 
    0, 255, 0, 255, 
    0, 0, 255, 255, 
  ])
// magnification
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
// minification
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
// wrapping
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA, // internalformat
  2,
  2,
  0,
  gl.RGBA, // format: webgl1 必须和internalformat相同
  gl.UNSIGNED_BYTE,
  data,
);
gl.uniform1i(u_sample, 0);
```
