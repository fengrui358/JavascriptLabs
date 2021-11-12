<template>
  <div ref="div2"></div>
</template>

<script>
console.log("LifeCycle2 outPromise run");

export default {
  beforeCreate() {
    console.log("LifeCycle2 beforeCreate");
  },
  async created() {
    console.log("LifeCycle2 created");
    this.$nextTick(() => {
      this.$refs.div2;
      console.log("LifeCycle2 nextTick div2");
    });
  },
  beforeMount() {
    console.log("LifeCycle2 before mount");
  },
  mounted() {
    console.log("LifeCycle2 mounted");
  },
};
</script>