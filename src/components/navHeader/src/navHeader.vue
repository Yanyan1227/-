<template>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <el-icon>
        <component :is="isFold ? 'Fold' : 'Expand'" @click="changeFold"></component>
      </el-icon>
    </div>
    <HyBreadcrumb :breadcrumbs="breadcrumbs"></HyBreadcrumb>
      <user-info style="position: fixed;right: 5%"></user-info>
  </div>


</template>
<style>
.foldHeader {
  width: 50px;
  height: 20px;
}
</style>

<script lang="ts" setup>
import {ref, defineEmits,computed} from 'vue'
import userInfo from './userInfo.vue'
import HyBreadcrumb from '@/baseUI/breadcrumb'
import {pathMapToBreadcrumbs} from '@/utils/mapMenus';
import localCache from '@/utils/cache';
import type {IBreadcrumb} from "@/baseUI/breadcrumb/src/IBreadcrumb";
import {useRoute} from 'vue-router'


const isFold = ref(false)
const changeFold = () => {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value)
};

const route =useRoute()
const breadcrumbs =computed(() =>{
  const currentPath = route.path
  const userMenus = localCache.getCache('userMenus')
 return pathMapToBreadcrumbs(userMenus.data,currentPath)
})


const emit = defineEmits(["foldChange"])
</script>
