<template>
  <div class="m-header">
    <slot name="left"></slot>
    <div class="m-header-title">
      <span class="m-header-title-text">{{title}}</span>
    </div>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/mixins.styl';
  .m-header
    display: flex
    background: $green
    position: fixed
    top: 0
    left: 0
    z-index: 100
    width: 100%
    height: 45px
    color: #fff
    .m-header-title
      flex: 1
      center()
      ellipsis()
      .m-header-title-text
        font-size: 20px
        ellipsis()
</style>
