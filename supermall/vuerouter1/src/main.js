// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }).then((data)=>{
//   console.log(data)
// })

// axios({
//   url:'https://httpbin.org/post',
//   method:'post',
//   data:{
//     name:"张三",
//     age:39
//   }
// }).then((res) => {
//   console.log(res)
// })

// 全局配置
// axios.defaults.baseURL = 'https://httpbin.org'
// axios.defaults.timeout = 5000


// axios.all([
//   axios({
//     url:'/get'
//     ,params:{
//       name:'李四',
//       age:35
//     }
//   }),
//   axios({
//     url:'/post'
//     ,method:'post'
//     ,data:{
//       name:'张三',
//       age:88
//     }
//   })
// // ]).then((res) => {
// //   console.log(res)
// // })
// ]).then(axios.spread((res1, res2) => {
//   // console.log(res1)
//   // console.log(res2)
// }))

// 创建全局baseUrl 出现多个服务器请求时， 需要重新创建一个axios，这样新的实例 
// //使用新配置的路径和参数
// const axios1 = axios.create({
//   baseURL:'http://123.207.32.32:8000',
//   timeout:4000

// })

// axios1({
//   url:'home/multidata'
// }).then((res)=>{
//   console.log(res)
// })


// import {request1} from './network/request'

// const config = {
//   baseconfig:{
//     url:'home/multidatas'
//   },
//   success:(res) =>{
//     console.log("执行成功"+ res)
//     console.log(res)
//   },
//   failure:(err) =>{
//     console.log('执行失败了'+ err)
//     console.log(err)
//   }
// }
// request1(config)


import {request2} from './network/request'

const config = {
    url:'home/multidata'
}

request2(config).then( (res) => {

  // console.log(res)
}).catch((err) => {

  // console.log(err)
})