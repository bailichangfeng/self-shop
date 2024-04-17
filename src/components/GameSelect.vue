<template>
  <div class="nav-game-select">
    <!-- <el-select v-model="appkey" filterable placeholder="请选择" :filter-method="remoteMethod" @visible-change="visibleChange" @change="handleSelect">
      <el-option v-for="item in options" :key="item.appkey" :label="item.name" :value="item.appkey" />
    </el-select> -->

    <el-cascader
      v-model="completeAppkey"
      filterable
      placeholder="请选择"
      :filter-method="remoteMethod"
      :options="optionscopy"
      @visible-change="visibleChange"
      @change="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import useUserStore from "@/store/modules/user";
interface GameOptions {
  label: string;
  value: number;
  children: {
    label: string;
    value: string;
    appId: string;
    env: string;
    envName: string;
    appkey: string;
    gamekey: string;
    gameName: string;
    icon: string;
  }[];
}
const userStore = useUserStore();
let options = reactive<GameOptions[]>([]);
let optionscopy = reactive<GameOptions[]>([
  {
    value: 10003, // 一级唯一标识
    label: "创造与魔法-大陆", // 一级显示名
    children: [
      {
        value: "cli_IKRM91HC5qBXhIKv", // 应用id,二级唯一标识
        label: "创造与魔法-大陆-开发环境的应用", // 二级显示名
        appId: "cli_IKRM91HC5qBXhIKv",
        env: "TEST",
        envName: "开发环境",
        appkey: "6b2cec81030e4e1996f615ad8193bc14",
        gamekey: "10003",
        gameName: "创造与魔法-大陆",
        icon: "https://nps-bdc.yingxiong.com/testGatewayFile/api/file/loadFileBinary?fileId=915037"
      },
      {
        value: "cli_IKRM91HC5qBXhIKv2", // 应用id,二级唯一标识
        label: "创造与魔法-大陆-测试环境的应用", // 二级显示名
        appId: "cli_IKRM91HC5qBXhIKv",
        env: "TEST",
        envName: "测试环境",
        appkey: "6b2cec81030e4e1996f615ad8193bc14",
        gamekey: "10003",
        gameName: "创造与魔法-大陆",
        icon: "https://nps-bdc.yingxiong.com/testGatewayFile/api/file/loadFileBinary?fileId=915037"
      }
    ]
  }
]);

const completeAppkey = computed(() => {
  return userStore.userInfo.name ? [userStore.userInfo.name.split("-")[0], userStore.userInfo.name.split("-")[1]] : [];
});

const handleSelect = async (val: string) => {
  console.log("选择了什么游戏", val);
  // 设置运营管理模块的环境变量为空
  // if(this.$route.meta.menuName==='operate'){
};

const remoteMethod = (node, query: string) => {
  options = [];
  console.log(node);
  console.log(query);

  const value = query.toLowerCase().replace(new RegExp("^\\s*|\\s*$", "g"), ""); // 转小写 去两头空格
  return String(node.text).toLowerCase().indexOf(value) > -1;
  // if (value) {
  //   options = optionscopy.filter(item => {
  //     let flag = false;
  //     if (String(item["value"]).toLowerCase().indexOf(value) > -1) {
  //       flag = true;
  //     } else {
  //       if (item.children.filter(chlItem => String(chlItem["value"]).toLowerCase().indexOf(value) > -1).length > 0) {
  //         flag = true;
  //       }
  //     }
  //     console.log(flag);

  //     return flag;
  //   });
  // } else {
  //   options = JSON.parse(JSON.stringify(optionscopy));
  // }
  console.log(options);
};

const visibleChange = (val: boolean) => {
  if (val) {
    options = JSON.parse(JSON.stringify(optionscopy));
    console.log(options);
  } else {
    options = [];
  }
};
</script>

<style>
.nav-game-select {
  width: 216px;
  height: 40px;
  margin-right: 40px;

  .el-select {
    width: 100%;
  }
}
</style>
