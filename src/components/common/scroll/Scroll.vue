<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });
    if (this.probeType=== 2 || this.probeType === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }

    if(this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp');
      })
    }
  },
  updated() {},
  methods: {
    // 滚动方法
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
    // 结束滚动调用，开始下次滚动
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    // 刷新滚动
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    // 获取滚动距离
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  },
};
</script>

<style scoped>

</style>