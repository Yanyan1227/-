import HYRequest from "./request";
import localCache from '@/utils/cache';

const token =  localCache.getCache('token')
const hyRequest = new HYRequest({
  baseURL:'http://123.207.32.32:5000',
  timeout:10000,
  //一个范例的拦截器
  interceptors:{
    requestInterceptor:(config) => {
      //这里可以写携带token
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log("请求成功的拦截")
      return config
    }
  }
})

export default hyRequest
