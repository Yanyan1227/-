<template>
  <div style="display: flex">
    <div style="margin-right: 10px">
      <el-icon>
        <component :is="isFold ? 'Fold' : 'Expand'" @click="changeFold"></component>
      </el-icon>
    </div>
      <div>面包</div>
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
import {ref, defineEmits} from 'vue'
import userInfo from './userInfo.vue'

const isFold = ref(false)
const changeFold = () => {
  isFold.value = !isFold.value;
  emit("foldChange", isFold.value)
};

const emit = defineEmits(["foldChange"])
</script>
