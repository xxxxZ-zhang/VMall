<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="item.iid" :goods-card="item" :index="index"></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {};
  },
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
};
</script>

<style scoped>
.cart-list {
  padding: 44px 0 94px;
}
</style>