<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";
import useGlobalStore from "@/store/modules/global";
import en from "element-plus/es/locale/lang/en";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { computed, reactive } from "vue";
import { useTheme } from "./hooks/useTheme";

type AssemblySizeType = "large" | "default" | "small";
// init language
const i18n = useI18n();
const { initTheme } = useTheme();
initTheme();

const globalStore = useGlobalStore();

onMounted(() => {
  const language = getBrowserLang();
  i18n.locale.value = language;
  // globalStore.setGlobalState("language", language as LanguageType);
});

// element language
const locale = computed(() => {
  if (i18n.locale.value == "zh") return zhCn;
  if (i18n.locale.value == "en") return en;
  return getBrowserLang() == "zh" ? zhCn : en;
});

// element assemblySize
const assemblySize = computed(() => globalStore.assemblySize);

// element button config
const buttonConfig = reactive({ autoInsertSpace: false });
</script>

<template>
  <el-config-provider :locale="locale" :size="assemblySize as AssemblySizeType" :button="buttonConfig">
    <router-view></router-view>
  </el-config-provider>
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
