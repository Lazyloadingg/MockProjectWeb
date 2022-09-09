<template>
  <div id="projecthome">
    <div class="action_tool">
      <div v-for="(item, index) in datas" :key="index">
        <div class="project_card">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "_vue@3.2.39@vue";
export default {
  name: "project_home",
  setup() {
    var datas = reactive([1, 2, 3, 4, 5, 6]);

    return {
      datas,
    };
  },
};
</script>

<style>
#projecthome {
  background-color: white;
}
.action_tool {
    display: flex;

}
.project_card{
    margin: 10px 10px;
    border: 1px solid red;
    border-radius: 10px;
    padding: 10px 15px;
}
</style>