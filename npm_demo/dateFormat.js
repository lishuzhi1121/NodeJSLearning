// 定义格式化时间方法
function dateFormat(dtStr) {
    const dt = new Date(dtStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    // NOTE: dt.getDay() 是获取当前时间是本周的第几天, dt.getDate() 才是获取当前时间是本月的几号
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 不足两位补零函数
function padZero(n) {
    return n > 9 ? n : ('0' + n)
}

module.exports = {
    dateFormat
}
