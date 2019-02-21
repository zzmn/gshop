<template>
  <div class="login on">
    <div class="login-container">
      <div class="login-header">
        <h2 class="login-logo">硅谷外卖</h2>
      </div>
      <div class="login-content">
        <login-form></login-form>
      </div>
      <a href="javascript:;" @click="$router.go(-1)" class="go-back">
        <i class="iconfont icon-fanhui"></i>
      </a>
    </div>
  </div>
</template>

<script>
import LoginForm from '../../components/LoginForm/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/mixins.styl';
  .login
    &.on
      display: block
      background: #fff
      overflow: hidden
    &.off
      display: none
    .login-container
      width: 80%
      margin: 0 auto
      padding-top: 60px
      .login-header
        .login-logo
          font-size: 40px
          font-weight: bold
          color: $green
          text-align: center
      .go-back
        position: absolute
        top: 10px
        left: 10px
        width: 30px
        height: 30px
        .iconfont
          font-size: 20px
          color: #999
</style>
