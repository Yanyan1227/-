<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '80px':'210px' " class="menus">
        <navMenus :collapse="isCollapse"></navMenus>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @foldChange="foldChange"></nav-header>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.menus {
  background-color: rgb(15, 30, 47);
  height: 98vh;
}
</style>

<script lang="ts" setup>
import navMenus from '@/components/navMenus/src/navMenus.vue';
import navHeader from "@/components/navHeader/src/navHeader.vue";
import {ref} from "vue";
const isCollapse = ref(false)
const foldChange = (isFold:boolean) =>{
  isCollapse.value = isFold
}
</script>
