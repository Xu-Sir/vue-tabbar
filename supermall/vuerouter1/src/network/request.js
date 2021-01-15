import axios from 'axios'

// 封装网络请求模块
// export function request1 (config){

//     const axios2 = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })

//     axios2(config.baseconfig).then((res)=>{
//         config.success(res);
//     }).catch((err) => {
//         config.failure(err)
//     })
// } 

export function request2(config){
    //1.实例化一个新的axios
    const axios4 = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout: 3900
    })

    //2.拦截器拦截请求
    //拦截请求  两个参数 一个请求成功， 一个请求失败
    axios4.interceptors.request.use(req => {
        // console.log(req)
        return req;
    }, err => {
        console.log(err)
    })

     //拦截返回  两个参数  一个响应成功， 一个响应失败
    axios4.interceptors.response.use(res => {
        console.log(res)
        return res.data
    }, err => {
        console.log(err)
    })
   

    //返回promise
    return axios4(config)
}