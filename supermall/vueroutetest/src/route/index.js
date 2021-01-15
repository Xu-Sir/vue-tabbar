import Vue from 'vue'
import Routervue from 'vue-router'

// import Home from '../components/home/Home'
// import About from '../components/about/About'

const Home = () => import("../components/home/Home")
const About = () => import("../components/about/About")

//注册
Vue.use(Routervue)

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About }
]

//实例化
const Router = new Routervue({
    routes
    ,mode:'history'
})

//导出

export default Router