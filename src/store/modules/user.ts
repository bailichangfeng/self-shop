import { defineStore } from "pinia";
import { UserState } from "../interface";

// 第一个参数是应用程序中 store 的唯一 id
const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      userInfo: {
        name: "",
        userId: null
      }
    };
  }
  // other options...
});

export default useUserStore;
