<template>
  <div class="life-cycle">
    <LifeCycle1></LifeCycle1>
    <LifeCycle2></LifeCycle2>
    <p>结论：</p>
    <div class="step1">
      <p>
        1. <span class="component">组件</span> import 外部代码按顺序先后执行
      </p>
      <p>2. <span class="host">宿主</span>外部代码执行</p>
      <p>3. <span class="component">组件</span>外部代码执行 then 方法执行</p>
    </div>
    <div class="step2">
      <p>
        4. <span class="host">宿主</span>执行生命周期： beforeCreate, created,
        beforeMount
      </p>
      <p>
        5. <span class="host">宿主</span>执行生命周期： beforeCreate, created,
        beforeMount
      </p>
      <p>
        6. <span class="component">组件</span>按 template 加载顺序执行生命周期：
        beforeCreate, created, beforeMount
      </p>
      <p>
        7. <span class="component">组件</span>按 template 加载顺序执行生命周期：
        mounted
      </p>
      <p>8. <span class="host">宿主</span>执行生命周期： mounted</p>
    </div>
    <div class="step3">
      <p>
        9. 执行上述流程当中的其余微任务，如：Promise.then，nextTick，await $refs
      </p>
      <p>10. 执行下一个宏任务</p>
    </div>
  </div>
</template>

<script>
console.log("LifeCycleLab run");

import LifeCycle2 from "./LifeCycle2.vue";
import LifeCycle1 from "./LifeCycle1.vue";
export default {
  components: { LifeCycle1, LifeCycle2 },
  beforeCreate() {
    console.log("LifeCycleLab beforeCreate");
  },
  created() {
    console.log("LifeCycleLab created");
  },
  beforeMount() {
    console.log("LifeCycleLab beforeMount");
  },
  mounted() {
    console.log("LifeCycleLab mounted");
  },
};
</script>

<style lang="scss" scoped>
.life-cycle {
  width: 600px;
  margin: auto;
  border: 1px solid black;
  padding: 2px;
  .step1 {
    border: 1px dashed green;
  }
  .step2 {
    border: 1px dashed blue;
  }
  .step3 {
    border: 1px dashed red;
  }
  .host {
    color: red;
  }
  .component {
    color: orange;
  }
}
</style>