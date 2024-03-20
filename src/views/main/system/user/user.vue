<template>
  <div class="user">
    <div class="search">
      <HyForm :formItem="formItem"></HyForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import HyForm from '@/baseUI/form/index'
import type {IFormItem} from "@/baseUI/form/src/IFormItem";

const formItem: IFormItem[] = [
  {
    type:'input',
    label: '用户名',
    placeholder: '请输入用户名'
  },
  {
    type:'password',
    label: '密码',
    placeholder: '请输入密码'
  },
  {
    type:'select',
    label: '喜欢的运动',
    placeholder: '请输入喜欢的运动',
    options:[
      {
        title:'羽毛球',
        value:'badminton'
      },
      {
        title:'篮球',
        value: 'basketball'
      }
    ]
  },
  {
    type:'datepicker',
    label: '创建时间',
    otherOptions:{
      startPlaceholder:'开始时间',
      endPlaceholder:'结束时间',
      type:'daterange'
    }
  }
]
</script>

<style scoped></style>
