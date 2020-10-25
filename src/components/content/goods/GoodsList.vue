<template>
  <div class="goods"> 
    <goods-list-item v-for="item in goods" :key="item.acm" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  components: {
    GoodsListItem
  }
}
</script>

<style scoped lang="less">
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>