import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

import { errorRoutes } from "./modules/staticRouter";
import layout from "@/layouts/index.vue";
// import { getLocal } from "@/utils";

let envBaseConfig = {};
if (import.meta.env) {
  // env = process.env.parsed.NODE_ENV;
  envBaseConfig = import.meta.env;
}
console.log(envBaseConfig);

declare module "vue-router" {
  export interface RouteMeta {
    title: string;
    layout?: string;
    siderbarGroup?: number;
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    name: "layout",
    redirect: "/fullPage",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: { keepAlive: true, layout: "all", title: "商城首页" }
      },
      {
        path: "/hello",
        name: "hello",
        component: () => import("@/components/HelloWorld.vue"),
        meta: { keepAlive: true, title: "欢迎页", layout: "all" }
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/shop/User.vue"),
        meta: {
          keepAlive: true,
          title: "用户中心",
          index: 1,
          layout: "all",
          siderbarGroup: 1
        }
      },
      {
        path: "/category",
        name: "category",
        component: () => import("@/views/shop/Category.vue"),
        meta: {
          title: "分类",
          siderbarGroup: 1,
          layout: "all"
        }
      },
      {
        path: "/fullPage",
        name: "fullPage",
        component: () => import("@/views/fullPage/index.vue"),
        meta: { keepAlive: true, title: "全游戏首页" }
      },
      {
        path: "/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
        meta: { title: "登录", keepAlive: true, layout: "footer" }
      }
    ]
  },

  {
    path: "/product-list",
    name: "product-list",
    component: () => import("@/views/shop/ProductList.vue")
  },
  {
    path: "/product/:id",
    name: "product",
    component: () => import("@/views/shop/ProductDetail.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/shop/Cart.vue")
  },
  {
    path: "/create-order",
    name: "create-order",
    component: () => import("@/views/shop/CreateOrder.vue")
  },
  {
    path: "/address",
    name: "address",
    component: () => import("@/views/shop/Address.vue")
  },
  {
    path: "/address-edit",
    name: "address-edit",
    component: () => import("@/views/shop/AddressEdit.vue")
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/shop/Order.vue")
  },
  {
    path: "/order-detail",
    name: "order-detail",
    component: () => import("@/views/shop/OrderDetail.vue")
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/views/shop/Setting.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/shop/About.vue")
  }
];

const router = createRouter({
  // history: createWebHistory(envBaseConfig.VITE_APP_STATE),
  history: createWebHistory(),
  routes: [...routes, ...errorRoutes] // `routes: routes` 的缩写
});

export default router;
