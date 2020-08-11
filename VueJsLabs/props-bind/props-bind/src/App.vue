<template>
  <div id="app">
    <props-bind></props-bind>
  </div>
</template>

<script>
import PropsBind from "./components/PropsBind";

export default {
  name: "App",
  components: {
    PropsBind
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
  margin-top: 10px;
}
</style>
