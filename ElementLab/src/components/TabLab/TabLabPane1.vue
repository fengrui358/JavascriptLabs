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
  },
  created: function() {
    console.log("created1");
  },
  beforeMounte: function() {
    console.log("beforeMounte1");
  },
  mounted: function() {
    console.log("TabLabPane1");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy1");
  },
  destroyed: function() {
    console.log("destroyed1");
  }
};
</script>