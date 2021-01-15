<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" textclo="deeppink">
        <img  src="~tabbarimg/home_active.svg" alt="" slot="item-icon-active">
        <img  src="./assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <div slot="item-text" >首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" textclo="deeppink">
        <img  src="./assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <img src="./assets/img/tabbar/category.svg" alt="" slot="item-icon">
        <div slot="item-text" >分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" textclo="deeppink">
        <img  src="./assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <img  src="./assets/img/tabbar/shopcart.svg" alt="" slot="item-icon">
        <div slot="item-text" >购物车</div>
      </tab-bar-item>
      <tab-bar-item :path="'/profile/'+userId" textclo="deeppink">
        <img src="./assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <img src="./assets/img/tabbar/profile.svg" alt="" slot="item-icon">
        <div slot="item-text" >我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "tabbar/Tabbar"
import TabBarItem from "tabbar/TabbarItem"

export default {
  name: 'App',
  data () {
    return {
      isActive: false,
      userId:'张三'
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
   @import "./assets/css/base.css";

</style>
