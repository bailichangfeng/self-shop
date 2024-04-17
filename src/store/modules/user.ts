import { defineStore } from "pinia";
import { UserState } from "../interface";
import { LoginInfo, RegisterInfo } from "@/api/interface/shop";
import { getUserInfo, login, register } from "@/api/user";
import { setLocal } from "@/utils";
import router from "@/router";
import piniaPersistConfig from "../helper/persist";
// 第一个参数是应用程序中 store 的唯一 id
const useUserStore = defineStore("user", {
  state: (): UserState => {
    return {
      userInfo: {
        realname: "",
        bdcId: null
      },

      token: ""
    };
  },

  getters: {
    userNameGet: state => state.userInfo.realname
  },

  // other options...
  actions: {
    async getUserInfo() {
      // 可以返回一个 Promise
      await getUserInfo<UserState["userInfo"]>({ type: "custom" }).then(res => {
        console.log(res);
        const info = { realname: res.data.realname, bdcId: res.data.bdcId };
        this.setBdcUserInfo(info);
      });
    },

    setBdcUserInfo(userInfo: UserState["userInfo"]) {
      this.userInfo = userInfo;
    },

    async login(loginInfo: LoginInfo) {
      await login<string>(loginInfo).then(res => {
        console.log(res);
        if (res.resultCode == "200") {
          setLocal("token", res.data);
          this.token = res.data;
          console.log(router);
          router.push("/home");
        }
      });
    },

    async register(RegisterInfo: RegisterInfo) {
      await register<string>(RegisterInfo).then(res => {
        console.log(res);
      });
    }
  },

  persist: piniaPersistConfig("user", ["token"])
});

export default useUserStore;
