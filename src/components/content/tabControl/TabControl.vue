<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in title" :key="item" :class="{'active-tab': index === currentIndex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  }
};
</script>

<style scoped lang="less">
.tab-control {
  display: flex;
  width: 100%; 
  height: 44px;
  line-height: 44px;
  background-color: #fff;    
  text-align: center;
  font-size: 15px;
  z-index: 9;
  .tab-control-item {
    flex: 1;

    span {
      // display: inline-block;
      padding: 8px;
    }
  }
  .active-tab {
    color: @colorTink;
    span {
      border-bottom: 2px solid @colorTink;
    } 
  }
}
</style>