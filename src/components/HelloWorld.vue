<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";

import GameSelect from "./GameSelect.vue";
import GameSelect2 from "./GameSelect2.vue";
import { showSuccessToast } from "vant";
import { Sunny, Moon } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import useGlobalStore from "@/store/modules/global";
import { useTheme } from "@/hooks/useTheme";

defineProps<{ msg?: string }>();
const router = useRouter();

const count = ref<number>(0);
const userStore = useUserStore();
const { token } = storeToRefs(userStore);

const realname = ref(userStore.userInfo.realname);

console.log(router);
console.log(router.options.routes);
console.log(router.getRoutes());

const goLogin = () => {
  if (!userStore.token) {
    router.push({ path: "/login" });
  } else {
    showSuccessToast("已经登陆,token为" + userStore.token);
  }
};

// 默认主题颜色
// const DEFAULT_PRIMARY: string = "#009688";
// const globalStore = useGlobalStore();
// const { primary, isDark, isGrey, isWeak, layout, asideInverted, headerInverted } = storeToRefs(globalStore);
// // 修改主题颜色
// const changePrimary = (val: string | null) => {
//   if (!val) {
//     val = DEFAULT_PRIMARY;
//     showSuccessToast({ type: "success", message: `主题颜色已重置为 ${DEFAULT_PRIMARY}` });
//   }
//   // 计算主题颜色变化
//   document.documentElement.style.setProperty("--el-color-primary", val);
//   document.documentElement.style.setProperty(
//     "--el-color-primary-dark-2",
//     isDark.value ? `${getLightColor(val, 0.2)}` : `${getDarkColor(val, 0.3)}`
//   );
//   for (let i = 1; i <= 9; i++) {
//     const primaryColor = isDark.value ? `${getDarkColor(val, i / 10)}` : `${getLightColor(val, i / 10)}`;
//     document.documentElement.style.setProperty(`--el-color-primary-light-${i}`, primaryColor);
//   }
//   globalStore.setGlobalState("primary", val);
// };

watch(realname, (newVal, oldVal) => {
  console.log(newVal, oldVal);
  console.log(777);
  // {
  //   immediate: true;
  // }
});

const globalStore = useGlobalStore();
const { primary, isDark } = storeToRefs(globalStore);
const colorList = ["#009688", "#536DFE", "#FF5C93", "#FFC069", "#34C385", "#13C2C0", "#5091F5", "#AC84F8"];
const { switchDark, changePrimary } = useTheme();
</script>

<template>
  <div class="theme-item">
    <span>主题颜色</span>
    <el-color-picker v-model="primary" :predefine="colorList" @change="changePrimary" />
  </div>
  <div class="theme-item">
    <span>暗黑模式</span>
    <el-switch v-model="isDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" @change="switchDark" />
  </div>
  <div style="border: 1px solid red; width: 100px; height: 100px"></div>
  <svg-icon name="page" />
  <div>{{ realname }}</div>
  <el-input v-model="token"></el-input>

  {{ userStore }}
  <h1>{{ msg }}</h1>
  <GameSelect></GameSelect>
  <GameSelect2></GameSelect2>
  <van-button @click="goLogin">去login页面</van-button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>

  <el-button type="primary">测试</el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
