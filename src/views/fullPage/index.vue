<template>
  <div>
    <div>全平台首页</div>
    <div>游戏列表</div>
    <router-link to="/home" class="nav-item">进入游戏商城</router-link>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onActivated } from "vue";
onMounted(async () => {
  console.log("onMountedonMounted");
});
onActivated(() => {
  console.log("onActivatedonActivated");
});
</script>
