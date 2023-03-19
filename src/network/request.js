import axios from 'axios'

// 创建请求
const service = axios.create({
    // baseURL: process.env.VUE_APP_API,//.env文件配置接口地址
    baseURL: "/api",//.env文件配置接口地址192.168.154.128:9999
    timeout: 40 * 1000, // 超时
})
// 请求前
service.interceptors.request.use(
    (config) => {
        // 默认参数
        let defalutParams = {
            "userId": "111111"
        }
        // 默认请求头
        const headers = {
            token: '12345678',
        }
        config.params = Object.assign(defalutParams, config.params || {})
        config.headers = Object.assign(headers, config.headers || {})
        // config.params = JSON.stringify(config.params)
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
// 请求结果
service.interceptors.response.use(
    (response) => {
        //返回数据
        const res = response.data
        return res
    },
    (error) => {
        return Promise.reject(error)
    }
)
export default service