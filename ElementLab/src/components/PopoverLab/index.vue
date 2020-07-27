<template>
  <div class="popover-lab" v-clickoutside="handleClickoutside">
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">click 激活</el-button>
    </el-popover>

    <el-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    ></el-popover>
    <el-button v-popover:popover>focus 激活</el-button>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible"
    >
      <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
    </el-popover>

    <!-- 自定义区 -->
    <div>
      <div style="width:100px; height:20px;background-color:red"></div>
      <button @click="showCustomPopover = !showCustomPopover" v-popover:customPopover>custom</button>
    </div>

    <el-popover
      ref="customPopover"
      :visible-arrow="false"
      :v-model="showCustomPopover"
      placement="right-end"
      trigger="click"
      :offset="50"
    >
      <div class="custom-popover" style="width:200px;height:200px;background-color:blue"></div>
    </el-popover>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      showCustomPopover: true,
    };
  },
  methods: {
    handleClickoutside: function () {
      console.log("handleClickoutside");
    },
  },
};
</script>

<style lang="scss" scoped>
.popover-lab {
  background-color: aqua;
}
.custom-popover {
  height: 200px;
  width: 300px;
  background-color: red;
}
</style>