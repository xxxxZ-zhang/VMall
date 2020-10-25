<template>
  <div id="detail">
    <div class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <van-tabs
      v-model="active"
      sticky
      scrollspy
      @scroll="scroll"
      line-height="0"
      title-active-color="red"
      ref="tabs"
    >
      <van-tab title="商品">
        <div>
          <detail-swiper :top-images="topImages"></detail-swiper>
          <detail-base-info :goods="goods"></detail-base-info>
          <detail-shop-info :shop="shop"></detail-shop-info>
          <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
        </div>
      </van-tab>
      <van-tab title="参数">
        <detail-param-info :param-info="paramInfo"></detail-param-info>
      </van-tab>
      <van-tab title="评论">
        <detail-comment-info :comments="comments"></detail-comment-info>
      </van-tab>
      <van-tab title="推荐">
        <goods-list :goods="recommends"></goods-list>
      </van-tab>
    </van-tabs>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailSwiper from "./datailChild/DetailSwiper";
import DetailBaseInfo from "./datailChild/DetailBaseInfo";
import DetailShopInfo from "./datailChild/DetailShopInfo";
import DetailGoodsInfo from "./datailChild/DetailGoodsInfo";
import DetailParamInfo from "./datailChild/DetailParamInfo";
import DetailCommentInfo from "./datailChild/DetailCommentInfo";
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from "./datailChild/DetailBottomBar";

import { backTopMixin } from "common/mixin";

import {
  getDetail,
  getRecommends,
  Goods,
  Shop,
  GoodsParam,
} from "network/detail";
export default {
  name: "Detail",
  mixins: [backTopMixin],
  data() {
    return {
      active: 0,
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comments: {},
      recommends: [],
    };
  },
  methods: {
    /**
     * 事件监听
     */
    backClick() {
      this.$router.back();
    },
    scroll({ scrollTop, isFixed }) {
      this.isShowBackTop = scrollTop > 1000;
    },
    backTopClick() {
      this.$refs.tabs.scrollTo(0);
    },
    addCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast(res)
      })
    },

    /**
     * 数据请求
     */
    getDetail(iid) {
      getDetail(iid).then((res) => {
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(
          res.result.itemInfo,
          res.result.columns,
          res.result.shopInfo.services
        );
        this.shop = new Shop(res.result.shopInfo);
        this.detailInfo = res.result.detailInfo;
        this.paramInfo = new GoodsParam(
          res.result.itemParams.info,
          res.result.itemParams.rule
        );
        if (res.result.rate.cRate !== 0) {
          this.comments = res.result.rate.list[0];
        }
  
      });
    },
    getRecommends() {
      getRecommends().then((res) => {
        this.recommends = res.data.list;
      });
    },
  },
  components: {
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
    this.getRecommends();
  },
  beforeDestroy() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
};
</script>

<style scoped lang="less">
#detail {
  position: relative;
  z-index: 99;
  background-color: #fff;
  .van-tabs {
    margin-bottom: 50px;
  }
  /deep/ .van-tabs__nav {
    padding-left: 65px;
    padding-right: 65px;
  }

  .back {
    position: fixed;
    z-index: 999;
    height: 44px;
    line-height: 44px;
    width: 80px;
    text-align: center;
    img {
      margin-top: 10px;
    }
  }
}
</style>