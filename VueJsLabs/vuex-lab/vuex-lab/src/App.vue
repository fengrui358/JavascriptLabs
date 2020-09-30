<template>
  <div id="app">
    <div class="flex">
      <test1></test1>
      <test2></test2>
    </div>
  </div>
</template>

<script>
import Test1 from './components/Test1'
import Test2 from './components/Test2'

export default {
  name: 'App',
  components: {
    Test1,
    Test2
  }
}
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

<style lang="scss" scoped>
.flex{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>