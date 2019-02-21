<template>
  <div class="order">
   <Header :title="'订单列表'"></Header>
    <div class="order-no-login">
      <img src="./images/order/person.png">
      <h3>登录后查看外卖订单</h3>
      <router-link tag="button" to="/login" class="login-btn">立即登录</router-link>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl';
  .order
    width: 100%
    height: 100%
    background: #fff
    .order-no-login
      padding: 140px 60px 0
      margin: 0 auto
      text-align: center
      img
        display: block
        width: 100%
        height: auto
      h3
        font-size: 17px
        color: #6a6a6a
        margin: 15px 0
      .login-btn
        background: $green
        font-size: 14px
        color: #fff
        border-radius: 5px
        padding: 10px 20px
</style>
