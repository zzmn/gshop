<template>
  <div class="search">
    <Header :title="'搜索'"></Header>
    <form action="#" class="search-form">
      <input type="search" name="search" placeholder="请输入商家或美食名称" class="search-input">
      <input type="submit" name="submit" class="search-submit" value="搜索">
    </form>
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
  .search
    width: 100%
    .search-form
      display: flex
      margin-top: 45px
      background: #fff
      padding: 12px 8px
      .search-input
        flex: 1
        border: 1px solid $green
        font-size: 14px
        color: #333
        padding-left: 5px
        box-sizing: border-box
      .search-submit
        flex: 0 0 60px
        border: 4px solid $green
        font-size: 16px
        color: #fff
        background-color: $green
</style>
