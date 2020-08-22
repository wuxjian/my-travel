<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-fanhui"></div>
    </div>
    <div class="header-input">
      <span class="iconfont icon-sousuo"></span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      上海
      <span class="iconfont icon-jiantou"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeHeader"
  }
</script>

<style lang="stylus" scoped>
  @import "../../../assets/varibles.styl"
  .header
    line-height .84rem
    background-color: $bgColor
    display: flex
    color #fff
    .header-left
      width: .64rem
      .icon-fanhui
        text-align center
        font-size .4rem
    .header-input
      flex: 1
      background-color #fff
      border-radius .1rem
      margin .1rem 0
      line-height .64rem
      color #ccc
      padding-left .15rem
    .header-right
      width 1.24rem
      text-align center
      .icon-jiantou
        margin-left -.04rem
        font-size .28rem
</style>
