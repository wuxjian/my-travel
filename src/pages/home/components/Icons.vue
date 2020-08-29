<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon"
             v-for="item of page"
             :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.image" alt="">
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
    data() {
      return {
        iconList: [
          {
            id: 100,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: 101,
            image: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/9480e99a101564a22dfff0c4b9d0861c.png',
            desc: '上海杜莎'
          },
          {
            id: 102,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
            desc: '迪士尼'
          },
          {
            id: 103,
            image: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
            desc: '上海海昌'
          },
          {
            id: 104,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc: '野生动物园'
          },
          {
            id: 105,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
            desc: '欢乐谷'
          },
          {
            id: 106,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png',
            desc: '上海乐园'
          },
          {
            id: 107,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
            desc: '东方明珠'
          },
          {
            id: 108,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
            desc: '杭州宋城'
          },
          {
            id: 109,
            image: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
            desc: '上海科技馆'
          },
        ],
        swiperOptions: {
          pagination: '.swiper-pagination',
          loop: true
        }
      }
    },
    computed: {
      pages() {
        const pages = [];
        this.iconList.forEach((value, index) => {
          const i = Math.floor(index / 8)
          if (!pages[i]) {
            pages[i] = [];
          }
          pages[i].push(value);
        });
        return pages;
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
