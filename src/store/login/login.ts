import type {Module} from "vuex";
import type {ILoginState} from "@/store/login/loginType";
import type {IRootState} from "@/store/types";
import {accountLoginRequest, requestMenusByRoleId, requestUserInfoById} from "@/service/login/login";
import type {IAccount} from '@/service/login/login'
import localCache from '@/utils/cache';
import router from "@/router";
import {mapMenusToRoutes} from "@/utils/mapMenus";


const loginModule : Module<ILoginState,IRootState> = {
  namespaced:true,
  state(){
    return{
      token:'',
      userInfo:{},
      userMenus:[]
    }
  },
  mutations:{
    changeToken(state,token:string){
      // console.log(token)
      state.token = token
      localCache.setCache('token',token)
    },
    changeUserInfo(state,userInfo:any){
      state.userInfo = userInfo
    },
    changeUserMenus(state,userMenus:string|number){
      state.userMenus = userMenus
      localCache.setCache('userMenus',userMenus)

     //  userMenus=>routes
     const routes = mapMenusToRoutes(userMenus)
      console.log(routes)
    // routes =>router.main.children
      routes.forEach((route) =>{
        // console.log(route)
        router.addRoute('main',route)
      })

    }
  },
  getters:{},
  actions:{
   async accountLoginAction({ commit } ,payload:IAccount){
      console.log("执行accountLoginAction",payload)
     const loginResult = await accountLoginRequest(payload)
     const token = loginResult.data.data.token
     const id = loginResult.data.data.id
     commit("changeToken",token)

     //请求用户信息
     const userInfoResult=await requestUserInfoById(id)
     const userInfo = userInfoResult.data.data
     console.log(userInfo)
     commit("changeUserInfo",userInfo)
     localCache.setCache('userInfo',userInfo)

     //请求用户菜单
     const userMenusResult=await requestMenusByRoleId(userInfo.role.id)
     const userMenus = userMenusResult.data
     console.log(userMenus)
     commit("changeUserMenus",userMenus)
     localCache.setCache('userMenus',userMenus)

     //跳转
     router.push('/main')
    }
  }
}

export default loginModule
