// 1. 导入 express 模块
const express = require('express')
// 解析 POST 请求参数的中间件
const bodyParser = require('body-parser')

// 2. 创建 web 服务器
const app = express()
// 应用 POST 请求参数的解析中间件
app.use(bodyParser.json())

// 8. 使用 express.static() 方法对外提供静态资源访问
// 如果有多个静态资源目录, 只需要use多次即可, 但注意存在查找优先级,
// 先加入的会先查找, 比如 index.html 在clock中查找到之后就不会再查找files目录了
app.use(express.static('clock'))
// 使用use方法的第一个参数挂载静态资源访问前缀
// app.use('/clock', express.static('clock'))
// app.use(express.static('files'))

// 4. 接收 GET 请求
app.get('/', (req, res) => {
    console.log(req.method);
    res.send('Hello, world!')
})
app.get('/user', (req, res) => {
    console.log(req.method);
    console.log(req.query);
    res.send({name: 'Sands', age: 18, gender: '男'})
})

// 5. 接收 POST 请求
app.post('/user', (req, res) =>  {
    console.log(req.method);
    console.log(req.body);
    res.send({code: 200, msg: 'success', data: req.body})
})

// 6. 通过 req.params 匹配类似 :key 这样的动态参数, 默认是一个空对象, 匹配结果: {key: xxx}
app.get('/user/:key', (req, res) => {
    console.log(req.method);
    const params = req.params
    console.log(params);
    console.log(req.query);
    res.send({
        ...params,
        name: 'Sands',
        age: 21,
        gender: '男'
    })
})

// 7. 通过 req.params 匹配类似 :key 这样的动态参数, 默认是一个空对象, 可以匹配多个, 匹配结果: {role: xxx, id: xxx}
app.get('/user/:role/:id', (req, res) => {
    console.log(req.method);
    const params = req.params
    console.log(params);
    console.log(req.query);
    res.send({
        ...params,
        name: 'Sands',
        age: 19,
        gender: '男'
    })
})



// 3. 监听端口
app.listen(2333, () => {
    console.log('express server running at http://127.0.0.1:2333');
})

