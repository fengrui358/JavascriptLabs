<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" > -->
    <Map></Map>
  </div>
</template>

<script>
import * as leaflet from 'leaflet'
import Map from './components/Map.vue'

export default {
  name: 'App',
  components: {
    Map,
  },
  created() {
    console.log('leaflet', leaflet)
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
