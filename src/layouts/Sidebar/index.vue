<script setup lang="ts">
import { RouteRecordRaw } from "vue-router";
import SubMenu from "./SubMenu.vue";
defineProps<{ menuList: RouteRecordRaw[] }>();

const activeMenu = "";
</script>

<template>
  <el-menu :router="false" :default-active="activeMenu" :collapse-transition="false">
    <SubMenu :menu-list="menuList" />
  </el-menu>
</template>

<style lang="less" scoped></style>
