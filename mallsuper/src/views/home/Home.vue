<template>
  <div id="app2">
      <nav-bar class="home-nav-bar">
        <div slot="center">购物街</div>
      </nav-bar>
      <home-swiper :banners='banners'/>
      <home-recommend :recommends='recommends'/>
      <featore-view/>
      <table-control class="tabCont" :tabctrs="['精选', '流行', '新款']"/>

      <ul>
        <li>title 1</li>
        <li>title 2</li>
        <li>title 3</li>
        <li>title 4</li>
        <li>title 5</li>
        <li>title 6</li>
        <li>title 7</li>
        <li>title 8</li>
        <li>title 9</li>
        <li>title 10</li>
        <li>title 11</li>
        <li>title 12</li>
        <li>title 13</li>
        <li>title 14</li>
        <li>title 15</li>
        <li>title 16</li>
        <li>title 17</li>
        <li>title 18</li>
        <li>title 19</li>
        <li>title 20</li>
        <li>title 21</li>
        <li>title 22</li>
        <li>title 23</li>
        <li>title 24</li>
        <li>title 25</li>
        <li>title 26</li>
        <li>title 27</li>
        <li>title 28</li>
        <li>title 29</li>
        <li>title 30</li>
        <li>title 31</li>
        <li>title 32</li>
        <li>title 33</li>
        <li>title 34</li>
        <li>title 35</li>
        <li>title 36</li>
        <li>title 37</li>
        <li>title 38</li>
        <li>title 39</li>
        <li>title 40</li>
      </ul>
  </div>

</template>

<script type="text/javascript">

  // const Message = () => import('./message/Message')

  import NavBar from 'common/navbar/NavBar'
  import HomeSwiper from './HomeSwiper'
  import HomeRecommend from './HomeRecommend'
  import FeatoreView from './FeatureView'
  import TableControl from 'components/content/TableControl'

  import {getHomeMultidata} from 'network/home'

 
  export default {
    name: "app2",
    data() {
      return {
        //保存网络请求来的数据
        banners: [],
        recommends: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatoreView,
      TableControl
    },
    created () {
      getHomeMultidata().then((res) => {
        // console.log(res)
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #app2 {
    padding-top: 44px;
  }

  .home-nav-bar{
      background-color: 	rgb(222, 176, 216);
      color: #fff;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      /* 高堆叠顺序 */
      z-index: 1;

      
  }

  .banner img{
    width: 100%;
  }

  .tabCont {
    position: sticky;
    top: 44px;
  }
</style>
