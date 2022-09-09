<template>
  <div id="projecthome">
    <div class="project_t">
      <el-input
        v-model="input2"
        class="project_s"
        placeholder="请输入搜索内容"
        :prefix-icon="Search"
      />
      <el-button type="primary" class="project_add" @click="addProject"
        >添加项目</el-button
      >
    </div>

    <div class="action_tool">

    </div>
  </div>
</template>

<script>
import { reactive } from "_vue@3.2.39@vue";
import { Calendar, Search } from "@element-plus/icons-vue";
export default {
  name: "project_home",
  setup() {
    var datas = reactive([1, 2, 3, 4, 5, 6]);

    const addProject = () => {};
    return {
      datas,
      addProject
    };
  },
};
</script>

<style>
#projecthome {
  background-color: white;
  padding: 30px 50px;
}
.action_tool {
  display: flex;
  flex-wrap: wrap;
}
.project_card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 10px;
  border: 1px solid red;
  border-radius: 10px;
  padding: 10px 15px;
  width: 190px;
  height: 150px;
}
.project_t {
  display: flex;
}
.project_add {
  margin-left: 20px;
  height: 40px;
}
.project_s{
  height: 40px;
}
</style>