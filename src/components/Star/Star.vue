<template>
  <div class="rating-star star-24">
    <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.rating-star
  &.star-24
    .star-item
      float: left
      width: 10px
      height: 10px
      margin-right: 1px
      background-size: 10px 10px
      background-repeat: no-repeat
      &.on
        background-image: url("./images/stars/star24_on@3x.png")
      &.half
        background-image: url("./images/stars/star24_half@3x.png")
      &.off
        background-image: url("./images/stars/star24_off@3x.png")
      &:last-child
        margin-right: 0  
</style>
