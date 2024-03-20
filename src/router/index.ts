import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/store/modules/user";
import useRouteStore from "@/store/modules/route";

let envBaseConfig = {};
if (import.meta.env) {
  // env = process.env.parsed.NODE_ENV;
  envBaseConfig = import.meta.env;
}

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },

  { path: "/home", name: "Home", component: () => import("@/views/Home.vue") },
  { path: "/demo", name: "Demo", component: () => import("@/views/Demo.vue") }
];

const router = createRouter({
  history: createWebHistory(envBaseConfig.VITE_APP_STATE),
  routes // `routes: routes` 的缩写
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const routeStore = useRouteStore();

  console.log(userStore);
  if (routeStore.routes.length) {
    console.log(routes);
  } else {
    await store.dispatch("user/getInfo");
    next({ ...to, replace: true });
  }
  next();
});

export default router;
