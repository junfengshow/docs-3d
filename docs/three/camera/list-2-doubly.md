---
title: 双向链表
group:
  title: 链表
footer: false
---

# 双向链表

<div>
  <a href='https://upload.junfengshow.com/docs/foundation/linked_double.png' target='_blank'>
    <img 
      src='https://upload.junfengshow.com/docs/foundation/linked_double.png'
      width='700'
    />
  </a>
</div>

## 属性和方法

### 节点

```typescript
// typescript
interface LinkedListNodeInterface<T> {
  elememt: T;
  next: LinkedListNodeInterface<T> | null;
  prev: LinkedListNodeInterface<T> | null;
}
class LinkedListNode<T> implements LinkedListNodeInterface<T> {
  elememt: T;
  next: LinkedListNodeInterface<T> | null = null;
  prev: LinkedListNodeInterface<T> | null = null;
  constructor(element: T) {
    this.elememt = element;
  }
}
```

### 方法

```typescript
// typescript
interface LinkedListDoubleInterface<T> {
  // 在任意位置插入新元素
  insertAt: (position: number, element: T) => boolean;
  // 从任意位置移除元素
  removeAt: (position: number) => LinkedListNodeInterface<T> | null;
}
```

## 方法实现

### insertAt

<div>
  <a href='https://upload.junfengshow.com/docs/foundation/link_double_insert_03.png' target='_blank'>
    <img 
      src='https://upload.junfengshow.com/docs/foundation/link_double_insert_03.png'
      width='700'
    />
  </a>
</div>

```typescript
// typescript
class LinkedListDouble<T> implements LinkedListDoubleInterface<T> {
  length: number = 0;
  head: LinkedListNodeInterface<T> | null = null;
  tail: LinkedListNodeInterface<T> | null = null;

  // 在任意位置插入新元素
  insertAt(position: number, element: T): boolean {
    // 位置越界检查
    if (position < 0 || position > this.length) {
      return false;
    }
    // 创建节点
    let node = new LinkedListNode<T>(element);
    // 如果链表为空
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }

    // 添加在开头
    if (position === 0) {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.length++;
      return true;
    }
    // 添加在末尾
    if (position === this.length) {
      let current: any = this.head;
      while (current.next) {
        current = current.next;
      }
      node.prev = current;
      current.next = node;
      this.tail = node;
      this.length++;
      return true;
    }

    // 插在中间
    let index = 0,
      current: any = this.head,
      prev = null;
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    node.next = current;
    node.prev = prev;

    current.prev = node;
    prev.next = node;
    this.length++;
    return true;
  }

  print() {
    console.log(this.length);
    console.log(this.head);
  }
}
```

### removeAt

<div>
  <a href='https://upload.junfengshow.com/docs/foundation/link_double_remove_03.png' target='_blank'>
    <img 
      src='https://upload.junfengshow.com/docs/foundation/link_double_remove_03.png'
      width='700'
    />
  </a>
</div>

```typescript
//typescript
class LinkedListDouble<T> implements LinkedListDoubleInterface<T> {
  // ...
  // 从任意位置移除元素,并返回该被移除的元素如果元素不存在则返回null
  removeAt(position: number): LinkedListNodeInterface<T> | null {
    if (position < 0 || position >= this.length) {
      return null;
    }

    let current: any = this.head,
      prev = null,
      index = 0;
    // 0, 1, 2, 3: position: 3; index: 2
    while (index++ < position) {
      prev = current;
      current = current.next;
    }
    // 移除的是第一项
    if (!prev) {
      let next = current.next;
      next.prev = null;
      this.head = next;

      current.next = null;
      this.length--;
      return current;
    }

    // 移除的是最后一项
    if (!current.next) {
      prev.next = null;
      this.tail = prev;

      current.prev = null;
      this.length--;
      return current;
    }

    // 移除的是中间项
    let next = current.next;
    prev.next = next;
    next.prev = prev;

    current.next = null;
    current.prev = null;
    this.length--;
    return current;
  }
  // ...
}
```
