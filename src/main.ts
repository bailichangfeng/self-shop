import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./router/permission";

import store from "./store";

import SvgIcon from "@/components/common/SvgIcon.vue";
import ElementPlus from "element-plus";
import i18n from "./languages";
import vant from "vant";
import "vant/lib/index.css";

import "@/assets/css/reset.css";
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";

import "virtual:svg-icons-register";

const app = createApp(App);

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url: string) {
    if (url && url.startsWith("http")) {
      return url;
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`;
      return url;
    }
  }
};

app.use(store).use(router).use(ElementPlus).use(i18n).use(vant);
app.component("SvgIcon", SvgIcon);
app.mount("#app");

interface filter {
  prefix: (url: string) => string;
}

declare module "vue" {
  export interface ComponentCustomProperties {
    $filters: filter;
  }
}
