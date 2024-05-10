<template>
  <section class="main">
    <!-- <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component" v-if="!route.meta.link" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view> -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="keepAliveName">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
    <!-- <iframe-toggle /> -->
  </section>
</template>

<script setup lang="ts">
defineProps<{ keepAliveName: string[] }>();
</script>

<style lang="less" scoped>
.main {
  /* 50= navbar  50  */
  // min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .main {
  padding-top: 50px;
}

.hasTagsView {
  .main {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .main {
    padding-top: 84px;
  }
}
</style>
