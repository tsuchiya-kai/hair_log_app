import axios from "axios";

// 参考: https://qiita.com/YU-TA-9/items/f40430d9ae2ed585d236
const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    // 例) 認証トークンをヘッダーに付与
    // config.headers.common["Authorization"] = "Bearer " + process.env.TOKEN;
    return config;
  },
  (error: unknown) => {
    if (error instanceof Error) return Promise.reject(error);
  }
);

instance.interceptors.response.use((response) => {
  console.log("from axios interceptor response methods console!", { response });
  return response;
});

export default instance;
