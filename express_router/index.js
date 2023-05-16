// 1. 导入 express 模块
const express = require('express')
// 解析 POST 请求参数的中间件
// const bodyParser = require('body-parser')
// 导入路由模块
const router = require('./router')
const middleware = require('./middleware')

// 2. 创建 web 服务器
const app = express()
// 注册 POST 请求参数的解析中间件
app.use(express.json())
app.use(express.urlencoded({extended: false}))

/**
 * express中间件分类：
 *  1. app中间件: 所有使用app.use注册的中间件
 *  2. 路由中间件: 所有使用router.use注册的中间件
 *  3. 错误中间件: 使用app.use((err, req, res, next) => { })注册的中间件, 且必须注册到所有路由之后
 *  4. 内置中间件: express.static, express.json, express.urlencoded
 */

// 简单注册中间件, 并实现简单的功能: 请求到达时间、拦截指定请求等
// 重点: 多个中间件之间是共享同一份req和res的, 所以上游中间件为req或者res添加的属性或方法, 下游的中间件可以获取并使用
app.use((req, res, next) => {
    // 统一挂载请求到达时间
    req.startTime = Date.now()

    // 拦截指定请求
    if (req.method === 'GET' && req.path === '/api/user') {
        console.log(`拦截了: ${req.method}  ${req.path}`)
        // res.send({ code: 400, msg: '请求被拦截'})
        res.sendStatus(400)
    } else {
        console.log(`放行了: ${req.method} ${req.path}`)
        next()
    }
})

// 注册中间件, 注意中间件加载顺序, 必须在路由之前注册(错误中间件除外)
// app.use(middleware)

// 局部中间件
app.get('/user', middleware, (req, res) => {
    throw new Error('服务异常, 请重试!')
    res.send({name: 'Sands', age: 18, gender: '男', ds: req.startTime})
})

// 挂载路由模块
app.use('/api', router)

// 错误级别中间件, 必须注册到路由之后
app.use(function (err, req, res, next) {
    console.log(err.message)
    res.send({code: 400, msg: err.message})
})



// 3. 监听端口
app.listen(2333, () => {
    console.log('express server running at http://127.0.0.1:2333');
})