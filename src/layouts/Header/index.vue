<script setup lang="ts">
import { ArrowDown } from "@element-plus/icons-vue";
import useGameStore from "@/store/modules/game";
import useShopStore from "@/store/modules/shop";
import useUserStore from "@/store/modules/user";

import { storeToRefs } from "pinia";

const gameStore = useGameStore();
const { gameOptions, currentGame } = storeToRefs(gameStore);

const shopStore = useShopStore();
const userStore = useUserStore();

const gameChange = (game: string) => {
  console.log("游戏切换", game);
  console.log(gameStore);
  // gameStore.updateGame(game);
};

const out = () => {
  console.log("退出");
  userStore.logout();
};
</script>

<template>
  <div class="header">
    <div class="header-left">
      <el-select v-model="currentGame" placeholder="请选择游戏" style="width: 100px" @change="gameChange">
        <el-option v-for="game in gameOptions" :key="game.value" :label="game.label" :value="game.value"></el-option>
      </el-select>
      <div v-if="userStore.token" class="user-info">
        <div>欢迎你,{{ userStore.shopUserInfo.nickName }}</div>
        <el-button type="primary" @click="out">退出</el-button>
      </div>
      <!-- <div v-else class="user-info">请登录</div> -->
      <router-link v-else to="/login" class="user-info">请登录</router-link>
    </div>

    <div class="header-right">
      <router-link to="/hello" class="nav-item">hello</router-link>
      <router-link to="/home" class="nav-item">home</router-link>

      <el-dropdown trigger="click" class="nav-item">
        <span class="el-dropdown-link">
          我的商城
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <!-- <el-button type="primary" @click="out">退出</el-button> -->
              <router-link to="/order">我的订单</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/address">地址管理</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/user">我的信息</router-link>
            </el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <router-link to="/hello" class="nav-item">IP首页</router-link>
      <router-link to="/cart" class="nav-item">购物车({{ shopStore.count }})</router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  background: var(--el-color-primary);
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  // height: 32px;
  padding: 10px 20px;
  .header-left {
    display: flex;
    align-items: center;
    .user-info {
      display: flex;
      margin-left: 20px;
      align-items: center;
      .el-button {
        margin-left: 10px;
      }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .nav-item {
      margin-left: 12px;
    }
  }
}
</style>
@/store/modules/user
