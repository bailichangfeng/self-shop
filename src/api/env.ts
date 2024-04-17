interface apiUrl {
  bdcUrl: string;
  bdc_custom_vs: string;
  bdc_custom_url: string;

  gateway: string;
  gateway4: string;
  metadata_url: string;
  userGroup_url: string;

  client_info_vs?: string;
  client_info_url?: string;
}

let apiUrl: apiUrl;
const envType = import.meta.env.NODE_ENV;
console.log(envType);

if (envType == "development") {
  apiUrl = {
    bdcUrl: "https://gateway.yingxiong.com/bdc4-server",
    bdc_custom_vs: "v1.0",
    bdc_custom_url: "https://test-gateway.yingxiong.com/bdc-custom-v2", // 11-15 11:30 新测试地址

    gateway: "https://test-gateway.yingxiong.com",
    gateway4: "https://test-gateway.yingxiong.com/bdc4-gateway",
    metadata_url: "https://test-gateway.yingxiong.com/metadata",
    userGroup_url: "https://test-gateway.yingxiong.com/user-groups-v2"
  };
} else if (envType == "test") {
  apiUrl = {
    bdcUrl: "https://gateway.yingxiong.com/bdc4-server",
    bdc_custom_vs: "v1.0",
    bdc_custom_url: "https://test-gateway.yingxiong.com/bdc-custom-v2", // 11-15 11:30 新测试地址

    gateway: "https://test-gateway.yingxiong.com",
    gateway4: "https://test-gateway.yingxiong.com/bdc4-gateway",
    metadata_url: "https://test-gateway.yingxiong.com/metadata",
    userGroup_url: "https://test-gateway.yingxiong.com/user-groups-v2"
  };
} else {
  apiUrl = {
    bdcUrl: "https://gateway.yingxiong.com/bdc4-server",
    bdc_custom_vs: "v1.0",
    bdc_custom_url: "https://gateway.yingxiong.com/bdc-custom", // 11-15 11:30 新测试地址

    gateway: "https://gateway.yingxiong.com",
    gateway4: "https://gateway.yingxiong.com/bdc4-gateway",
    metadata_url: "https://gateway.yingxiong.com/metadata",
    userGroup_url: "https://gateway.yingxiong.com/user-groups",

    // 埋点用配置地址
    client_info_vs: "1.0",
    client_info_url: "https://client-info-bdc.yingxiong.com"
  };
}
export default apiUrl;
