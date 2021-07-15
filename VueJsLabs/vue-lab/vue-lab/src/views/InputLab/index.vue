<template>
  <div class="input-lab">
    <div class="div1">
      <el-form :model="form" :rules="rules">
        <el-form-item label="电话号码" prop="phoneNumber">
          <el-input v-model.number="form.phoneNumber" maxlength="5"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" maxlength="3"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import validate from "@/mixins/validate";

export default {
  mixins: [validate],
  data() {
    return {
      form: {
        phoneNumber: "",
        age: "",
      },

      rules: {
        phoneNumber: [
        //   {
        //     validator: (rule, value, callback) => {
        //       const numPattern = /^\d+$/;
        //       if (value && !numPattern.test(value)) {
        //         return callback("输入数字");
        //       }
        //       callback();
        //     },
        //     trigger: "change",
        //   },
            this.validateRules().onlyNumber
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.input-lab {
  .div1 {
    width: 300px;
    border: 1px solid goldenrod;
    margin-left: 400px;
  }
}
</style>