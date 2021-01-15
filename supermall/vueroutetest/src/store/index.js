import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件

Vue.use(Vuex)

//注册插件

const store = new Vuex.Store({

    state:{//定义状态维护
        counter:100,
        students:[
            {name:'张三', age:20},
            {name:'张四', age:30},
            {name:'张误', age:40},
            {name:'张六', age:50},
        ]
    }
    ,mutations: {//定义方法 改变状态
        // increment(state){
        //     state.counter++
        // },
        increment(state, count){
            console.log(count)
            // if (!count){
                if (!count.count){
                state.counter++
            }else{
            //对象风格提交时，接受的参数不再是参数 而是对象
                state.counter += count.count
            }
        },
        decrement(state){
            state.counter--
        },
        addStudent(state, student){
            state.students.push(student)
        },
        //对象中增加属性和值， 做到响应式
        addAddress(state){
            //动态添加
            Vue.set(state.students[0], "address", "住很远")
            //动态删除
            Vue.delete(state.students[0], 'name')
        }
    },
    actions: {
        
    },
    getters: {
        powerCount(state){
           return state.counter * state.counter
        },
        studentInfo(state){
            return state.students
        },
        studentInfo30(state){
            return state.students.filter(s => s.age >= 30)
        },
        studentInfo30Count(state, getters){
            return getters.studentInfo30.length
        },
        studentInfol(state){
            return function(age){
                return state.students.filter(s => s.age >= age)
            }
        }
    },
    modules: {
        

    }

})

//导出

export default store 