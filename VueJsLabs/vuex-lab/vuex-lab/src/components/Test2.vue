<template>
  <div>
    {{ data.str1 }}
    <input v-model="data.str1" />
    <button @click="btnHandler">触发</button>
  </div>
</template>

<script>
import data from "../common/commonstore";

export default {
  data: function () {
    return data;
  },
  methods: {
    btnHandler: function () {
      this.data.str1 = (new Date()).toLocaleTimeString();

      if (this.data == data) {
        console.log("data数据对象相等");
      } else {
        console.log("data数据对象不相等");
      }
    },
  },
};
</script>