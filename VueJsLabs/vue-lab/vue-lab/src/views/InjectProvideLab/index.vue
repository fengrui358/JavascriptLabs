<template>
  <div>
    {{ `InjectProvider page ${provideMsg2}` }}
    <el-button @click="provideMsg2 = 2">改变</el-button>
    <Inner />
  </div>
</template>

<script>
import Inner from "./Inner";

export default {
  components: { Inner },
  data() {
    return {
      provideMsg2: "provideMsg",
    };
  },
  provide() {
    return {
      provideMsg: this.provideMsg2,
    };
  },
  //   inject: ["provideMsg"],
  created() {
    console.log(this.provideMsg);
  },
};
</script>