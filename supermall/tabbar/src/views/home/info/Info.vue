<template>
  <div id="app" @click="ddd">
      <ul>
          <li>详细信息</li>
          <li>姓名：{{this.$route.query.name}}</li>
          <li>年龄： {{this.$route.query.age}}</li>
          <li>身高： {{this.$route.query.height}}</li>
          <li>主页的主要内容</li>
          <li>主页的主要内容大量</li>
      </ul>
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
    props: {
      
    },
    methods: {
      ddd(){
        console.log(this.$route.query)
      }
    },
    computed: {
      
    }
  }
</script>

<style scoped>

</style>
