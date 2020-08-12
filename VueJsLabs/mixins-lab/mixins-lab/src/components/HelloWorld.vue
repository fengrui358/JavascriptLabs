<template>
  <div class="hello">
    <div>{{ 'total:' + total }}</div>
    <div>{{ 'pageIndex:' + pageIndex }}</div>
    <div>{{ 'pageSize:' + pageSize }}</div>
    <button @click="query">Query</button>
    <input type="text" v-model="pageIndex" style="margin: 5px" />
  </div>
</template>

<script>
import mixinsObj from "./../mixins/mixins.obj";

export default {
  name: "HelloWorld",
  mixins: [mixinsObj],
  props: {
    msg: String,
  },
  watch: {
    pageIndex: function (newVal, oldVal) {
      console.log(
        `watch pageIndex changed from hello world: oldVal--${oldVal}  newVal--${newVal}`
      );
    },
  },
  methods: {
    // query() {
    //   //覆盖了基类的混入
    // },
    _query() {
      console.log("_query");
    },
  },
};
</script>

