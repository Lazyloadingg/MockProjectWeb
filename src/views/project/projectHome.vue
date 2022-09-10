<template>
  <div id="projecthome">
    <div class="project_t">
      <el-input
        v-model="keyword"
        class="project_s"
        placeholder="请输入搜索内容"
        :prefix-icon="Search"
      />
      <el-button
        type="primary"
        class="project_add"
        @click="addProjectShow = true"
        >添加项目</el-button
      >
    </div>

    <el-dialog v-model="addProjectShow" class="project_add_dia">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input
            autocomplete="off"
            placeholder="项目名称"
            class="project_add_in"
            v-model="form.name"
          />
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item label="Base Url" :label-width="formLabelWidth">
          <el-input
            autocomplete="off"
            placeholder="基础URL"
            class="project_add_in"
            v-model="form.baseurl"
          />
        </el-form-item>
      </el-form>
      <el-form>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input
            autocomplete="off"
            type="textarea"
            placeholder="项目描述"
            v-model="form.desc"
          />
        </el-form-item>
      </el-form>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addProjectShow = false">取消</el-button>
          <el-button type="primary" @click="addProject = false">添加</el-button>
        </span>
      </template></el-dialog
    >

    <div class="action_tool"></div>
  </div>
</template>

<script>
import { addPreject } from "@/services/demand";
import { reactive, ref } from "_vue@3.2.39@vue";
import { ElMessage } from "_element-plus@2.2.16@element-plus";
export default {
  name: "project_home",
  setup() {
    var datas = reactive([1, 2, 3, 4, 5, 6]);
    var keyword = ref("");
    var addProjectShow = ref(false);
    var formLabelWidth = ref(100);
    const form = reactive({
      name: "",
      baseurl: "",
      desc: "",
    });
    const addProject = () => {
      let param = {
        name: form.name,
        basePath: form.baseurl,
        summary: form.desc,
      };
      addPreject(param).then((res) => {
        if (res.code == 200) {
          console.log("添加成功");
          ElMessage({
            message: "添加成功",
            type: "success",
          });
        } else {
          ElMessage({
            message: "添加失败",
            type: "error",
          });
        }
      });
    };
    return {
      datas,
      keyword,
      addProjectShow,
      form,
      formLabelWidth,
      addProject,
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
.project_s {
  height: 40px;
}
.project_add_dia {
  width: 50%;
  border-radius: 10px;
  padding-right: 20px;
}
.project_add_in {
  height: 40px;
}
</style>