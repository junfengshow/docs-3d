---
title: 简介
order: 10
footer: false
---

## 前言

刚开始学习 webgl 资料一大堆不方便使用，故写点笔记方便查阅。

## WebGLRenderer 类相关代码

```typescript
export class WebGLRenderer {
  domElement: HTMLCanvasElement;
  // @ts-ignore
  context: WebGLRenderingContext;
  constructor() {
    const canvas = document.createElement('canvas');
    canvas.className = 'canvas';
    this.domElement = canvas;

    this.setSize(600, 300);
  }

  setSize(width: number, height: number) {
    let canvas = this.domElement;
    if (this.context) {
      // 为了设置默认值
      canvas = document.createElement('canvas');
      canvas.className = 'canvas';
      this.domElement = canvas;
    }
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.width = width;
    canvas.height = height;

    this.context = canvas.getContext('webgl')!;
  }
  getContext() {
    return this.context;
  }
  createProgram(vSource: string, fSource: string) {
    const { context } = this;
    const program = context.createProgram()!;
    const vShader = this.loadShader(vSource, context.VERTEX_SHADER);
    const fShader = this.loadShader(fSource, context.FRAGMENT_SHADER);
    vShader && context.attachShader(program, vShader);
    fShader && context.attachShader(program, fShader);
    context.linkProgram(program);
    context.useProgram(program);
    return program;
  }
  loadShader(source: string, type: number) {
    const { context } = this;
    const shader = context.createShader(type)!;
    context.shaderSource(shader, source);
    context.compileShader(shader);
    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
      console.log(context.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }
  dispose() {
    this.domElement.parentNode?.removeChild(this.domElement);
  }
}
```

## NativeContainer 组件

```tsx | pure
import { useEffect, useRef } from 'react';

interface IProps {
  drawMain?: (
    dom: HTMLDivElement,
    gui: IGUI,
  ) => {
    destroy?: () => void;
    [key: string]: any;
  } | void;
}

const NativeContainer: React.FC<IProps> = ({ drawMain }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{
    gui: IGUI;
    [key: string]: any;
  }>({
    // 让类型有省的写 ?
    gui: {} as IGUI,
  });
  useEffect(() => {
    const node = contentRef.current!;

    // 受Sider影响 node.offsetWidth宽度会大一些(Sider的宽度)
    setTimeout(() => {
      const res = drawMain?.(node, stateRef.current.gui);
      stateRef.current.res = res;

      if (res?.animate) {
        function animate() {
          stateRef.current.res.animate();
          stateRef.current.animateRes = requestAnimationFrame(animate);
        }
        animate();
      } else if (res?.render) {
        res.render();
      }
    });
    return () => {
      cancelAnimationFrame(stateRef.current.animateRes);
      stateRef.current.res?.destroy?.();
      stateRef.current.res?.renderer?.dispose?.();
    };
  }, []);
  return (
    <div className="flex">
      <div ref={contentRef} className="flex-auto" />
    </div>
  );
};
export default NativeContainer;
```
