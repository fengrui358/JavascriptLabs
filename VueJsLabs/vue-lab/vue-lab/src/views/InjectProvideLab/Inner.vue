<template>
  <div>
    {{ `Inner page ${provideMsg}` }}
    <el-button @click="provideMsg = 3">改变3</el-button>
  </div>
</template>

<script>
export default {
  inject: ["provideMsg"],
  created() {
    console.log(this.provideMsg);
  },
};
</script>