<template>
  <div class="loginBox">
    <div ref="choseManner" class="choseManner">
      <div tabindex="1" @click="toAccountLogin" :style="{ color: accountColor }">账号登陆</div>
      <div tabindex="1" @click="toPhoneLogin" :style="{ color: phoneColor }">手机登录</div>
      <!-- <div tabindex="1" @click="tabClick" :style="{ color: '#409EFF' }">账号登陆</div>
      <div tabindex="1" @click="tabClick" :style="{ color: '#606266' }">手机登录</div> -->
    </div>
    <div class="inputBox">
      <div>
        账号<input type="text">
      </div>
      <el-divider style="position: relative;bottom: 125px;left: 120px;" direction="vertical" />
      <div>
        密码<input type="text">
      </div>
    </div>
    <el-button type="primary" size="" class="loginButton">登录</el-button>
  </div>
</template>

<style scoped>
.loginBox {
  width: 400px;
  height: 250px;
  margin: auto;
  margin-top: 15%;
  border: 0px solid;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.choseManner {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 10px;
  cursor: pointer;
}

.phoneLogin:focus {
  color: #409EFF;
}

/* .account {
  color: #409EFF;
} */

.inputBox {
  width: 250px;
  height: 100px;
  margin: 0 auto;
  position: relative;
  top: 80px;
}

input {
  outline: none;
  margin-bottom: 10px;
  margin-left: 5px;
}

.loginButton {
  display: block;
  margin-top: 80px;
  margin-left: 40%;
}
</style>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
let accountColor = ref('#409EFF')
let phoneColor = ref('#606266')

// const choseManner = ref();
// const tabs = (choseManner as HTMLElement).children
// const tabClick = (e: Event) => {
//   // tabs.forEach(e => e.style.color = '#606266');
//   console.log(tabs);
//   for (let i in tabs.length) {
//     const tab = tabs.item(i)
//     console.log(tab);
//     tab.style.color = tab === e ? '#409EFF' : '#606266';
//   }
// }
function toPhoneLogin() {
  accountColor.value = '#606266'
  phoneColor.value = '#409EFF'
}
function toAccountLogin() {
  accountColor.value = '#409EFF'
  phoneColor.value = '#606266'
}
</script>
