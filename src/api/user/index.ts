import { HttpRequest } from "../index";

const shopHttp = new HttpRequest({
  // baseURL: apiUrl.bdcUrl
  baseURL: import.meta.env.MODE == "development" ? "//backend-api-01.newbee.ltd/api/v1" : "//backend-api-01.newbee.ltd/api/v1"
});

export const login = <T>(loginIno = { loginName: "6", passwordMd5: "6" }) => {
  return shopHttp.post<T>("/user/login", loginIno);
};

export const register = <T>(RegisterInfo: { loginName: string; password: string }) => {
  return shopHttp.post<T>("/user/register", RegisterInfo);
};
