<template>
  <div class="check-button" :class="{check: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.check-button {
  /* background-color: #ccc; */
  border: 1px solid #ccc;
  border-radius: 50%;
}
.check {
  background-color: red;
  /* border: 0; */
}
</style>