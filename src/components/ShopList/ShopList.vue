<template>
  <div class="shop-list">
    <div class="shop-header">
        <i class="iconfont icon-dd_active"></i>
        <span class="shop-header-title">附近商家</span>
    </div>
      <div class="shop-container">
        <ul class="shop-container-list">
          <li class="shop-container-li border-bottom">
            <!-- 链接未更改 -->
            <router-link to="" tag="div" class="shop-container-li-info">
              <div class="shop-container-li-left">
                <div class="shop-container-img">
                  <img src="./images/shop/1.jpg" class="shop-img">
                </div>
              </div>
              <div class="shop-container-li-center">
                <div class="shop-detail-title">锄禾日当午，汗滴禾下土1111111111111</div>
                <div class="shop-detail-rating">
                  <Star></Star>
                  <div class="rating-score">3.6</div>
                  <div class="rating-num">月售106单</div>
                </div>
                <div class="shop-detail-distance">
                  <span>&yen;20起送</span> /
                  <span>配送费&yen;5</span>
                </div>
              </div>
              <div class="shop-container-li-right">
                <ul class="other-ul">
                  <li class="other-ul-supports">保</li>
                  <li class="other-ul-supports">准</li>
                  <li class="other-ul-supports">票</li>
                </ul>
                <div class="other-mark">
                  <span class="other-mark-text">硅谷专送</span>
                </div>
              </div>
            </router-link>
          </li>
          <li class="shop-container-li border-bottom">
            <!-- 链接未更改 -->
            <router-link to="" tag="div" class="shop-container-li-info">
              <div class="shop-container-li-left">
                <div class="shop-container-img">
                  <img src="./images/shop/1.jpg" class="shop-img">
                </div>
              </div>
              <div class="shop-container-li-center">
                <div class="shop-detail-title">锄禾日当午，汗滴禾下土1111111111111</div>
                <div class="shop-detail-rating">
                  <Star></Star>
                  <div class="rating-score">3.6</div>
                  <div class="rating-num">月售106单</div>
                </div>
                <div class="shop-detail-distance">
                  <span>&yen;20起送</span> /
                  <span>配送费&yen;5</span>
                </div>
              </div>
              <div class="shop-container-li-right">
                <ul class="other-ul">
                  <li class="other-ul-supports">保</li>
                  <li class="other-ul-supports">准</li>
                  <li class="other-ul-supports">票</li>
                </ul>
                <div class="other-mark">
                  <span class="other-mark-text">硅谷专送</span>
                </div>
              </div>
            </router-link>
          </li>
          <li class="shop-container-li border-bottom">
            <!-- 链接未更改 -->
            <router-link to="" tag="div" class="shop-container-li-info">
              <div class="shop-container-li-left">
                <div class="shop-container-img">
                  <img src="./images/shop/1.jpg" class="shop-img">
                </div>
              </div>
              <div class="shop-container-li-center">
                <div class="shop-detail-title">锄禾日当午，汗滴禾下土1111111111111</div>
                <div class="shop-detail-rating">
                  <Star></Star>
                  <div class="rating-score">3.6</div>
                  <div class="rating-num">月售106单</div>
                </div>
                <div class="shop-detail-distance">
                  <span>&yen;20起送</span> /
                  <span>配送费&yen;5</span>
                </div>
              </div>
              <div class="shop-container-li-right">
                <ul class="other-ul">
                  <li class="other-ul-supports">保</li>
                  <li class="other-ul-supports">准</li>
                  <li class="other-ul-supports">票</li>
                </ul>
                <div class="other-mark">
                  <span class="other-mark-text">硅谷专送</span>
                </div>
              </div>
            </router-link>
          </li>
          <li class="shop-container-li border-bottom">
            <!-- 链接未更改 -->
            <router-link to="" tag="div" class="shop-container-li-info">
              <div class="shop-container-li-left">
                <div class="shop-container-img">
                  <img src="./images/shop/1.jpg" class="shop-img">
                </div>
              </div>
              <div class="shop-container-li-center">
                <div class="shop-detail-title">锄禾日当午，汗滴禾下土1111111111111</div>
                <div class="shop-detail-rating">
                  <Star></Star>
                  <div class="rating-score">3.6</div>
                  <div class="rating-num">月售106单</div>
                </div>
                <div class="shop-detail-distance">
                  <span>&yen;20起送</span> /
                  <span>配送费&yen;5</span>
                </div>
              </div>
              <div class="shop-container-li-right">
                <ul class="other-ul">
                  <li class="other-ul-supports">保</li>
                  <li class="other-ul-supports">准</li>
                  <li class="other-ul-supports">票</li>
                </ul>
                <div class="other-mark">
                  <span class="other-mark-text">硅谷专送</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
import Star from '../Star/Star.vue'
export default {
  components: {
    Star
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl';
  .msite-shop-list
    width: 100%
    height: 100%
    background: #fff
    overflow: hidden
    .shop-header
      padding: 10px 10px 0
      color: #333
      .icon-dd_active
        margin-right: 5px
      .shop-header-title
        font-size: 14px
        line-height: 20px
    .shop-container
      width: 100%
      height: 100%
      .shop-container-li
        width: 100%
        padding: 15px 5px
        box-sizing: border-box
        .shop-container-li-info
          display: flex
          width: 100%
          color: #333
          center()
          .shop-container-li-left
            flex: 0 0 80px
            padding-right: 5px
            box-sizing: border-box
            .shop-container-img
              width: 100%
              height: 100%
              .shop-img
                display: block
                width: 100%
                height: 100%
          .shop-container-li-center
            flex: 1
            display: flex
            flex-direction: column
            justify-content: center
            min-width: 225px
            height: 100%
            .shop-detail-title
                flex: 1
                font-size: 16px
                font-weight: 700
                ellipsis()
                &.shop-detail-title::before
                  content: '品牌'
                  display: inline-block
                  font-size: 11px
                  color: #333
                  background-color: #ffd930
                  padding: 2px 2px
                  border-radius: 2px
                  margin-right: 5px
            .shop-detail-rating
                flex: 1
                margin: 10px 0
                box-sizing: border-box
                ellipsis()
                .rating-score
                  display: inline-block
                  font-size: 10px
                  color: #ff6000
                  margin: 0 6px
                .rating-num
                  display: inline-block
                  font-size: 10px
                  color: #666
            .shop-detail-distance
              flex: 1
              font-size: 12px
          .shop-container-li-right
            flex: 0 0 60px
            display: flex
            flex-direction: column
            center()
            .other-ul
              flex: 1
              padding-bottom: 10px
              box-sizing: border-box
              .other-ul-supports
                float: left
                font-size: 14px
                color: #999
                border: 1px solid #f1f1f1
                padding: 0 2px
                border-radius: 2px
            .other-mark
              flex: 1
              color: #02a774
              .other-mark-text
                font-size: 10px
                border: 1px solid #02a774
                border-radius: 2px
</style>
