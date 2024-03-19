<template>

  <el-icon >
    <component :is="isFold ? 'Fold' : 'Expand'" @click="changeFold"></component>
  </el-icon>
</template>
<style>
.foldHeader{
  width: 50px;
  height: 20px;
}
</style>

<script lang="ts" setup>
import { ref ,defineEmits} from 'vue'
const isFold = ref(false)
const changeFold = () => {
  isFold.value = !isFold.value;
  emit("foldChange",isFold.value)
};

const emit = defineEmits(["foldChange"])
</script>
