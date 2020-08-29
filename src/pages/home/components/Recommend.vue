<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-image" :src="item.image" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data(){
      return {
        list: [
          {
            id: '001',
            title: '上海海昌海洋公园',
            desc: '走进自然或玩转乐园，感知大千世界',
            image: 'http://img1.qunarzz.com/sight/p0/2008/3b/3bf3639a508fcfd5a3.water.jpg_200x200_f0cb883f.jpg'
          },
          {
            id: '002',
            title: '上海玛雅海滩水公园',
            desc: '走进自然或玩转乐园，感知大千世界',
            image: 'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_200x200_e7f0d0ad.jpg'
          },
          {
            id: '003',
            title: '上海迪士尼乐园',
            desc: '走进自然或玩转乐园，感知大千世界',
            image: 'http://img1.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg'
          },
          {
            id: '004',
            title: '上海欢乐谷',
            desc: '走进自然或玩转乐园，感知大千世界',
            image: 'http://img1.qunarzz.com/sight/p0/2005/9e/9e643f96c84b5c2ea3.water.jpg_200x200_2a3eef5b.jpg'
          },
          {
            id: '005',
            title: '上海野生动物园',
            desc: '走进自然或玩转乐园，感知大千世界',
            image: 'http://img1.qunarzz.com/sight/p0/2005/23/23c1b2b13230b966a3.water.jpg_200x200_f3a19805.jpg'
          },
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden;
    height 1.9rem
    display flex
    .item-image
      height 1.7rem
      width: 1.7rem
      padding: .1rem
    .item-info
      padding: .1rem
      min-width: 0
      flex 1
      .item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
      .item-button
        line-height: .44rem
        margin-top: .2rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff

</style>
