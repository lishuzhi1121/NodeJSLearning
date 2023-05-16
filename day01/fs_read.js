const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'files', '01.txt')
console.log(filePath)
console.log(path.basename(filePath))
console.log(path.basename(filePath, '.txt'))
console.log(path.extname(filePath))
console.log(path.basename(filePath, path.extname(filePath)))
// __dirname: 当前文件所在路径
console.log(__dirname)

fs.readFile(__dirname + '/files/01.txt', 'utf8', function (err, data) {
    console.log(err)
    console.log('-----')
    console.log(data)
})
