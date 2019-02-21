<template>
  <div class="msite">
    <Header :title="'昌平区北七家宏福科技园（337省道北）'">
      <div slot="left" class="my-header-search">
        <router-link to="/search">
          <i class="iconfont icon-sousuo" solt="left"></i>
        </router-link>
      </div>
      <router-link to="/login" slot="right" tag="div" class="m-header-login">
        <span class="m-header-login-text">登录|注册</span>
      </router-link>
    </Header>
    <div class="msite-nav">
      <Swiper></Swiper>
    </div>
    <!-- shop-list -->
    <div class="msite-shop-list">
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  components: {
    Header,
    Swiper,
    ShopList
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl';
  .msite
    width: 100%
    height: 100%
    padding-bottom: 50px
    box-sizing: border-box
    background: #fff
    overflow: hidden
    .my-header-search
      flex: 0 0 60px
      width: 100%
      height: 100%
      line-height: 22px
      center()
      margin-left: -10px
      .icon-sousuo
        font-size: 20px
        color: #fff
    .m-header-login
      flex: 0 0 80px
      font-size: 14px
      color: #fff
      center()
      .m-header-login-text
        font-size: 14px
    .msite-nav
      margin-top: 45px
      height: 200px
      background: #fff
    .msite-shop-list
      width: 100%
      height: 100%
      background: #fff
</style>
