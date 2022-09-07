<template>
  <div id="login">
    <div class="login_title">登录</div>
    <div class="input_card">
      <el-input
        class="login_input"
        v-model="account"
        placeholder="请输入账号"
      />
      <el-input
        class="login_input"
        v-model="password"
        type="password"
        placeholder="请输入密码"
        show-password
      />
    </div>

    <el-button class="login_btn" @click="loginAction">登录</el-button>
  </div>
</template>

<script>
import { reactive, ref, toRefs, Toast } from "vue";
import { ElMessage } from "element-plus";

export default {
  name: "login_login",

  setup() {
    var account = ref("");
    var password = ref("");
    const loginAction = () => {
      if (account.value.length == 0) {
        console.log(account.value+"233");
        ElMessage({
          message: "请输入账号",
          type: "warning",
        });
        return;
      }

      if (password.value.length == 0) {
        ElMessage({
          message: "请输入账号",
          type: "warning",
        });
        return;
      }
    };

    return {
      account,
      password,
      loginAction,
    };
  },
};
</script>

<style>
.login_title {
  font-size: 30px;
  font-weight: 500;
}
.input_card {
  background-color: white;
  margin: 0px 20%;
}
.login_input {
  margin: 10px 0px;
}
.login_btn {
  margin-top: 50px;
  width: 60%;
}
</style>