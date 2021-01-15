import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')

const Message = () => import('../views/home/message/Message')
const Info = () => import('../views/home/info/Info')

// 1.安装插件
Vue.use(VueRouter)

//2. 创建路由对象
const routes = [
    { path: '/', redirect: '/home' , meta: {title:"首页"} }
    ,{ path: '/home', component: Home, meta: {title:"首页"},
        children:[
          { path: 'info', component: Info 
            ,type:'post'
          },
          { path: 'message', component: Message }
        ]
      }
    ,{ path: '/cart', component: Cart , meta: {title:"购物车"}
    // 路由独享守卫
        ,beforeEnter:(to, from, next) => {
          // ${//does NOT have access to `this` component instance}
          // console.log("aaa")
          // next('/category')
          next()
        }
      }
    ,{ path: '/category', name:'category', component: Category , meta: {title:"分类"}}
    ,{ path: '/profile/:userId', component: Profile , meta: {title:"我的"}}
]
const router = new VueRouter({
    routes,
    mode:'history'//默认hash模式 切换成history模式
})
var aaa = true
// 监听路由跳转    导航卫士  前置钩子 前置守卫
router.beforeEach((to, from, next) => {
  // console.log("导航卫士")
  // matched[0]永远取第一个 这样就算有子路由嵌套  还是只显示主路由
  // document.title = to.matched[0].meta.title
  // next({name:'category'})
  // 要判断当前的路径 最后要调用next()  否则陷入死循环
  // if(to.path !== '/home' && aaa){
  //   next('/home')
  //   aaa = false
  // }else
  next()
})

//后置守卫  
router.afterEach( (to , from) => {

  // console.log("aaaa")

})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)

}

//3.导出router
export default router;

