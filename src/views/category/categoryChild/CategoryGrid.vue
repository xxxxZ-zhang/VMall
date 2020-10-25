<template>
  <van-grid column-num="3" :border="false">
    <van-grid-item
      :icon="card.image"
      :text="card.title"
      v-for="card in subCategory"
      :key="card.acm"
      :url="card.link"
    />
  </van-grid>
</template>

<script>
export default {
  props: {
    subCategory: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>