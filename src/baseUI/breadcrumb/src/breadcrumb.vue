<template>
  <el-breadcrumb separator="/">
    <template v-for="item in breadcrumbs" :key="item.name">
      <el-breadcrumb-item :to="{ path: item.path }">{{item.name}}</el-breadcrumb-item>
    </template>

  </el-breadcrumb>
</template>


<script setup lang="ts">
import type {IBreadcrumb} from "@/baseUI/breadcrumb/src/IBreadcrumb";
import {defineProps,PropType} from 'vue'
const props = defineProps({
  breadcrumbs:{
    type:Array as PropType<IBreadcrumb>,
    default:()=>{}
  }
})
</script>
