<template>
  <header class="simple-header van-hairline--bottom">
    <van-icon v-if="!isback" name="arrow-left" @click="goBack" />
    <!-- <i v-if="!isback" class="nbicon nbfanhui" @click="goBack"></i> -->
    <i v-else>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
    <div class="simple-header-name">{{ name }}</div>
    <i class="nbicon nbmore"></i>
  </header>
  <div class="block" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
// const props = defineProps<{ name: string; back?: string; noback?: boolean }>();

const props = withDefaults(defineProps<{ name: string; back?: string; noback?: boolean }>(), {
  name: "canvas",
  back: "/home",
  noback: false
});

// const emitss = defineEmits<{
//   "update:value": [value: string];
//   "check-validate": [];
// }>();

// const emits = defineEmits<{
//   search: [];
//   reset: [];
//   dargSort: [{ newIndex?: number; oldIndex?: number }];
// }>();

const emit = defineEmits<{
  callback: [];
}>();

const isback = ref(props.noback);
const router = useRouter();
const goBack = () => {
  if (!props.back) {
    router.go(-1);
  } else {
    router.push({ path: props.back });
  }
  emit("callback");
};
</script>

<style lang="less" scoped>
@import "@/style/mixin.less";
.simple-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
  .fj();
  .wh(100%, 44px);
  line-height: 44px;
  padding: 0 10px;
  .boxSizing();
  color: #252525;
  background: #fff;
  .simple-header-name {
    font-size: 14px;
  }
}
.block {
  height: 44px;
}
</style>
