<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" alt="">
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: "HeaderSwiper",
    props: {
      list: Array,
    },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      showSwiper() {
        return this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 32.8%

    .swiper-image
      width 100%
</style>
