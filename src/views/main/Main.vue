<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="menus">
        <navMenus></navMenus>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
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
</script>
