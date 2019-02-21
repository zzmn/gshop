<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter" />
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" scoped>
  #app
    width: 100%
    height: 100%
    position: relative
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #f5f5f5
    box-sizing: border-box
</style>
