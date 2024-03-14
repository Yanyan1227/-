<template>
  <div class="inputBox">
    <el-form :rules="rules" :model="account" ref="formRef">
      <el-form-item prop="inputAccount" label="账号">
        <el-input v-model="account.inputAccount" style="width: 240px" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="inputPassword" label="密码">
        <el-input v-model="account.inputPassword" style="width: 240px" type="password" placeholder="请输入密码"
          show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, defineExpose } from 'vue'
import type { FormInstance } from 'element-plus'
import localCache from '@/utils/cache';
import {useStore} from 'vuex'

const account = reactive({
  inputAccount: localCache.getCache('inputAccount') ?? '',
  inputPassword: localCache.getCache('inputPassword') ?? ''
})
const rules = reactive({
  inputAccount: [
    { required: true, message: '用户账号不能为空', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名正则，4到10位（字母，数字，下划线）', trigger: 'blur' },
  ],
  inputPassword: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]
})
const formRef = ref<FormInstance>()
const store = useStore()
const loginAction = (isKeepPsw) => {

  formRef.value?.validate((valid) => {

    if (valid) {
      //判断是否要记住密码
      if (isKeepPsw) {
        localCache.setCache("inputAccount", account.inputAccount)
        localCache.setCache("inputPassword", account.inputPassword)
      }else {
        localCache.removeCache('inputAccount')
        localCache.removeCache('inputPassword')
      }
      //进行登陆判断(响应式的解构）
      store.dispatch('login/accountLoginAction',{... account})

    }
  })
}
defineExpose({
  account,
  loginAction
});
</script>
