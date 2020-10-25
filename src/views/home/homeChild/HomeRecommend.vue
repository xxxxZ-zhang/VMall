<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
 .recommend {
   display: flex;
   padding: 10px 0 20px;
   border-bottom: 10px solid #eee;
   font-size: 15px;
   .recommend-item {
     flex: 1;
     width: 100%;
     text-align: center;
     img {
       width: 100%;
       vertical-align: middle;
       padding: 5px 5px 10px;
     }
   }
 }

</style>