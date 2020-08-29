<template>
  <div>
    <home-header :city="lastCity"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header";
  import HomeSwiper from "./components/Swiper";
  import HomeIcons from "./components/Icons";
  import HomeRecommend from "./components/Recommend";
  import axios from 'axios'
  export default {
    name: "Home",
    components: {
      HomeRecommend,
      HomeHeader,
      HomeSwiper,
      HomeIcons,
    },
    data(){
      return {
        lastCity: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res = res.data
        if (res.ret && res.data) {
          this.lastCity = res.city;
          const data = res.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      }
    },
    mounted() {
      this.getHomeInfo();
    }
  }
</script>

<style scoped>

</style>
