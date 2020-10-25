<template>
  <div class="category">
    <van-nav-bar fixed>
      <template #title> 商品分类 </template>
    </van-nav-bar>
    <div class="filling"></div>
    <div class="content">
      <van-tree-select
        height="100%"
        :items="items"
        :main-active-index.sync="active"
        @click-nav="clickL"
      >
        <template #content>
          <category-grid :sub-category="subCategory"></category-grid>
          <tab-control
            :title="['综合', '新品', '销量']"
            @tabClick="tabClick"
          ></tab-control>
          <goods-list :goods="showGoods"></goods-list>
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import CategoryGrid from "./categoryChild/CategoryGrid";
import {
  getCategory,
  getSubcategory,
  getCategoryDetail,
} from "network/category";
export default {
  name: 'Category',
  data() {
    return {
      active: 0,
      items: [],
      subCategory: [],
      goods: {
        pop: [],
        new: [],
        sell: [],
      },
      currentType: "pop",
    };
  },
  created() {
    this.getCategory();
  },
  components: {
    TabControl,
    GoodsList,
    CategoryGrid,
  },
  methods: {
    /**
     * 数据请求
     */
    getCategory() {
      getCategory().then((res) => {
        res.data.category.list.forEach((item, index) => {
          let obj = {};
          obj.text = item.title;
          obj.maitKey = item.maitKey;
          obj.miniWallkey = item.miniWallkey;
          this.items.push(obj);
        });
        // 分类详情初始化
        this.getSubcategory(0);
      });
    },
    getSubcategory(index) {
      getSubcategory(this.items[index].maitKey).then((res) => {
        this.subCategory = res.data.list;
        this.getCategoryDetail("pop");
        this.getCategoryDetail("new");
        this.getCategoryDetail("sell");
      });
    },
    getCategoryDetail(type) {
      let mWallkey = this.items[this.active].miniWallkey;
      getCategoryDetail(mWallkey, type).then((res) => {
        let red = [];
        res.forEach((item) => {
          let obj = {};
          obj.image = item.img;
          obj.iid = item.iid;
          obj.price = item.price;
          obj.cfav = item.cfav;
          obj.title = item.title
          red.push(obj);
        });
        this.goods[type] = red
      });
    },
    /**
     * 事件监听
     */
    clickL() {
      this.getSubcategory(this.active);
    },
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
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType];
    },
  },
};
</script>

<style scoped>
.category {
  height: 100vh;
}
.van-nav-bar {
  background-color: #ff8198;
  z-index: 99;
}
/deep/ .van-ellipsis {
  color: #fff;
  font-weight: normal;
}
.filling {
  height: 46px;
}
.content {
  height: calc(100% - 96px);
  /* height: 100vh; */
}

.van-sidebar {
  text-align: center;
}

.van-sidebar-item--select {
  color: #ff8198;
}
</style>
