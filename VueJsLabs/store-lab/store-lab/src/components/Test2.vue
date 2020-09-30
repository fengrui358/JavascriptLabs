<template>
  <div>
    {{ k.str1 }}
    <input v-model="k.str1" />
    <button @click="btnHandler">触发</button>
  </div>
</template>

<script>
import data from "../common/commonstore";

export default {
  data: function () {
    return { k : data };
  },
  methods: {
    btnHandler: function () {
      console.log(data === this.k);

      this.k.str1 = new Date().toLocaleTimeString();
    },
  },
};
</script>