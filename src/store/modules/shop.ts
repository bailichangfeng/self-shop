import { defineStore } from "pinia";
import { ShopState } from "../interface";

import { getCart } from "@/api/shop/index";

// import piniaPersistConfig from "../helper/persist";

const useShopStore = defineStore("shopInfo", {
  state: (): ShopState => ({
    count: 0
  }),

  actions: {
    async updateCart() {
      const { data = [] } = await getCart<Array<string>>({});
      this.count = data.length;
    }
  }

  // persist: piniaPersistConfig()
});

export default useShopStore;
