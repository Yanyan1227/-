import {createStore} from "vuex";
import type {IRootState} from "@/store/types";
import login from "@/store/login/login";

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
    login
  }

})

export default store
