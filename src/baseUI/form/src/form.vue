<template>
  <div>
    <slot name="header"></slot>
  </div>
  <el-form label-width="100px">
    <el-row>
      <template v-for="item in formItem" :key="item.label">
        <el-col :sm="12" :lg="8">
          <el-form-item :label="item.label">
            <template v-if="item.type === 'input' || item.type ==='password' ">
              <el-input :placeholder="item.placeholder" :show-password="item.type === 'password' "
                        v-model="formData[`${item.field}`]"></el-input>
            </template>
            <template v-else-if="item.type === 'select' ">
              <el-select :placeholder="item.placeholder" v-model="formData[`${item.field}`]">
                <el-option v-for="option in item.options" :key="option" :value="option.value" :label="option.title">
                </el-option>
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker' ">
              <el-date-picker style="width: 100%" v-bind="item.otherOptions" v-model="formData[`${item.field}`]">
              </el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-row>
  </el-form>
  <slot name="footer"></slot>
</template>
<script setup lang="ts">
import {defineProps, PropType} from 'vue'
import type {IFormItem} from "@/baseUI/form/src/IFormItem";

const props = defineProps({
  formItem: {
    type: Array as PropType<IFormItem[]>,
    default: (() => {
    })
  },
  formData: {
    type: Object,
    require: true
  }
})
</script>
