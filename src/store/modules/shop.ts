import { defineStore } from "pinia";
import { ShopState } from "../interface";
import { ShopUserInfo } from "@/api/interface/shop";

import { getCart, getShopUser } from "@/api/shop";

const useShopInfo = defineStore("shopInfo", {
  state: (): ShopState => ({
    count: 0,
    shopUserInfo: {
      introduceSign: "",
      loginName: "",
      nickName: ""
    }
  }),

  actions: {
    async updateCart() {
      const { data = [] } = await getCart<Array<string>>();
      this.count = data.length;
    },

    async getShopUserInfo() {
      if (!this.shopUserInfo.loginName) {
        const { data } = await getShopUser<ShopUserInfo>();
        this.shopUserInfo = data;
      }
    }
  }
});

export default useShopInfo;
