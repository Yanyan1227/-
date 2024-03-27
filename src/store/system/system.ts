import type {Module} from "vuex";
import type {IRootState} from "@/store/types";
import type {ISystemState} from "@/store/system/type";
import {getPageListData} from "@/service/main/system/system";
import localCache from '@/utils/cache'
const systemModule:Module<ISystemState,IRootState>={
  namespaced:true,
  state(){
    return {
      userList:[],
      userCount:0
    }
  },
  mutations:{
    changeUserList(state:any,userList:any[]){
      userList = state.userList
      localCache.setCache('userList',userList)
    },
    changeUserCount(state:any,userCount:number){
      userCount = state.userCount
    }
  },
  actions:{
  async getPageListAction({commit},payload){
      console.log(payload)
        // 发送请求
    const pageResult = await getPageListData(payload.pathUrl,payload.queryInfo)
    const userList = pageResult.data.data.list
    const totalCount = pageResult.data.data.totalCount
    commit('changeUserList',userList)
    commit('changeUserCount',totalCount)
    localCache.setCache('userList',userList)
    }



  }
}

export default systemModule
