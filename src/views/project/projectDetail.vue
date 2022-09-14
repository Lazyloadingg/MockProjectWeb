<template>
  <div v-for="(item, index) in datas" :key="index">
    <div>{{ item.name }}</div>
  </div>
</template>


<script>
export default {
  name: "project_detail",
};
</script>
<script setup>
import { onMounted, reactive, ref } from "vue";
import { getAPIs } from "@/services/demand";
import { useRoute }  from "vue-router"; 
// import router, { routerPath } from "@/router";

var datas = ref([]);
var pid = ref("");
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
  console.log("-----",param)
  getAPIs(param).then((res) => {
    if (res.code == 200) {
      datas.value = res.data;
    } else {
    }
  });
};
</script>