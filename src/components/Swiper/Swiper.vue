<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/1.jpg" alt="">
          </div>
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/2.jpg" alt="">
          </div>
          <span>商超便利</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/3.jpg" alt="">
          </div>
          <span>美食</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/4.jpg" alt="">
          </div>
          <span>简餐</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/5.jpg" alt="">
          </div>
          <span>新店特惠</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/6.jpg" alt="">
          </div>
          <span>准时达</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/7.jpg" alt="">
          </div>
          <span>预订早餐</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/8.jpg" alt="">
          </div>
          <span>土豪推荐</span>
        </a>
      </div>
      <div class="swiper-slide">
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/1.jpg" alt="">
          </div>
          <span>甜品饮品</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/2.jpg" alt="">
          </div>
          <span>商超便利</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/3.jpg" alt="">
          </div>
          <span>美食</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/4.jpg" alt="">
          </div>
          <span>简餐</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/5.jpg" alt="">
          </div>
          <span>新店特惠</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/6.jpg" alt="">
          </div>
          <span>准时达</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/7.jpg" alt="">
          </div>
          <span>预订早餐</span>
        </a>
        <a href="javascript:;" class="link-to-food">
          <div class="food-container">
            <img src="./images/nav/8.jpg" alt="">
          </div>
          <span>土豪推荐</span>
        </a>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl';
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: #fff !important
  .swiper-container
    width: 100%
    height: 100%
    .swiper-wrapper
      .swiper-slide
        width: 100%
        height: 100%
        display: flex
        align-items: flex-start
        flex-wrap: wrap
        .link-to-food
          display: flex
          flex-direction: column
          flex: 0 0 25%
          width: 25%
          height: 50%
          .food-container
            flex: 1
            width: 100%
            height: 100%
            center()
            font-size: 0
            img
              display: inline-block
              width: 50px
              height: 50px
          span
            color: #333
            flex: 0 0 35px
            display: block
            width: 100%
            center()
</style>