<template>
  <div v-if="Object.keys(comments).length !== 0" class="comments">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="comments.user.avatar" alt="" />
      <span>{{ comments.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ comments.content }}</p>
      <div class="info-other">
        <span class="date">{{ comments.created | showDate }}</span>
        <span>{{ comments.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in comments.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    showDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    },
  },
};
</script>

<style scoped lang="less">
.comments {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
  .info-header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .header-title {
      font-size: 15px;
    }
    .header-more {
      font-size: 13px;
      margin-right: 12px;
    }
  }
  .info-user {
    padding: 10px 0 5px;
    img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    span {
      position: relative;
      font-size: 15px;
      top: -15px;
      margin-left: 10px;
    }
  }
  .info-detail {
    padding: 0 5px 15px;
    p {
      color: #777;
      font-size: 14px;
      line-height: 1.5;
    }

    .info-other {
      font-size: 12px;
      color: #999;
      margin-top: 10px;

      .date {
        margin-right: 12px;
      }
    }

    .info-imgs {
      margin-top: 10px;
      img {
        width: 70px;
        height: 90px;
        margin-right: 5px;
      }
    }
  }
}
</style>
