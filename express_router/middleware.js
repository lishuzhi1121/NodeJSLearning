const my_mw = (req, res, next) => {
    console.log(req.startTime)
    console.log(req.method)
    console.log(req.path)
    next()
}

module.exports = my_mw
