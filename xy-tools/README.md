# xy-tools

小影工具, 提供了格式化时间和HTMLEscape等功能

## 安装

```
npm install xy-tools
```

## 导入

```js
const xytools = require('xy-tools')
```

## 使用

### 格式化时间

```js
// 调用 dateFormat 格式化时间
const dt = xytools.dateFormat(new Date())
// 2023-05-16 16:52:31
console.log(dt);
```

### 转义HTML中的特殊字符

```js
// 定义待转义的HTML字符串
const htmlStr = '<html><body><h1 title="abc">这是一个h1标签</h1><br><span>123456&nbsp;</span></body></html>'
// 调用 htmlEscape 方法转义字符串
const escapeStr = xytools.htmlEscape(htmlStr)
// &lt;html&gt;&lt;body&gt;&lt;h1 title=&quot;abc&quot;&gt;这是一个h1标签&lt;/h1&gt;&lt;br&gt;&lt;span&gt;123456&amp;nbsp;&lt;/span&gt;&lt;/body&gt;&lt;/html&gt;
console.log(escapeStr)
```

### 还原HTML转义字符串

```js
// 调用 htmlUnescape 方法还原HTML转义字符
const unescapeStr = xytools.htmlUnescape(escapeStr)
// <html><body><h1 title="abc">这是一个h1标签</h1><br><span>123456&nbsp;</span></body></html>
console.log(unescapeStr)
```

## 开源协议

ISC

