<template>
  <div ref="div1"></div>
</template>

<script>
function outPromise() {
  console.log("LifeCycle1 outPromise start");
  return new Promise((resolve) => {
    console.log("LifeCycle1 outPromise before resolve");
    resolve();
    console.log("LifeCycle1 outPromise after resolve");
  }).then(() => {
    console.log("LifeCycle1 outPromise then ...");
  });
}

console.log("LifeCycle1 outPromise run");
outPromise();
console.log("LifeCycle1 outPromise run end");

setTimeout(() => console.log("LifeCycle1 outter setTimeout"), 0);

export default {
  async beforeCreate() {
    setTimeout(() => console.log("LifeCycle1 beforeCreate setTimeout"), 0);
    console.log("LifeCycle1 beforeCreate");
    await this.$refs.div1;
    console.log("LifeCycle1 beforeCreate await div1");
  },
  async created() {
    this.innerPromise();
    console.log("LifeCycle1 created");
    await this.$refs.div1;
    console.log("LifeCycle1 created await div1");
  },
  beforeMount() {
    console.log("LifeCycle1 before mount");
  },
  mounted() {
    console.log("LifeCycle1 mounted");
  },
  methods: {
    innerPromise() {
      console.log("LifeCycle1 innerPromise start");
      return new Promise((resolve) => {
        console.log("LifeCycle1 innerPromise before resolve");
        resolve();
        console.log("LifeCycle1 innerPromise after resolve");
      }).then(() => {
        console.log("LifeCycle1 innerPromise then ...");
      });
    },
  },
};
</script>