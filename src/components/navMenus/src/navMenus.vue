<template>
  <el-col :span="12">
    <h5 class="mb-2">Default colors</h5>
    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
      default-active="1" class="el-menu-vertical-demo"
    style="border-right:none;">
      <template v-for="item in userMenus.data" :key="item.id">
        <!--        二级菜单-->
        <template v-if="item.type ===1">
          <!--          二级菜单可以展开的标题-->
          <el-sub-menu :index="item.id +''">
            <template #title>
              <el-icon v-if="item.icon"></el-icon>
              <span>{{ item.name }}</span>
            </template>

            <!--          遍历里面的标题-->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id +''">
                <el-icon v-if="subitem.icon"></el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!--        一级菜单-->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id +''">
            <el-icon v-if="item.icon"></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-col>
</template>

<style>
.el-col-12{
  max-width: none;
}
.el-menu{
  border-right:none;
}
</style>

<script lang="ts" setup>
// import {computed} from "vue";
// import {useStore} from "vuex";
import localCache from '@/utils/cache';

const userMenus = localCache.getCache('userMenus')
const props= defineProps({
  collapse:{
    type:Boolean
  }
})
// const store = useStore()
// const userMenus = computed(() => store.state.login.userMenus)
</script>
