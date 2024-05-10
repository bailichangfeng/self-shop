<script setup lang="ts">
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { showSuccessToast } from "vant";
import { Sunny, Moon } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";
import useUserStore from "@/store/modules/user";
import useGlobalStore from "@/store/modules/global";
import { useTheme } from "@/hooks/useTheme";

defineProps<{ msg?: string }>();
const router = useRouter();
// console.log(router);
// console.log(router.options.routes);
// console.log(router.getRoutes());

const count = ref<number>(0);
const userStore = useUserStore();
const { token } = storeToRefs(userStore);

const realname = ref(userStore.shopUserInfo.loginName);

const goLogin = () => {
  if (!userStore.token) {
    router.push({ path: "/login" });
  } else {
    showSuccessToast("已经登陆,token为" + userStore.token);
  }
};

watch(realname, (newVal, oldVal) => {
  console.log(newVal, oldVal);
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
  <div>
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
    <van-button @click="goLogin">去login页面</van-button>
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>

    <el-button type="primary">测试</el-button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
@/store/modules/user
