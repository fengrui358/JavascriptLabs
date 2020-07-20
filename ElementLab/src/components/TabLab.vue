<template>
  <el-tabs v-model="actived" @tab-click="handleClick">
    <el-tab-pane label="tab1" name="first" lazy>
      <tab-lab-pane1></tab-lab-pane1>
    </el-tab-pane>
    <el-tab-pane label="tab2" name="second" lazy>
      <tab-lab-pane2></tab-lab-pane2>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import TabLabPane1 from "./TabLab/TabLabPane1";
import TabLabPane2 from "./TabLab/TabLabPane2";

export default {
  components: { TabLabPane1, TabLabPane2 },
  name: "TabLab",
  data() {
    return {
      actived: "second"
    };
  },
  methods: {
    handleClick(tab) {
      console.log(tab);
    }
  }
};
</script>