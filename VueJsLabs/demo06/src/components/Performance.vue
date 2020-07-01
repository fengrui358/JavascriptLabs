<template>
  <span id="container">{{msg}}</span>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "你好"
    };
  },
  created: function() {
    setTimeout(this.updateFun, 400);
  },
  methods: {
    updateFun: function() {
      this.msg = new Date().toLocaleTimeString();
      setTimeout(this.updateFun, 400);
    }
  }
};
</script>

<style scoped>
span {
  margin: 5px;
}
</style>