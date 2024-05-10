<template>
  <div>
    <div>订单支付页</div>
    <router-link to="/home" class="nav-item">进入游戏商城</router-link>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
onMounted(async () => {
  console.log("onMountedonMounted");
});
</script>
