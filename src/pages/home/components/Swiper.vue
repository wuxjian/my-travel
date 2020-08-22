<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" >
      <swiper-slide v-for="item of dataList" :key="item.id">
        <img class="swiper-image" :src="item.imageUrl" alt="">
      </swiper-slide>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: "HeaderSwiper",
    data(){
      return {
        dataList: [
          {
            id: '001',
            imageUrl: 'https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg',
          },
          {
            id: '002',
            imageUrl: 'https://imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg',
          }
        ],
        swiperOptions: {
          pagination: '.swiper-pagination',
          loop: true
        }
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
