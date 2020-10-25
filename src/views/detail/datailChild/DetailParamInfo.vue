<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      v-for="(table, index) in paramInfo.sizes"
      :key="index"
      class="info-size"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="info-key">{{ item.key }}</td>
        <td class="info-value">{{ item.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 42px;
      td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
  .info-param {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    .info-key {
      width: 95px;
    }
    .info-value {
      color: #eb4868;
    }
  }
  img {
    width: 100%;
  }
}
</style>