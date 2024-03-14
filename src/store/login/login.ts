import type {Module} from "vuex";
import type {ILoginState} from "@/store/login/loginType";
import type {IRootState} from "@/store/types";
import {accountLoginRequest} from "@/service/login/login";

const loginModule : Module<ILoginState,IRootState> = {
  namespaced:true,
  state(){
    return{
      token:''
    }
  },
  mutations:{},
  getters:{},
  actions:{
   async accountLoginAction({ commit } ,payload:any){
      console.log("执行accountLoginAction",payload)
     const loginResult = await accountLoginRequest(payload)
     console.log(loginResult)
    }
  }
}

export default loginModule
