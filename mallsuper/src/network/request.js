import axios from 'axios'

//导出一个函数
export function request(config){
    const instance1 = axios.create({
        baseURL:'http://123.207.32.32:8000'
        ,timeout: 5000
    })

    instance1.interceptors.response.use(res => {
        return res.data
    })
    return instance1(config)
}
