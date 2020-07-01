<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br>
    <Performance v-bind:key="n" v-for="n in 1000"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Performance from "./components/Performance.vue";

export default {
  name: "App",
  created: function() {
    console.log("created");
  },
  components: {
    Performance
  }
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
