import axios from "axios";
import type { AxiosInstance,AxiosRequestConfig } from "axios";
import type {HYRequestInterceptors,HYRequestConfig} from './type'
import { ElLoading } from 'element-plus'

class HYRequest {
  instance:AxiosInstance
  interceptors?:HYRequestInterceptors
  // loading = ElLoading.service()

  //拓展类型
  constructor(config : HYRequestConfig){
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    //从config取出来的拦截器是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    //添加所有实例拦截器
    this.instance.interceptors.request.use(
      (config) =>{
        console.log("所有拦截器：请求成功")
        return config
      },
      (error) =>{
        console.log("所有拦截器：请求失败")
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) =>{
        console.log("所有拦截器：相应成功")
        // this.loading.close()
        return res
      },
      (error) =>{
        console.log("所有拦截器：相应失败")
        return error
      }
    )
  }



  //封装函数
  request<T>(config : HYRequestConfig):Promise<T>{
    return new Promise((resove,reject) =>{
      //单个
      //单个请求request的拦截
    if(config.interceptors?.requestInterceptor){
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request<any,T>(config).then((res)=>{
      //单个请求对数据的处理
      if(config.interceptors?.responseInterceptor){
        res = config.interceptors.responseInterceptor(res)
      }
       //单个
      //将resolve返回出去
      resove(res)
    }).catch((error) =>{
      reject(error)
      return error
    })
    })
}

get<T>(config:HYRequest):Promise<T>{
  return this.request<T>({...config, method: 'GET'})
}

post<T>(config:HYRequest):Promise<T>{
  return this.request<T>({...config, method: 'POST'})
}

delete<T>(config:HYRequest):Promise<T>{
  return this.request<T>({...config, method: 'DELETE'})
}
}
export default HYRequest
