<script setup lang="ts">
import navbar from "./navbar/index.vue";
import zfooter from "./footer/index.vue";
import AppMain from "./AppMain.vue";
</script>

<template>
  <navbar></navbar>
  <AppMain></AppMain>
  <zfooter></zfooter>
</template>

<style lang="less" scoped>
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<style lang="less">
html,
body {
  font-size: 37.5px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
