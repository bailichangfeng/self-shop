import { defineStore } from "pinia";
import { GameState } from "../interface";

const useGameStore = defineStore("game", {
  state: (): GameState => ({
    currentGame: "",
    gameOptions: []
  }),

  actions: {
    async updateGame(game: string) {
      this.currentGame = game;
    },

    async getGameOptions() {
      // const { data } = await getShopUser<ShopUserInfo>();
      const data = [
        { label: "巅峰战舰", value: "game1" },
        { label: "遇见龙", value: "game2" }
      ];
      this.gameOptions = data;
    }
  }
});

export default useGameStore;
