<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import { debounce } from "lodash";
import { addListener, removeListener } from "resize-detector";

export default {
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    option(val) {
      this.chart.setOption(val);
    },

    //深度监听非常消耗性能，不建议数据量大的情况下使用
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true,
    // },
  },
  created() {
    this.resize = debounce(this.resize, 100);
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      this.chart.resize();
    },
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      // 绘制图表
      this.chart.setOption(this.option);
    },
  },
};
</script>

<style scoped>
</style>