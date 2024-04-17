import { defineStore } from "pinia";
import piniaPersistConfig from "../helper/persist";

const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      // 当前系统语言
      language: null,
      // element 组件大小
      assemblySize: "default",
      // 主题颜色
      primary: "#009688",
      // 深色模式
      isDark: false
    };
  },

  actions: {
    setGlobalState(...args: any) {
      this.$patch({ [args[0]]: args[1] });
      // this[args[0]] = args[1];
    }
  },

  persist: piniaPersistConfig("global")
});

export default useGlobalStore;
