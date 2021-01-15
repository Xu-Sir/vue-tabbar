<template>
  <div id="app">
    <h2>主页</h2>
    <p>主页中的内容  很多很多</p>
    <button @click="$store.commit('decrement')">-</button>
    <div style="width:30px; display:inline">{{$store.state.counter}}</div>
    <button @click="addition()">+</button>
    <button @click="addition(10)">+10</button>
    <button @click="addition(100)">+100</button>
    <div>{{$store.getters.powerCount}}</div>
    <!-- <ul v-for="item in  $store.state.students" :key="item.name">
      <li>{{item}}</li>
    </ul> -->
    <table class="tables">
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
      </tr>
      <tr v-for="item in  $store.getters.studentInfol(21)" :key="item.name">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.address}}</td>
      </tr>
    </table>
  <div style="display:inline">{{$store.getters.studentInfo30Count}}</div>
  <button @click="addStudent">添加</button>
  <button @click="addAddress">添加属性</button>
  <div>{{$store.state.students}}</div>
  </div>

</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {

    }
  },
  components: {
  },
  methods:{
    // addition(){
    //   this.$store.commit("increment")
    // }
    addition(count){
      // this.$store.commit("increment", count)
      //传入对象方式提交
      this.$store.commit({
        type:'increment',
        count:count
      })
    },
    addStudent(){
      const student = { name:'张起', age:60}
      this.$store.commit("addStudent", student)
    },
    addAddress(){
      this.$store.commit("addAddress")
    }

    
  },
  computed: {
    
  }
}
// new Promise((resolve, reject)=> {

//   setTimeout(() => {
//     console.log("定时函数执行")
//     //成功请求后调用
//     // resolve();
//     //失败调用reject  不会执行then 会调用catch()
//     reject("失败了  调用了异常捕获");
//   }, 1000);

// }).then(()=>{
//   console.log("then 函数执行");
//   return new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//       console.log("第二个定时函数执行")
//       resolve("请求返回的结果")
//     },1000)
//   })
// }).then(data=>{
//   console.log("第二个then执行"+ data)
// }, err=>{
//   console.log("then调用err方法 不会再被cache捕获")
// }).catch(err=> {
//   console.log(err)
// })



//promise 链式调用，处理结果传到下一个继续处理，分离处理结果，优雅

// new Promise((resolve, reject)=>{

// /////模拟网络请求延时
//   setTimeout(() => {
    
//     resolve("请求结果");
//   }, 2000);
// }).then(data=>{
//   console.log(data);
//   //没有处理完，需要继续处理，但是不能放一块，分开逻辑处理  直接resolve 不用再写promise函数
//   //简写
//  return Promise.resolve(data+ "继续处理加一");
// }).then(data=>{

//   console.log(data+"第二次处理")
// })


//promise 链式调用，处理结果传到下一个继续处理，分离处理结果，优雅

// new Promise((resolve, reject)=>{

// /////模拟网络请求延时
//   setTimeout(() => {
    
//     resolve("请求结果");
//   }, 2000);
// }).then(data=>{
//   console.log(data);
//   //没有处理完，需要继续处理，但是不能放一块，分开逻辑处理  直接resolve 不用再写promise函数
//   //简写  省略掉promise
//  return  data+ "继续处理加一" ;
// //抛出异常
// //  return  promise.reject(data+ "继续处理加一" );
// //抛出异常
// //  throw "err message!!"
// }).then(data=>{

//   console.log(data+"第二次处理")
// }).catch(err=>{
//   console.log("其中一个链执行失败了 捕获异常")
// })


//等待多个请求完成再处理
// Promise.all([

//   new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("result1请求完成")
//       resolve("result1请求完成")
//     }, 1000)
//   }),
//   new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("result2请求完成")
//       resolve("result2请求完成")
//     }, 2000);
//   })
// ]).then(results=>{

//   console.log(results)
// })


</script>

<style scoped>

  table {
      border: 1px solid #e9e9e9;
      border-collapse: collapse;
      border-spacing: 0;
    }
    
    th,td {
      padding: 8px 16px;
      border: 1px solid #e9e9e9;
      text-align: left;
    }
    
    th {
      background-color:#f7f7f7;
      color: #5c6b77;
      font-weight: 600;
    }

</style>
