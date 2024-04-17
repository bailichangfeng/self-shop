import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/store/modules/user";
// import useRouteStore from "@/store/modules/route";
import { errorRoutes } from "./modules/staticRouter";
import layout from "@/layouts/index.vue";
// import { getLocal } from "@/utils";

let envBaseConfig = {};
if (import.meta.env) {
  // env = process.env.parsed.NODE_ENV;
  envBaseConfig = import.meta.env;
}
console.log(envBaseConfig);

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    redirect: "/home",
    children: [{ path: "/home", name: "home", component: () => import("@/views/Home.vue") }]
  },
  { path: "/hello", name: "hello", component: () => import("@/components/HelloWorld.vue") },
  { path: "/login", name: "Login", component: () => import("@/views/Login.vue") },
  { path: "/demo", name: "Demo", component: () => import("@/views/Demo.vue") },
  // { path: "/home", name: "Home", component: () => import("@/views/Home.vue") },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/shop/User.vue"),
    meta: {
      index: 1
    }
  },
  {
    path: "/product-list",
    name: "product-list",
    component: () => import("@/views/shop/ProductList.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/category",
    name: "category",
    component: () => import("@/views/shop/Category.vue"),
    meta: {
      index: 1
    }
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("@/views/shop/ProductDetail.vue"),
    meta: {
      index: 3
    }
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/shop/Cart.vue"),
    meta: {
      index: 1
    }
  },
  {
    path: "/create-order",
    name: "create-order",
    component: () => import("@/views/shop/CreateOrder.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/shop/Address.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/address-edit",
    name: "address-edit",
    component: () => import("@/views/shop/AddressEdit.vue"),
    meta: {
      index: 3
    }
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/shop/Order.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/order-detail",
    name: "order-detail",
    component: () => import("@/views/shop/OrderDetail.vue"),
    meta: {
      index: 3
    }
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/views/shop/Setting.vue"),
    meta: {
      index: 2
    }
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/shop/About.vue"),
    meta: {
      index: 2
    }
  }
];

const router = createRouter({
  // history: createWebHistory(envBaseConfig.VITE_APP_STATE),
  history: createWebHistory(),
  routes: [...routes, ...errorRoutes] // `routes: routes` 的缩写
});

const ROUTER_WHITE_LIST = ["/login", "/404"];

router.beforeEach(async (to, from, next) => {
  console.log(to);

  // 判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
  if (ROUTER_WHITE_LIST.includes(to.path)) return next();

  const userStore = useUserStore();
  // const routeStore = useRouteStore();
  console.log(userStore.userInfo);
  const token = userStore.token;

  if (token) {
    if (!userStore.token) {
      userStore.token = token;
    }
    next();
  } else {
    next("/login");
  }
  // if (userStore.userInfo.bdcId) {
  //   console.log("用户信息已获取");
  //   if (routeStore.routes.length) {
  //     next("home");
  //   } else {
  //     // await userStore.dispatch("user/getInfo");
  //     // next({ ...to, replace: true });
  //   }
  // } else {
  //   console.log("用户信息未获取");
  //   try {
  //     await userStore.getUserInfo();
  //   } catch (err) {
  //     console.log(err);
  //     console.log("second");
  //     if (!userStore.userInfo.bdcId) {
  //       next("/404");
  //       userStore.setBdcUserInfo({ realname: "res.data.realname", bdcId: "777" });
  //       console.log(userStore);
  //     }
  //   }
  // }
});

export default router;
