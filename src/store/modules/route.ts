import { defineStore } from "pinia";

const useRouteStore = defineStore("route", {
  state: () => {
    return {
      routes: []
    };
  }
});

export default useRouteStore;
