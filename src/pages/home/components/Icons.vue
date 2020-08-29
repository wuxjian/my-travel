<template>
  <div class="icons">
    <swiper :options="swiperOptions" v-if="showIcons">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-title">
            {{item.desc}}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeIcons",
    props: {
      list: Array
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
      pages() {
        const pages = [];
        this.list.forEach((value, index) => {
          const i = Math.floor(index / 8)
          if (!pages[i]) {
            pages[i] = [];
          }
          pages[i].push(value);
        });
        return pages;
      },
      showIcons() {
        return this.list.length;
      }
    }

  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/varibles.styl"
  .icons >>> .swiper-container
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%

  .icons
    .icon
      position relative
      float left
      overflow: hidden;
      width 25%;
      height 0
      padding-bottom 25%

      .icon-img
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem

        .icon-img-content
          display: block
          margin: 0 auto
          width: 80%

      .icon-title
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .24rem
        text-align: center
        color $darkTextColor
</style>
