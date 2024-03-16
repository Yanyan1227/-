<style scoped>
@import './login.css';
</style>
<template>
  <div class="loginBox">
    <el-tabs type="border-card" stretch=true>
      <el-tab-pane label="账号登录">
        <loginAccount ref="loginInfomation"></loginAccount>
      </el-tab-pane>

      <el-tab-pane label="手机登录"></el-tab-pane>
      <el-checkbox v-model="isKeepPsw" label="记住密码" size="small" />
      <el-button type="primary" class="loginButton" @click="getLogin">登录</el-button>
    </el-tabs>

  </div>

</template>

<script lang="ts" setup>
import loginAccount from './LoginAccount.vue'
import { ref } from 'vue'
const loginInfomation = ref();
let isKeepPsw = ref(false)
const getLogin = () => {
  loginInfomation.value.loginAction(isKeepPsw.value)
}

</script>
