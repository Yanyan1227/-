<template>
  <HyForm :formItem="formItem" :formData="formData">
    <template #header>
      <h1>高级检索</h1>
    </template>
    <template #footer>
      <el-button type="primary">重置</el-button>
      <el-button type="primary">搜索</el-button>
    </template>
  </HyForm>
</template>

<script lang="ts" setup>
import HyForm from '@/baseUI/form/index'
import type {IFormItem} from "@/baseUI/form/src/IFormItem";
import {reactive} from "vue";

const formData = reactive({
  name: '',
  password: '',
  sport: '',
  createTime: ''
})

const formItem: IFormItem[] = [
  {
    field: 'name',
    type: 'input',
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    field: 'password',
    type: 'password',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    field: 'sport',
    type: 'select',
    label: '喜欢的运动',
    placeholder: '请输入喜欢的运动',
    options: [
      {
        title: '羽毛球',
        value: 'badminton'
      },
      {
        title: '篮球',
        value: 'basketball'
      }
    ]
  },
  {
    field: 'createTime',
    type: 'datepicker',
    label: '创建时间',
    otherOptions: {
      startPlaceholder: '开始时间',
      endPlaceholder: '结束时间',
      type: 'daterange'
    }
  }
]

</script>
