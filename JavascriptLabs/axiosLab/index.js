const axios = require('axios').default

//基本请求(服务端使用 Nodejs\jikeshijian\22)
axios.get("http://127.0.0.1:8080").then(s => console.log(s)).catch(e => console.log(e))

function onGetCall(config) {
    return config.method === 'get';
}

//实例
let ax = axios.create({ baseURL: 'http://127.0.0.1:8080', timeout: 10000, headers: { 'X-Custom-Header': 'free' } })
ax.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
}, { runWhen: onGetCall, synchronous: true })

ax.interceptors.response.use(function (response) {
    console.log('response interceptor', response.status)
    return response
}, function (error) {
    return Promise.reject(error)
})

let key = 'rock'
ax.get(`game?action=${key}`).then(s => console.log(s)).catch(e => console.log(e))