<template>
  <div class="user">
    <div class="search">
      <pageSearch>
      </pageSearch>
    </div>
<HyTable :listData="userList" :propLists="propLists">
  <template #createAt="scope">
    <strong>{{scope.row.createAt}}</strong>
  </template>
</HyTable>
  </div>
</template>

<script lang="ts" setup>
import pageSearch from "@/components/page-search";
import {useStore} from 'vuex'
import {computed} from 'vue'
import localCache from '@/utils/cache'
import HyTable from '@/baseUI/table'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pathUrl: 'users/list',
  queryInfo: {
    offset: 0,
    size: 10
  }
})

const userList = localCache.getCache('userList')
console.log(userList)
const userCount = computed(() => store.state.system.userCount)

const propLists = [
  {
    prop: "name",
    label: "用户名",
    minWidth: "100",
    slotName:'name'
  },
  {
    prop: "realname",
    label: "真实姓名",
    minWidth: "100",
    slotName:'realname'
  },
  {
    prop: "cellphone",
    label: "手机号码",
    minWidth: "100",
    slotName:'cellphone'
  },
  {
    prop: "enable",
    label: "状态",
    minWidth: "100",
    slotName:'enable'
  },
  {
    prop: "createAt",
    label: "创建时间",
    minWidth: "100",
    slotName:'createAt'
  },
  {
    prop: "updateAt",
    label: "更新时间",
    minWidth: "100",
    slotName:'updateAt'
  },
]

</script>
<style scoped>
.search{
  margin-bottom: 20px;
}
</style>
