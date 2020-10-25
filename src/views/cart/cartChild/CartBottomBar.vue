<template>
  <div class="bottom-menu">
    <check-button class="check-btn" :isChecked="isSelectAll" @click.native="selectAll"></check-button>
    <span>全选</span>
    <span class="total-price">合计：¥{{ totalPrice }} </span>
    <span class="buy-product" @click="calcClick">去结算({{ cartListSelected }})</span>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    CheckButton,
  },

  methods: {
    selectAll() {
      if(this.isSelectAll) {
        this.cartList.map(item => item.checked = false)
      } else {
        this.cartList.map(item => item.checked = true )
      }
    },
    calcClick() {
      if(this.cartList.filter(item => item.checked).length === 0) this.$toast.fail('未选中任何商品')
    }
  },
  computed: {
    ...mapGetters(["cartList", "cartLength"]),
    isSelectAll() {
      return this.cartLength > 0 && this.cartList.filter(item => !item.checked).length === 0;
    },
    totalPrice() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((preValue, item) => preValue + item.price * item.count, 0)
        .toFixed(2);
    },
    cartListSelected() {
      return this.cartList.filter(item => item.checked).length
    }
  },
};
</script>

<style scoped lang="less">
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
  .check-btn {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }
  .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
  .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
}
</style>