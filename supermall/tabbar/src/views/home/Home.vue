<template>
  <div id="app2">
      <h2>首页</h2>
      <router-link :to="{path:'/home/info', query:{name:'张三', age:32, height:'166cm'}}">信息</router-link>
      <!-- <router-link to="/home/message">消息</router-link> -->
      <message messcol="red" :path="'/home/info?'+ 'names=' + name" ></message>
      <router-view></router-view>
  </div>

</template>

<script type="text/javascript">

  const Message = () => import('./message/Message')

  export default {
    name: "app2",
    data() {
      return {
        name:"张三"
      }
    },
    components: {
      Message
    },
    // 组件守卫
    beforeRouteEnter (to, from, next)  {
      // ${//does NOT have access to `this` component instance}
      //不能获取this实力，，因为守卫执行前 实例没有被创建
      // console.log("组件守卫")
      next()
    }
  }
</script>

<style scoped>

</style>
