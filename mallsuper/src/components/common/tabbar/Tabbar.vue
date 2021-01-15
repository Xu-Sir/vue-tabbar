// 这里只关心大的整体的tab 不关心内容， 内容放到tabbaritem里面处理
<template>
    <div id="tab-bar">
        <!-- <tab-bar-item>
        <img src="../../assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="../../assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="../../assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="../../assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <div slot="item-text">我的</div>
      </tab-bar-item> -->
        <slot></slot>
        <!-- 为什么不将item导入到当前的tabbar处理 
        因为当前的tabbar是一整个大的tab条框， item是任意多个的组件， 两个分开来
        分别调用，可以保证只有一个tab大条框，任意多个item 否则在此处导入并确定item就
        不能做到任意多个随意配置 -->
    </div>
</template>

<script type="text/javascript">
    export default {
      name: "",
      data() {
        return {

        }
      },
      components: {
        
      }
    }

    // import tabbaritem from "./TabbarItem"
    // export default{
    //     name: 'tabbars',
    //     components: {
    //         tabbaritem
    //     }
    // }


</script>

<style scoped>

    /* 水平分布   #取id  .取class */

    #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /*  过度段， x轴为正，向左、y轴为正 向下  .1 是表示透明度 三个100是颜色配置 */
    box-shadow: 0 -3px 1px rgba(100,100,100, .1)
    }
 

</style>
