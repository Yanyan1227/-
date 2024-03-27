<template>
  <el-table max-height="500px" :data="listData" border style="width: 100%">
    <template v-for="propItem in propLists" :key="propItem.prop">
      <el-table-column align="center" v-bind="propItem">
        <!--        动态插槽修改-->
        <template #default="scope">
          <slot :name="propItem.slotName" :row="scope.row">
            {{ scope.row[propItem.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import {defineProps} from 'vue'

const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  propLists: {
    type: Array,
    required: true
  }
})
</script>
