// 1. 导入 express 模块
const express = require('express')
// 2. 创建 router 对象
const router = express.Router()

// 3. 挂载路由
router.get('/', (req, res) => {
    console.log(req.method);
    res.send('Hello, world!')
})

router.get('/user', (req, res) => {
    console.log(req.method);
    console.log(req.query);
    res.send({name: 'Sands', age: 18, gender: '男'})
})

router.post('/user', (req, res) =>  {
    console.log(req.method);
    console.log(req.body);
    res.send({code: 200, msg: 'success', data: req.body})
})

// 通过 req.params 匹配类似 :key 这样的动态参数, 默认是一个空对象, 匹配结果: {key: xxx}
router.get('/user/:key', (req, res) => {
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

// 通过 req.params 匹配类似 :key 这样的动态参数, 默认是一个空对象, 可以匹配多个, 匹配结果: {role: xxx, id: xxx}
router.get('/user/:role/:id', (req, res) => {
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

// 4. 导出路由对象
module.exports = router