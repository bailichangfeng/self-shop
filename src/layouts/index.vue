<script setup lang="ts">
import { reactive } from "vue";
import Footer from "./Footer/index.vue";
import Header from "./Header/index.vue";
import Sidebar from "./Sidebar/index.vue";
import AppMain from "./AppMain.vue";
import { useRoute, useRouter, RouteRecordRaw } from "vue-router";
const route = useRoute();
const router = useRouter();
console.log("appmain的route", route);
console.log("所有路由", router.getRoutes());

// 需要缓存的组件
const keepAliveName = reactive<string[]>([]);
const sidebarList = reactive<RouteRecordRaw[]>([]);

// 获取需要缓存的组件
router.getRoutes().forEach(item => {
  if (item.meta.keepAlive) {
    keepAliveName.push(item.name as string);
  }
  if (item.meta.siderbarGroup && item.meta.siderbarGroup == route.meta.siderbarGroup) {
    sidebarList.push(item);
  }
});
console.log("keepAliveName 数组", keepAliveName);
console.log("sidebarList", sidebarList);
let a: Menu.MenuOptions = {
  name: "HomeFilled",
  path: "",
  meta: {
    title: "string"
  }
};
console.log(a);
</script>

<template>
  <div class="main-container">
    <div v-if="['header', 'all'].includes(route.meta.layout || '')" class="navbar">
      <Header></Header>
    </div>
    <div class="app-main">
      <el-scrollbar height="100%">
        <Sidebar v-if="route.meta.siderbarGroup" :menu-list="sidebarList"></Sidebar>
        <AppMain :keep-alive-name="keepAliveName"></AppMain>
      </el-scrollbar>
    </div>
    <div v-if="['footer', 'all'].includes(route.meta.layout || '')" class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  width: 100%;
  height: 100%;
  .navbar {
    height: 52px;
  }
  .app-main {
    // height: calc(100% - 52px - 53px);
    // overflow: auto;
  }
  .footer {
    height: 52px;
  }
}
</style>
