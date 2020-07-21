<template>
  <div>
    TabLabPane2
    <input />
  </div>
</template>

<script>
export default {
  name: "TabLabPane2",
  data() {
    return {};
  },
  beforeCreate: function() {
    console.log("beforeCreate2");
  },
  created: function() {
    console.log("created2");
  },
  beforeMount: function() {
    console.log("beforeMount2");
  },
  mounted: function() {
    console.log("mounted TabLabPane2");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy2");
  },
  destroyed: function() {
    console.log("destroyed2");
  }
};
</script>