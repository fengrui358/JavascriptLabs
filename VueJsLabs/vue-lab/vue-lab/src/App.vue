<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './views/MainPage.vue'
import test from './requireContext'

export default {
  name: 'App',
  components: {
    MainPage
  },
  created(){
    console.log('启动', test.a1())
    console.log('启动', test.a2())
    console.log('启动', test.b3())
    console.log('启动', test.b4())
    //console.log('启动', test.b5())
  }
}
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
