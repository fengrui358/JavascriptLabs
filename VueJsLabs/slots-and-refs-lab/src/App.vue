<template>
  <div id="app">
    <slots-foreach>
      <template v-slot:slot1>
        slot1
      </template>
      slot-default
    </slots-foreach>
  </div>
</template>

<script>
import SlotsForeach from './components/SlotsForeach.vue'

export default {
  name: 'App',
  components: {
    SlotsForeach
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
