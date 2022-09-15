<template>
  <div>api详情</div>
</template>

<script>
import { ref } from "_vue@3.2.39@vue";
export default {
  name: "project_api",
};
</script>

<script setup>
import { getApiDetail } from "@/services/demand";
var id = ref("");

onMounted(() => {
  id.value = router.query?.id;
  console.log("id", router.query?.id);
  getAPIDetail();
});

const getAPIDetail = () => {
  let param = {
    id: id,
  };
  getApiDetail(param).then((res) => {
    if (res.code == 200) {
      console.log("获取api详情成功");
    } else {
      console.log("获取api详情失败");
    }
  });
};
</script>