<template>
  <div id="home">
    <van-nav-bar>
      <template #title> VMall </template>
    </van-nav-bar>
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    ></tab-control>

    <scroll
      :class="{'content': !isTabFixed, 'content-x': isTabFixed}"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @imgLoad="swiperImgLoad"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
        v-show="!isTabFixed"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="clickBack"></back-top>
  </div>
</template>

<script>
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from 'components/content/backTop/BackTop'

import Scroll from "components/common/scroll/Scroll";

import HomeSwiper from "./homeChild/HomeSwiper";
import HomeRecommend from "./homeChild/HomeRecommend";
import HomeFeature from "./homeChild/HomeFeature";

// import { itemImgListenerMixin, backTopMixin } from 'common/mixin';

import { getHomeMultidata, getGoodsList } from "network/home.js";

import { debounce } from 'common/utils'
import { POP, NEW, SELL } from 'common/const'
export default {
  // mixins: [itemImgListenerMixin, backTopMixin],
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        'pop': {
          page: 0,
          list: [],
        },
        'new': {
          page: 0,
          list: [],
        },
        'sell': {
          page: 0,
          list: [],
        },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    th() {
      return this.isTabFixed ? '44px' : '0'
    }
  },
  components: {
    TabControl,
    GoodsList,
    BackTop,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off('itemImgLoad', this.itemImgListener); 
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods(POP);
    this.getHomeGoods(NEW);
    this.getHomeGoods(SELL);
  },
  mounted() {
    // 刷新滚动防抖处理
    const refresh = debounce(this.$refs.scroll.refresh)
    this.itemImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.itemImgListener)
    
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed = -position.y > this.tabControlOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl2.$el.offsetTop - 44;
    },
    clickBack() {
    this.$refs.scroll.scrollTo(0, 0, 300)
    },
    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getGoodsList(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped lang="less">
#home {
  height: 100vh;
  // margin-top: 46px;
  .van-nav-bar {
    background-color: @colorTink;
    // margin-bottom: 46px;
    /deep/ .van-ellipsis {
      color: #fff;
      font-weight: normal;
    }
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100% - 96px);
    overflow: hidden;
  }
  .content-x {
    height: calc(100% - 140px);
    overflow: hidden;
  }
}
</style>
