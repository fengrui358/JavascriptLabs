<template>
  <div>
    TabLabPane1
    <input />
  </div>
</template>

<script>
export default {
  name: "TabLabPane1",
  data() {
    return {};
  },
  beforeCreate: function() {
    console.log("beforeCreate1");
    this.$once("hook:beforeMount", () => {
      console.log("hook:beforeMount");
    });
  },
  created: function() {
    console.log("created1");
  },
  beforeMount: function() {
    console.log("beforeMount1");
  },
  mounted: function() {
    console.log("mounted TabLabPane1");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy1");
  },
  destroyed: function() {
    console.log("destroyed1");
  }
};
</script>