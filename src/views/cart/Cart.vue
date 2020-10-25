<template>
  <div id="cart">
    <van-nav-bar fixed>
      <template #title> 购物车({{ cartLength }}) </template>
    </van-nav-bar>
    <div v-show="cartLength === 0" class="prompt">购物车空空如也...</div>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartList from "./cartChild/CartList";
import CartBottomBar from './cartChild/CartBottomBar'
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
};
</script>

<style scoped lang="less">

.prompt {
  padding-top: 46px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  color: #ccc;
}
.van-nav-bar {
  background-color: @colorTink;
  z-index: 99;
  /deep/ .van-ellipsis {
    color: #fff;
    font-weight: normal;
  }
}
</style>