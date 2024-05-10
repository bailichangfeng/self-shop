import router from "./index";
import useUserStore from "@/store/modules/user";
import useGameStore from "@/store/modules/game";
// import useRouteStore from "@/store/modules/route";

const ROUTER_WHITE_LIST = ["/login", "/404", "/fullPage", "/home"];

router.beforeEach(async (to, from, next) => {
  // console.log(to);

  // 判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行  还不确定登陆鉴权方式 确定后要判断是否登陆 不再让跳转login或其他页面
  // if (ROUTER_WHITE_LIST.includes(to.path)) next();
  const gameStore = useGameStore();
  const shopInfo = useUserStore();
  // console.log(shopInfo);

  // 先判断有没有游戏
  if (gameStore.gameOptions.length == 0) {
    gameStore.getGameOptions();
    next({ ...to, replace: true });
  } else {
    if (ROUTER_WHITE_LIST.includes(to.path)) {
      if (shopInfo.token && !shopInfo.shopUserInfo.loginName) {
        await shopInfo.getShopUserInfo();
      }
      next();
    } else {
      if (!shopInfo.token) {
        next("/login");
      } else {
        if (!shopInfo.shopUserInfo.loginName) {
          await shopInfo.getShopUserInfo();
        }
        next();
      }
    }
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
