<template>
  <div id="app">
    <img alt="Vue logo" :src="url">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { getImage } from '@/apis/local'

export default {
  name: 'App',
  data() {
    return {
      url: ''
    }
  },
  components: {
    HelloWorld
  },
  async created() {
    const data = await getImage(Math.ceil(Math.random() * 2))
    
    const blob = new Blob([data], {type: 'image/jpeg'})
    this.url = window.URL.createObjectURL(blob)
    console.log(this.url)
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
