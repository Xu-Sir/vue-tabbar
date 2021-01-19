<template>
  <div class="tabcontrol">
    <div v-for="(item, index) in tabctrs" 
        class="tab-item" 
        :class='{tabCont1:currendIndex == index}' 
        :key="index" 
        @click="changeShow(index)">
        <span>{{item}}</span>
        </div>
  </div>

</template>

<script type="text/javascript">
export default {
  name: "tabcontrol",
  data() {
    return {
      currendIndex:0,
      isActive: true
    }
  },
  components: {
     
  },
  props: {
    tabctrs:{
      type: Array,
      default: function(){
        return []
      }
    }
  },
  methods: {
    changeShow(index){
      this.currendIndex = index
    }
  },
  computed: {
    // calShow(index){
    //   console.log(index)
    //   return 'color:' + 'red';
    //   // return 'color:' + index == this.currendIndex ? 'red':'blue';
    // }
  }
}
</script>

<style scoped>
  .tabcontrol {
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  
  .tab-item {
    flex: 1;
    height: 26px;
  }
  .tab-item span{
    padding: 5px;
  }

  .tabCont1 {
    color :red;
    
  }

  .tabCont1 span {
    /* 底部一个线条高亮显示 */
    border-bottom: 2px solid #ff8198;;
  }
</style>
