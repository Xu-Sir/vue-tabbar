<template>
  <div id="app">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <a href="">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
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
     recommends:{
       type: Array,
       default: function(){
         return []
       }
     }
  },
  methods: {
     
  },
  computed: {
     
  }
}
</script>

<style scoped>

  #app {
    display: flex;
    /* flex: 1; */
    width: 100%;
    /* 内容居中，，图片和文字都居中 */
    text-align: center;
    /* 字体大小 */
    font-size: 12px;
    /* 调整上下间隔 */
    padding: 10px 0 20px;
    /* 添加间隔横条 边界横条 */
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    /* 图片和文字的a标签块 均等分 */
    flex: 1;
  }
  .recommend-item img{
    /* 图片大小 */
    width: 65px;
    height: 65px;
  }

</style>
