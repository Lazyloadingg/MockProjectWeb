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

    <div class="project_list" v-for="(item, index) in datas" :key="index">
      <div class="project_item" @click="projectDetail(item)">
        <div>
          <div>图标</div>
          <div class="project_title">{{ item.name }}</div>
        </div>
        <div>
          <el-button type="primary" class="project_edit">编辑</el-button>
          <el-button
            type="primary"
            class="project_del"
            @click.stop="delProject(item, index)"
            >删除</el-button
          >
        </div>
      </div>
    </div>

    <!-- 添加项目 -->
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
          <el-button type="primary" @click="addProject">添加</el-button>
        </span>
      </template></el-dialog
    >

    <div class="action_tool"></div>
  </div>
</template>

<script >
import { addPreject, delPreject, getProjects } from "@/services/demand";
import { onMounted, reactive, ref } from "_vue@3.2.39@vue";
import { ElMessage } from "_element-plus@2.2.16@element-plus";
import router, { routerPath } from "@/router";

export default {
  name: "project_home",
  setup() {
    var datas = ref([]);
    var keyword = ref("");
    var addProjectShow = ref(false);
    var formLabelWidth = ref(100);
    const form = reactive({
      name: "",
      baseurl: "",
      desc: "",
    });

    onMounted(() => {
      getProjectsRequest();
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
          addProjectShow.value = false;
          getProjectsRequest();
        } else {
          ElMessage({
            message: "添加失败",
            type: "error",
          });
        }
      });
    };
    const delProject = (item, index) => {
      let param = {
        id: item.id,
      };
      delPreject(param).then((res) => {
        if (res.code == 200) {
          ElMessage({
            message: "删除成功",
            type: "success",
          });
          datas.value.splice(index, 1);
        } else {
          ElMessage({
            message: "删除失败",
            type: "error",
          });
        }
      });
    };

    const getProjectsRequest = () => {
      getProjects().then((res) => {
        if (res.code == 200) {
          // datas.push(...res.data);
          datas.value = res.data;
        } else {
          console.log("获取项目失败");
        }
        console.log(res);
      });
    };

    const projectDetail = (item) => {
      router.push({
        path: routerPath.projectdetail,
        query: { pid: item.id },
      });
    };
    return {
      datas,
      keyword,
      addProjectShow,
      form,
      formLabelWidth,
      addProject,
      projectDetail,
      delProject,
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
  margin-bottom: 15px;
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
.project_item {
  padding: 8px 15px;
  height: 40px;
  background-color: #f0f2fc;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
}
.project_title {
  margin: 0px 5px;
  font-weight: 500;
  font-size: 15px;
}
.project_del {
  background-color: red;
  border-width: 0px;
  font-size: 12px;
}
.project_edit {
  background-color: #44d1b6;
  border-width: 0px;
  font-size: 12px;
}
</style>