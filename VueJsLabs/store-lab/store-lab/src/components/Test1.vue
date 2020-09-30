<template>
  <div>
    {{ k.str1 }}
    <input v-model="k.str1" />
    <button @click="btnHandler">触发</button>
  </div>
</template>

<script>
import data2 from "../common/commonstore";

export default {
  data: function () {
    let p1 = Object.getOwnPropertyDescriptors(data2);
    console.log(p1);

    let x = {
      k: data2,
    };

    this.innerData = x;

    let p2 = Object.getOwnPropertyDescriptors(data2);
    console.log(p2);

    //截至到目前为止，原始对象还未被改写

    return x;
  },
  methods: {
    btnHandler: function () {
      //1. 经测试直接修改data里的属性值没有用
      //2. 怀疑在不同的vue组件中的data有某种联通性

      //验证

      console.log(data2);
      console.log(data2.str1);
      console.log(this.innerData);
      console.log(this.innerData.k.str1);
      console.log(data2 === this.innerData.k);

      data2.str1 = "ghj";

      //从data内部返回后对象已被修改为可观测
      let p3 = Object.getOwnPropertyDescriptors(this.innerData.k);
      console.log(p3);

      let p4 = Object.getOwnPropertyDescriptors(data2);
      console.log(p4);

      let cc = this.$root;
      console.log(cc);
    },
  },
};
</script>