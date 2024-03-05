import HYRequest from "./request";

const hyRequest = new HYRequest({
  baseURL:'http://123.207.32.32:8000/',
  timeout:10000,
  //一个范例的拦截器
  interceptors:{
    requestInterceptor:(config) => {
      //这里可以写携带token
      const token = ''
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      console.log("请求成功的拦截")
      return config
    }
  }
})

export default hyRequest
