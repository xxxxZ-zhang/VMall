<template>
  <van-swipe-cell>
    <div class="cart-item">
      <div
        class="selector"
        :class="{ active: goodsCard.checked }"
        @click="changeChecked"
      >
        <img src="~assets/img/cart/tick.svg" alt="" />
      </div>
      <van-card
        :price="goodsCard.price"
        :desc="goodsCard.desc"
        :title="goodsCard.title"
        :thumb="goodsCard.image"
        @click-thumb="toDetail"
      >
        <template #num>
          <van-stepper v-model="goodsCard.count" />
        </template>
      </van-card>
    </div>
    <template #right>
      <van-button
        square
        text="删除"
        type="danger"
        class="delete-button"
        @click="removeGoods"
      />
    </template>
  </van-swipe-cell>
</template>

<script>
import { REMOVE_CART_ITEM } from 'common/const'
export default {
  props: {
    goodsCard: {
      type: Object,
      default() {
        return {};
      },
    },
    index: {
      type: Number,
    }
  },
  data() {
    return {};
  },
  methods: {
    changeChecked() {
      this.goodsCard.checked = !this.goodsCard.checked;
    },
    removeGoods() {
      this.$dialog.confirm({
        title: "移除商品",
        message: "确定移除此项商品？",
      }).then(() => {
        console.log(this.index);
        this.$store.commit(REMOVE_CART_ITEM, this.index)
      }).catch(() => {

      });
    },
    toDetail() {
      this.$router.push('/detail/' + this.goodsCard.iid)
    }
  },
};
</script>

<style scoped>
.cart-item {
  position: relative;
}
.cart-item .selector {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background-color: #ccc;
  border-radius: 50%;
}
.cart-item img {
  width: 100%;
}
.van-card {
  padding-left: 40px;
}

.van-card__title {
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cart-item .active {
  background-color: red;
}
.delete-button {
  height: 100%;
}
</style>