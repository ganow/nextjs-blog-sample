---
title: ブログサンプル
date: 2017.02.11
---

Markdownレンダリング用サンプルファイル。

### 数式

$$
  f(x) = \int_{-\infty}^\infty \hat{f} (\xi)\,e^{2 \pi i \xi x} \,d\xi
$$

### コード

```js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export $initHighlight;
```

### はてなブログカード

<iframe class="hatenablogcard" style="width:100%;height:155px;margin:15px 0;max-width:500px;" title="はてなブログカードのような美しい外部リンクをクリック一発で作成する方法" src="https://hatenablog-parts.com/embed?url=https://nelog.jp/hatenablogcard" frameborder="0" scrolling="no"></iframe>
