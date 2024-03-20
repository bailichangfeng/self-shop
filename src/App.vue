<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import useUserStore from "@/store/modules/user";

const userStore = useUserStore();
</script>

<template>
  <div>{{ userStore.name }}</div>
  <RouterView />
  <HelloWorld msg="667"></HelloWorld>
</template>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
}
</style>
