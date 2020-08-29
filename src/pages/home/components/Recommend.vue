<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-image" :src="item.imgUrl" alt="">
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
    props: {
      list: Array
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
