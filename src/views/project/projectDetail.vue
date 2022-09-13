<template>
  <div>{{ msg }}</div>
</template>


<script>
export default {
  name: "project_detail",
};
</script>
<script setup>
import { ref } from "vue";

let msg = ref("Hello!");
</script>