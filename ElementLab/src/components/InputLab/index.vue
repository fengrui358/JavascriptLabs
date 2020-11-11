<template>
  <el-form :model="formData" :rules="rules" ref="formData">
    <el-form-item prop="input" label="测试 label">
      <el-input
        placeholder="请输入内容"
        v-model.number="formData.input"
        suffix-icon="el-icon-edit"
      >
      </el-input>
    </el-form-item>
    <el-button>test</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        input: "",
      },
      rules: {
        input: [
          {
            type: "number",
            message: "不能为非数字",
            trigger: "change",
          },
          // {
          //   min: 3,
          //   max: 5,
          //   message: "长度在 3 到 5 个字符",
          // },
          {
            required: true,
            message: "不能为空",
          },
        ],
      },
    };
  },
};
</script>