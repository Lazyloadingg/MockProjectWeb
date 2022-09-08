<template>
  <div id="register">
    <div class="login_title">注册</div>
    <div class="input_card">
      <el-input
        minlength="10"
        maxlength="16"
        class="login_input"
        v-model="account"
        placeholder="账号"
      />
      <el-input
        class="login_input"
        v-model="email"
        placeholder="邮箱"
        @input="emailChange"
        @label="emaillabel"
      />

      <el-input
        class="login_input"
        v-model="password"
        type="password"
        label="sss"
        placeholder="密码"
        @focus="testaction"
        show-password
      />
      <el-input
        class="login_input"
        v-model="checkpassword"
        type="password"
        placeholder="确认密码"
        show-password
      />
      <div class="bottom_card">
        <el-button type="primary" class="login_btn" @click="registerAction"
          >注册</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ElMessage } from "_element-plus@2.2.16@element-plus";
import { ref } from "_vue-demi@0.13.11@vue-demi";
import { register } from "@/services/demand";

export default {
  name: "login_reigster",
  setup() {
    const router = useRouter();
    var account = ref("");
    var email = ref("");
    var emaillabel = ref("");
    var password = ref("");
    var checkpassword = ref("");

    const registerAction = () => {
      if (account.value.length == 0) {
        ElMessage({
          message: "请输入账号",
          type: "warning",
        });
        return;
      }
      if (email.value.length == 0) {
        ElMessage({
          message: "请输入邮箱",
          type: "warning",
        });
        return;
      }
      if (password.value.length == 0) {
        ElMessage({
          message: "请输入密码",
          type: "warning",
        });
        return;
      }
      if (checkpassword.value.length == 0) {
        ElMessage({
          message: "请再次输入密码",
          type: "warning",
        });
        return;
      }

      if (password.value != checkpassword.value) {
        ElMessage({
          message: "两次密码输入不一致",
          type: "warning",
        });
        return;
      }

      var param = {
        account: account,
        password: password,
        email: email,
      };
      register(param).then((res) => {
        if (res.code == 200) {
          ElMessage({
            message: "注册成功",
            type: "success",
          });
        } else {
          ElMessage({
            message: "注册失败",
            type: "error",
          });
        }
      });
    };

    const testaction = () => {
      console.log("233");
    };

    const emailChange = (value) => {
      console.log(value);
    };
    return {
      account,
      email,
      password,
      checkpassword,
      emaillabel,
      registerAction,
      testaction,
      emailChange,
    };
  },
};
</script>

<style>
#register {
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