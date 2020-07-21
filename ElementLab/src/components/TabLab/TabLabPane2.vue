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
  beforeMounte: function() {
    console.log("beforeMounte2");
  },
  mounted: function() {
    console.log("TabLabPane2");
  },
  beforeDestroy: function() {
    console.log("beforeDestroy2");
  },
  destroyed: function() {
    console.log("destroyed2");
  }
};
</script>