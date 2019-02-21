<template>
  <div class="profile">
    <Header :title="'我的'"></Header>
    <div class="profile-number border-bottom">
      <router-link to="/login" class="profile-link" tag="div">
        <div class="profile-image">
          <i class="iconfont icon-geren"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录 / 注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-iconshouji"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-gengduo"></i>
        </span>
      </router-link>
    </div>
    <div class="profile-info-data border-bottom">
      <!-- 链接未更改 -->
      <router-link to="/" tag="div" class="profile-info-data-item">
        <span class="info-data-top"><span>0.00</span>元</span>
        <span class="info-data-bottom">我的余额</span>
      </router-link>
      <router-link to="/" tag="div" class="profile-info-data-item">
        <span class="info-data-top"><span>0</span>个</span>
        <span class="info-data-bottom">我的优惠</span>
      </router-link>
      <router-link to="/" tag="div" class="profile-info-data-item">
        <span class="info-data-top"><span>0</span>分</span>
        <span class="info-data-bottom">我的积分</span>
      </router-link>
    </div>
    <div class="profile-my-order">
      <router-link to="/myOrder" class="my-order" tag="div">
        <div class="my-order-icon">
          <i class="iconfont icon-dd_active"></i>
        </div>
        <div class="my-order-info border-bottom">
          <span>我的订单</span>
          <span class="my-order-arrow">
            <i class="iconfont icon-gengduo"></i>
          </span>
        </div>
      </router-link>
      <router-link to="/myOrder" class="my-order" tag="div">
        <div class="my-order-icon">
          <i class="iconfont icon-jifen"></i>
        </div>
        <div class="my-order-info border-bottom">
          <span>积分商城</span>
          <span class="my-order-arrow">
            <i class="iconfont icon-gengduo"></i>
          </span>
        </div>
      </router-link>
      <router-link to="/myOrder" class="my-order" tag="div">
        <div class="my-order-icon">
          <i class="iconfont icon-vip"></i>
        </div>
        <div class="my-order-info border-bottom">
          <span>会员卡</span>
          <span class="my-order-arrow">
            <i class="iconfont icon-gengduo"></i>
          </span>
        </div>
      </router-link>
    </div>
    <div class="profile-my-order">
      <router-link to="/myOrder" class="my-order" tag="div">
        <div class="my-order-icon">
          <i class="iconfont icon-fuwuzhongxin"></i>
        </div>
        <div class="my-order-info border-bottom">
          <span>服务中心</span>
          <span class="my-order-arrow">
            <i class="iconfont icon-gengduo"></i>
          </span>
        </div>
      </router-link>
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
  .profile
    width: 100%
    height: 100%
    overflow: hidden
    background: #fff
    .profile-number
      width: 100%
      margin-top: 45px
      .profile-link
        padding: 15px 10px
        box-sizing: border-box
        display: flex
        center()
        .profile-image
          flex: 0 0 60px
          height: 60px
          border-radius: 50%
          overflow: hidden
          vertical-align: top
          .icon-geren
            background: #e4e4e4
            color: #ccc
            font-size: 62px
        .user-info
          flex: 1
          padding: 10px 0 0 15px
          box-sizing: border-box
          p
            font-weight: 700
            font-size: 18px
            color: #666
          .user-info-top
            padding-bottom: 10px
          .icon-iconshouji
            font-size: 30px
            vertical-align: text-top
          .icon-mobile-number
            font-size: 14px
        .arrow
          flex: 0 0 20px
          color: #666
    .profile-info-data
      width: 100%
      display: flex
      center()
      .profile-info-data-item
        display: flex
        flex-direction: column
        flex: 1
        padding: 10px 0
        text-align: center
        .info-data-top
          flex: 1
          font-size: 14px
          color: #333
          span
            font-size: 30px
            color: #f90
            font-weight: 700
        &:nth-child(2)
          border-left: 1px solid #eee
          border-right: 1px solid #eee
          .info-data-top
            span
              color: #ff5f3e
        &:nth-child(3)
          .info-data-top
            span
              color: #6ac20b
        .info-data-bottom
          flex: 1
          font-size: 14px
          color: #333
    .profile-my-order
      width: 100%
      margin-top: 10px
      .my-order
        display: flex
        width: 100%
        padding: 15px 0
        center()
        .my-order-icon
          flex: 0 0 30px
          padding: 0 5px
          box-sizing: border-box
          .iconfont
            font-size: 28px
            color: #02a774
            &.icon-jifen
              color: #ff5f3e
            &.icon-vip
              color: #f90
        .my-order-info
          flex: 1
          font-size: 18px
          padding: 0 0 10px 10px
          box-sizing: border-box
          position: relative
          .my-order-arrow
            position: absolute
            right: 15px
            top: 50%
            transform: translateY(-65%)
            .icon-gengduo
              font-size: 14px
              color: #bbb
</style>
