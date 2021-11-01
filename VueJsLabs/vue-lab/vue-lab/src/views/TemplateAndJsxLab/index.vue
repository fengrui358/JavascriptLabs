<template>
  <div>
    <div>
      模板
      <Template :level="level"> {{ level }}级</Template>
    </div>
    <div>
      JSX
      <Jsx :level="level">{{ level }}级</Jsx>
    </div>
    <div>
      ManualRender
      <ManualRender :level="level">{{ level }}级</ManualRender>
    </div>
    <input type="button" @click="handleClick" value="增加级别" />
  </div>
</template>

<script>
import Template from "./Template";
import Jsx from "./Jsx";
import ManualRender from "./ManualRender";

export default {
  components: {
    Template,
    Jsx,
    ManualRender,
  },
  data() {
    return {
      level: 2,
    };
  },
  methods: {
    handleClick() {
      if (this.level === 6) {
        this.level = 1;
      } else {
        this.level++;
      }
    },
  },
};
Template;
</script>