<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banner" :key="item.image">
        <a :href="item.link" >
          <img :src="item.image" alt="" :title="item.title" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import { Swiper, SwiperItem} from 'components/common/swiper';
  export default {
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isImgLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad() {
        if(!this.isImgLoad) {
          this.$emit('imgLoad');
          this.isImgLoad = true;
        }
      }
    }
  }
</script>

<style>
</style>
