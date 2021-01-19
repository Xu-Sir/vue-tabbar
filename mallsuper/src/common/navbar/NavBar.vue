<template>
  <div id="app">
    <!-- 做三个分块的接口导航栏  放三个插槽-->
    <div class="left"> <slot name="left"></slot> </div>
    <div class="center"> <slot name="center"></slot> </div>
    <div class="right"> <slot name="right"></slot> </div>
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
     
  },
  computed: {
     
  }
}
</script>

<style scoped>
    .left , .right{
        /* background-color: red; */
        width: 80px;
    }
    .center{
        flex: 1;
        /* background-color: blue; */
    }

    #app {
        display: flex;
        height: 44px;
        text-align: center;
        line-height: 44px;
    }

</style>
