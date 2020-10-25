<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    topImages: {
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

<style scoped lang="less">
.van-swipe {
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>