
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import hyRequest from './service'
import store from './store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {formatUtcString} from '@/utils/dataFormat'


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
app.use(store)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.config.globalProperties.$filters = {
  formatTime(value:string){
  return  formatUtcString(value)
  }
}
