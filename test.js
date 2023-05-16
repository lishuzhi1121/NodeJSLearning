const xytools = require('./xy-tools')

// 测试格式化时间
const dt = xytools.dateFormat(new Date())
console.log(dt)

// 测试HTML字符替换
const htmlStr = '<html><body><h1 title="abc">这是一个h1标签</h1><br><span>123456&nbsp;</span></body></html>'
const escapeStr = xytools.htmlEscape(htmlStr)
console.log(escapeStr)

// 测试HTML转义字符还原
const unescapeStr = xytools.htmlUnescape(escapeStr)
console.log(unescapeStr)
