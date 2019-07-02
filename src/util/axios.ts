import axios from 'axios';

class HttpRequest {
  public queue: {};
  public baseUrl: any;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.queue = {};
  }
  public getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    };
    return config;
  }
  public destroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // 全局loading结束
    }
  }
  public interceptors(instance, url) {
    // 请求拦截
    instance.interceptors.request.use(
      (config) => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          // 全局loading..
        }
        this.queue[url] = true;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res) => {
        this.destroy(url);
        const { data, status } = res;
        return {
          data,
          status,
        };
      },
      (error) => {
        this.destroy(url);
        return Promise.reject(error);
      },
    );
  }
  public request(options) {
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance, options.url);
    return instance(options);
  }
}
export default HttpRequest;
