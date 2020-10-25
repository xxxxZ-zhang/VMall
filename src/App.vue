<template>
  <div id="app">
    <keep-alive exclude="Detail, Category">
      <router-view />
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "components/content/tabbar/TabBar";
export default {
  components: {
    TabBar,
  },
};
</script>

<style>
#app {
}
</style>
