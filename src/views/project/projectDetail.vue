<template>
  <div class="api_t">
    <el-input
      v-model="keyword"
      class="project_s"
      placeholder="请输入搜索内容"
      :prefix-icon="Search"
    />
    <el-button type="primary" class="project_add" @click="addAPIShow = true"
      >添加API</el-button
    >
  </div>

  <div v-for="(item, index) in datas" :key="index">
    <div class="api_cell" @click="apiDetail(item, index)">
      <div>{{ item.name }}</div>
      <div>{{ item.url }}</div>
    </div>
  </div>

  <!-- 添加API -->
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
        <el-button @click="addAPIShow = false">取消</el-button>
        <el-button type="primary" @click="addProject">添加</el-button>
      </span>
    </template></el-dialog
  >
</template>


<script>
export default {
  name: "project_detail",
};
</script>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { getAPIs } from "@/services/demand";
import { useRoute } from "vue-router";
import { routerPath } from "@/router";

var datas = ref([]);
var pid = ref("");
var addAPIShow = ref(false);
const router = useRoute();

onMounted(() => {
  pid.value = router.query?.pid;
  console.log("pid", router.query?.pid);
  getApiList();
});

const getApiList = () => {
  let param = {
    pid: pid.value,
  };
  console.log("-----", param);
  getAPIs(param).then((res) => {
    if (res.code == 200) {
      datas.value = res.data;
    } else {
    }
  });
};

const apiDetail = (item, index) => {
  console.log(item);
  router.push({
    path: routerPath.projectApiDetail,
    id: item.id,
  });
};
</script>


<style>
.api_t {
  display: flex;
  margin-bottom: 15px;
}
.api_cell {
}
</style>