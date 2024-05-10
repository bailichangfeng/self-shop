import { checkStatus } from "@/helper/checkStatus";
import router from "@/router";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import useUserStore from "@/store/modules/user";

// const envBaseConfig = {};
// if (import.meta.env) {
//   // env = process.env.parsed.NODE_ENV;
//   envBaseConfig = import.meta.env;
// }

const defaultConfigs = {
  // baseUrl: envBaseConfig.VITE_APP_CONTEXT_PATH;,
  timeout: 30000,
  withCredentials: true
};

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean;
}

interface ResultData<T> {
  resultCode?: string;
  code: string;
  msg: string;
  data: T;
}

class HttpRequest {
  service: AxiosInstance;
  public constructor(config: AxiosRequestConfig) {
    const allConfig = Object.assign(defaultConfigs, config);
    this.service = axios.create(allConfig);
    this.service.interceptors.request.use(
      (config: CustomAxiosRequestConfig): CustomAxiosRequestConfig => {
        // console.log("request config", config);
        const userStore = useUserStore();
        if (config.headers && typeof config.headers.set === "function") {
          config.headers.set("x-access-token", userStore.token);
          config.headers.set("token", userStore.token);
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response;
        if (response.data.resultCode == 416) {
          ElMessage.error("登录过期，请重新登录！");
          // router.replace("/login");
        }
        return data;
      },

      async (error: AxiosError) => {
        const { response } = error;
        // 请求超时 && 网络错误单独判断，没有 response
        if (error.message.indexOf("timeout") !== -1) ElMessage.error("请求超时！请您稍后重试");
        if (error.message.indexOf("Network Error") !== -1) ElMessage.error("网络错误！请您稍后重试");
        // 根据服务器响应的错误状态码，做不同的处理
        if (response) checkStatus(response.status);
        // 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
        if (!window.navigator.onLine) router.replace("/500");
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(url: string, params?: object | string, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { ...params, ..._object });
  }
  download(url: string, params?: object, _object = {}): Promise<BlobPart> {
    return this.service.post(url, params, { ..._object, responseType: "blob" });
  }
}

const http = new HttpRequest({});
export { http, HttpRequest };

// export default axios;
