import { HttpRequest } from "../http";
// import apiUrl from "./env";

const bdcHttp = new HttpRequest({
  // baseURL: apiUrl.bdcUrl
  baseURL: import.meta.env.MODE == "development" ? "//backend-api-01.newbee.ltd/api/v1" : "//backend-api-01.newbee.ltd/api/v1"
});

export const login = <T>(params: { type: string }) => {
  return bdcHttp.get<T>("currentUser", { params });
};

export const register = <T>(params: { type: string }) => {
  return bdcHttp.get<T>("currentUser", { params });
};
