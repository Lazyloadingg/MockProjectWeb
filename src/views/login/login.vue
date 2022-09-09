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
      <div class="bottom_card">
        <el-button type="primary" class="login_btn" @click="loginAction"
          >登录</el-button
        >
        <div class="bottom_tool">
          <el-button type="text" class="register_btn" @click="registerAction"
            >还没有账号？注册账号</el-button
          >
          <el-button type="text" class="register_btn" @click="forgetAction"
            >忘记密码?</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, Toast } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { login } from "@/services/demand";
import { setCookie, setTokenToCookie } from "@/utils/cookie";
export default {
  name: "login_login",

  setup() {
    const router = useRouter();
    var account = ref("");
    var password = ref("");
    const loginAction = () => {
      if (account.value.length == 0) {
        console.log(account.value + "233");
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

      let param = {
        account: account.value,
        password: password.value,
      };
      login(param).then((res) => {
        if (res.code == 200) {
          ElMessage({
            message: "登录成功",
            type: "success",
          });
          setTokenToCookie(res.data);
          
        } else {
          ElMessage({
            message: "登录失败",
            type: "error",
          });
        }
      });
    };

    const registerAction = () => {
      router.push({
        name: "login_reigster",
      });
    };

    const forgetAction = () => {
      console.log("忘记密码");
      router.push({
        name: "login_reigster",
      });
    };

    return {
      account,
      password,
      loginAction,
      registerAction,
      forgetAction,
    };
  },
};
</script>

<style>
#login {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.login_title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #367ef5;
}
.input_card {
  background-color: white;
  /* margin: 0px 25%; */
  border: 1px solid #367ef5;
  padding: 30px 0px;
  border-radius: 20px;
  width: 700px;
  min-width: 700px;
}
.login_input {
  margin: 10px 0px;
  width: 60%;
  height: 45px;
}

.bottom_card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login_btn {
  background-color: #367ef5;
  color: white;
  margin-top: 30px;
  width: 60%;
  height: 50px;
  font-size: 18px;
}
.register_btn {
  color: #999999;
  font-size: 14px;
  font-weight: 400;
}
.bottom_tool {
  margin-top: 10px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  width: 60%;
}
</style>