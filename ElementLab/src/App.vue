<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>

import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout
  },
  //测试生命周期异步方法
  async created(){
    console.log("created start");

    await new Promise(resolve => {
      setTimeout(()=>resolve(console.log("created resolved")), 1500);
    });

    console.log("created end");
  },
  async mounted(){
    console.log("mounted start");

    await new Promise(resolve => {
          setTimeout(()=>resolve(console.log("mounted resolved")), 1000);
        });

    console.log("mounted end");
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
