<template>
  <van-tabbar route active-color="red">
    <van-tabbar-item repalce to="/home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item repalce to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item repalce to="/cart" icon="shopping-cart-o"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item repalce to="/profile" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {},
};
</script>

<style scoped lang="less">
.van-tabbar {
  background-color: #f5f5f2;
  .van-tabbar-item {
    font-size: 14px;
  }
  .van-tabbar-item--active {
    background-color: #f5f5f2;
  }
}
</style>