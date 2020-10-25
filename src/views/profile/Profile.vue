<template>
  <div id="profile">
    <van-nav-bar>
      <template #title> 个人中心 </template>
    </van-nav-bar>
    <user-info />
    <account-info />
    <normal-list-view :list-data="orderList" />
    <normal-list-view :list-data="serviceList" />
  </div>
</template>

<script>

import UserInfo from "./childComps/UserInfo";
import AccountInfo from "./childComps/AccountInfo";
import NormalListView from "./childComps/NormalListView";

export default {
  name: "Profile",
  components: {
    UserInfo,
    AccountInfo,
    NormalListView,
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" },
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped lang="less">
#profile {
  background-color: #f2f2f2;
  .van-nav-bar {
    background-color: @colorTink;
    // margin-bottom: 46px;
    /deep/ .van-ellipsis {
      color: #fff;
      font-weight: normal;
    }
  }
}

</style>
