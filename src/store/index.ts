import {createStore} from "vuex";
import type {IRootState} from "@/store/types";
import login from "@/store/login/login";
import system from "@/store/system/system";
// 创建一个新的 store 实例
const store = createStore<IRootState>({
  state:() =>{
    return {
      name:'aaa'
    }
  },
  mutations:{},
  getters:{},
  actions:{},
  modules:{
    login,
    system
  }

})

export default store
