import { HttpRequest } from "../index";
// import apiUrl from "./env";
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

export const getHome = <T>() => {
  return shopHttp.get<T>("/index-infos");
};

export const getCart = <T>(params: any) => {
  return shopHttp.get<T>("/shop-cart", params);
};

export const getShopUser = <T>() => {
  return shopHttp.get<T>("/user/info");
};

export const getDetail = <T>(id: any) => {
  return shopHttp.get<T>(`/goods/detail/${id}`);
};

export const addCart = <T>(data: { goodsCount: number; goodsId: number }) => {
  return shopHttp.post<T>("/shop-cart", data);
};

export const deleteCartItem = <T>(id: any) => {
  return shopHttp.delete<T>(`/shop-cart/${id}`);
};

export const modifyCart = <T>(params: any) => {
  return shopHttp.put<T>("/shop-cart", params);
};

export const getByCartItemIds = <T>(params: any) => {
  return shopHttp.get<T>("/shop-cart/settle", params);
};

export const getAddressDetail = <T>(id: any) => {
  return shopHttp.get<T>(`/address/${id}`);
};
export const getAddressList = <T>() => {
  return shopHttp.get<T>("/address", { pageNumber: 1, pageSize: 1000 });
};
export const getDefaultAddress = <T>() => {
  return shopHttp.get<T>("/address/default");
};
export const DeleteAddress = <T>(id: any) => {
  return shopHttp.delete<T>(`/address/${id}`);
};
export const EditAddress = <T>(params: any) => {
  return shopHttp.put<T>("/address", params);
};
export const addAddress = <T>(params: any) => {
  return shopHttp.post<T>("/address", params);
};

export const getCategory = <T>() => {
  return shopHttp.get<T>("/categories");
};
export const search = <T>(params: any) => {
  return shopHttp.get<T>("/search", params);
};

export const payOrder = <T>(params: any) => {
  return shopHttp.get<T>("/paySuccess", params);
};
export const createOrder = <T>(params: any) => {
  return shopHttp.post<T>("/saveOrder", params);
};
export const getOrderList = <T>(params: any) => {
  return shopHttp.get<T>("/order", params);
};
export const getOrderDetail = <T>(id: any) => {
  return shopHttp.get<T>(`/order/${id}`);
};
export const cancelOrder = <T>(id: any) => {
  return shopHttp.put<T>(`/order/${id}/cancel`);
};
export const confirmOrder = <T>(id: any) => {
  return shopHttp.put<T>(`/order/${id}/finish`);
};

export const getUserInfo = <T>() => {
  return shopHttp.put<T>("/user/info");
};
export const EditUserInfo = <T>(params: any) => {
  return shopHttp.put<T>(`/user/info`, params);
};
export const logout = <T>() => {
  return shopHttp.post<T>(`/user/logout`);
};
