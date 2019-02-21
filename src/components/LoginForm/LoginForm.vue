<template>
  <div class="login-form">
    <div class="login-form-title">
      <a href="javascript:;" class="on">短信登录 / 注册</a>
      <a href="javascript:;">账号登录 / 注册</a>
    </div>
    <!-- 短信登录 -->
    <div class="login-form-container on">
      <div class="login-message">
        <input type="tel" maxlength="11" placeholder="手机号">
        <button disabled class="get-verification">获取验证码</button>
      </div>
      <div class="login-verification">
        <input type="tel" maxlength="8" placeholder="验证码">
      </div>
      <div class="login-hint">
        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
        <a href="javascript:;">《用户服务协议》</a>
      </div>
    </div>
      <!-- 密码登录 -->
    <div class="login-form-container">
      <div class="login-message">
        <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名">
      </div>
      <div class="login-verification">
        <input type="tel" maxlength="8" placeholder="密码">
        <div class="switch-button off">
        <div class="switch-circle"></div>
      </div>
      </div>
      <div class="login-message">
        <input type="text" maxlength="11" placeholder="验证码">
        <img src="./images/captcha.svg" class="get-verification">
      </div>
    </div>
    <button class="login-submit">登录 / 注册</button>
    <a href="javascript:;" class="about-us">关于我们</a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl';
  .login-form
    width: 100%
    height: 100%
    .login-form-title
      display: flex
      width: 100%
      center()
      padding-top: 40px
      a
        font-size: 14px
        color: #333
        padding-bottom: 4px
        display: block
        width: 100%
        height: 100%
        center()
        &.on
          color: $green
          border-bottom: 2px solid $green
          font-weight: 700
    .login-form-container
      display: none
      &.on
        display: block
      input
        width: 100%
        height: 100%
        padding-left: 15px
        box-sizing: border-box
        border: 1px solid #ddd
        border-radius: 4px
        font: 400 14px Arial
        &:focus
          border: 1px solid $green
      .login-message
        position: relative
        width: 100%
        height: 48px
        margin-top: 15px
        .get-verification
          position: absolute
          top: 50%
          transform: translateY(-50%)
          right: 10px
          font-size: 14px
          background: transparent
          color: #ccc
      .login-verification
        position: relative
        width: 100%
        height: 48px
        margin-top: 15px
      .switch-button
        font-size: 12px
        border: 1px solid #ddd
        border-radius: 8px
        transition: background-color 0.3s,border-color 0.3s
        padding: 0 6px
        width: 30px
        height: 16px
        color: #fff
        position: absolute
        top: 50%
        transform: translateY(-50%)
        right: 10px
        &.off
          background: #fff
        &.on
          background: #02a774;
        .switch-circle
          position: absolute
          top: -1px
          left: -1px
          width: 16px
          height: 16px
          border: 1px solid #ddd
          border-radius: 50%
          background: #fff
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .1)
          transition: transform 0.3s
      .login-hint
        margin-top: 15px
        color: #999
        font-size: 14px
        line-height: 20px
        a
          color: $green
    .login-submit
      display: block
      width: 100%
      height: 45px
      margin-top: 20px
      border-radius: 4px
      background: $green
      color: #fff
      text-align: center
      font-size: 16px
      line-height: 45px
    .about-us
      display: block
      font-size: 12px;
      margin-top: 15px;
      text-align: center;
      color: #999;
</style>
