
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import hyRequest from './service'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')


//调用
// hyRequest.request({
//   url:'/home/multidata',
//   method:"GET",
//   interceptors:{
//     requestInterceptor:(config) =>{
//       console.log("单独请求")
//       return config
//     },
//     responseInterceptor:(res) =>{
//       console.log("单独相应")
//       return res
//     }
//   }
// })

hyRequest.request({
  url:'/home/multidata',
  method:"GET"
}).then((res) =>{
  console.log(res.data)
})
