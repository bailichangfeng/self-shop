import { defineStore } from "pinia";
import { ShopUserState } from "../interface";

import { ShopUserInfo } from "@/api/interface/shop";
import { LoginInfo, RegisterInfo } from "@/api/interface/shop";

// import { login, register } from "@/api/shopUser/index";
import { getShopUser, login, register } from "@/api/shop/index";

import router from "@/router";
import { setLocal } from "@/utils";
import piniaPersistConfig from "../helper/persist";

const useUserStore = defineStore("userInfo", {
  state: (): ShopUserState => ({
    token: "",
    shopUserInfo: {
      introduceSign: "",
      loginName: "",
      nickName: ""
    }
  }),

  actions: {
    async getShopUserInfo() {
      if (!this.shopUserInfo.loginName) {
        const { data } = await getShopUser<ShopUserInfo>();
        this.shopUserInfo = data;
      }
    },

    async login(loginInfo: LoginInfo) {
      await login<string>(loginInfo).then(res => {
        if (res.resultCode == "200") {
          setLocal("token", res.data);
          this.token = res.data;
          router.push("/home");
        }
      });
    },

    async register(RegisterInfo: RegisterInfo) {
      await register<string>(RegisterInfo).then(res => {
        console.log("注册", res);
      });
    },

    logout() {
      setLocal("token", "");
      this.token = "";
      this.shopUserInfo = {
        introduceSign: "",
        loginName: "",
        nickName: ""
      };
      router.push("/login");
    }
  },

  persist: piniaPersistConfig("shopUser", ["token"])
});

export default useUserStore;
