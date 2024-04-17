import { HttpRequest } from "./http";
import { LoginInfo, RegisterInfo } from "@/api/interface/shop";

// import apiUrl from "./env";

const bdcHttp = new HttpRequest({
  // baseURL: apiUrl.bdcUrl
  baseURL: "https://bdc4.yingxiong.com"
});

export const getUserInfo = <T>(params: { type: string }) => {
  return bdcHttp.get<T>("currentUser", { params });
};

const shopHttp = new HttpRequest({
  // baseURL: apiUrl.bdcUrl
  baseURL: import.meta.env.MODE == "development" ? "//backend-api-01.newbee.ltd/api/v1" : "//backend-api-01.newbee.ltd/api/v1"
});

export const login = <T>(loginIno: LoginInfo = { loginName: "6", passwordMd5: "6" }) => {
  return shopHttp.post<T>("/user/login", loginIno);
};

export const register = <T>(RegisterInfo: RegisterInfo) => {
  return shopHttp.post<T>("/user/register", RegisterInfo);
};
