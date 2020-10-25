<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="toCart" />
    <van-goods-action-icon icon="star" :text="collect" :icon-class="{isred: isCollect}" @click="isCollect = !isCollect"/>
    <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
    <van-goods-action-button type="danger" text="立即购买"  />
  </van-goods-action>
</template>

<script>
export default {
  data() {
    return {
      isCollect: false,
    };
  },
  methods: {
    addCart() {
      this.$emit('addCart')
    },
    toCart() {
      this.$router.push('/cart')
    }
  },
  computed: {
    collect() {
      return this.isCollect ? '已收藏' : '收藏'
    }
  }
};
</script>

<style scoped lang="less">
.van-goods-action {
  .van-goods-action-icon {
    font-size: 13px;
  } 
  .van-goods-action-button {
    font-size: 15px;
  }
}
/deep/ .isred {
  color: #ff5000;
}

</style>