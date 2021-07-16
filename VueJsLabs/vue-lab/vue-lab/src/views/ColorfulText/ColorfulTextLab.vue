<template>
  <div>
    <ColorfulText :text-format="text" :params="params" />
    <el-button @click="change">改变文本</el-button>
  </div>
</template>

<script>
import ColorfulText from "./index";
export default {
  components: { ColorfulText },
  data() {
    return {
      text: "你好a{0} 开始b{1}，再见c{0} ？",
      params: { 0: "free", 1: "eat" },
    };
  },
  methods: {
    change() {
      this.text = "你sa好a{0} 开fdasdf始b{1}，sdf再332??见c{0} ？";
      this.params = { 0: { text: "freea", color: '#7c85a2'}, 1: { text: "eatb", color: 'red' }, 2: 'dsadfas' }
    },
  },
};
</script>