<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";
import test from "./requireContext";
import funA from "./requireContext/fun";
import test2 from 'jslibcore'

export default {
  name: "App",
  components: {
    MainPage,
  },
  data() {
    return {
      providerMsg2: "0",
    };
  },
  provide () {
    return {
      provideMsg: this.provideMsg2,
    };
  },
  created() {
    console.log('test', test2.utils.largeNumber(56, 78))
    console.log("启动", test.a1());
    console.log("启动", test.a2());
    console.log("启动", test.b3());
    console.log("启动", test.b4());
    //console.log('启动', test.b5())
    funA.a();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
