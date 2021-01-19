<template>
  <div id="app">
      <swiper>
        <swiper-item v-for="(item, index) in banners"  :key="index">
          <!-- <a :href="item.image"> -->
            <img :src="item.image" alt="">
          <!-- </a> -->
        </swiper-item>
      </swiper>
  </div>

</template>

<script type="text/javascript">

import {Swiper, SwiperItem} from 'common/swiper'

export default {
  name: "app",
  data() {
    return {


    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
     banners:{
       type:Array,
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

</style>
