
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import hyRequest from './service'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
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

// hyRequest.request({
//   url:'',
//   method:"GET"
// }).then((res) =>{
//   // console.log(res.data)
// })
