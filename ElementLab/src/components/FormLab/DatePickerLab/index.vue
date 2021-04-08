<template>
  <div>
    <div>
      <div>带快捷选项的datetimerange</div>
      <el-date-picker
        v-model="date1"
        type="datetimerange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        :default-time="['00:00:00', '23:59:59']"
        @change="changeHandler"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      date1: null
    };
  },
  created() {
      const now = new Date()
      this.date1 = [new Date(now.getFullYear(), now.getMonth(), now.getDate()), new Date()]
  },
  methods: {
      changeHandler() {
          const start = moment(this.date1[0])
          const end = moment(this.date1[1])
          console.log(this.date1)
          console.log(`开始：${start.format('yyyy-MM-D HH:mm:ss')}  结束：${end.format('yyyy-MM-D HH:mm:ss')}`)
      }
  }
};
</script>