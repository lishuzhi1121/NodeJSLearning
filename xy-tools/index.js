const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

// ... 表示将对象所有属性展开
module.exports = {
    ...date,
    ...escape
}
