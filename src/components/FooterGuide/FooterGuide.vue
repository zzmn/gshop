<template>
  <div class="footer-guide border-top">
    <router-link to="/home" class="guide-item" :class="{'on': this.$route.path === '/home'}">
      <span class="guide-icon">
        <i class="iconfont icon-U"></i>
      </span>
      <span class="icon-text">外卖</span>
    </router-link>
    <router-link to="/search" class="guide-item" :class="{'on': this.$route.path === '/search'}">
      <span class="guide-icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span  class="icon-text">搜索</span>
    </router-link>
    <router-link to="/order" class="guide-item" :class="{'on': this.$route.path === '/order'}">
      <span class="guide-icon">
        <i class="iconfont icon-dd_active"></i>
      </span>
      <span  class="icon-text">订单</span>
    </router-link>
    <router-link to="/profile" class="guide-item" :class="{'on': this.$route.path === '/profile'}">
      <span class="guide-icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span  class="icon-text">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl';
  .footer-guide
    position: fixed
    left: 0
    bottom: 0
    right: 0
    background: #fff
    width: 100%
    height: 50px
    display: flex
    .guide-item
      display: flex
      flex: 1
      flex-direction: column
      align-items: center
      text-align: center
      color: #999999
      &.on
        color: $green
      span
        font-size: 12px
        margin: 4px 0
      .iconfont
        font-size: 22px
</style>
