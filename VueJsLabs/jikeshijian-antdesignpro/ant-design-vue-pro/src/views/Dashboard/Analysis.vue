<template>
  <div>
    <chart style="height: 400px" :option="chartOption"></chart>
  </div>
</template>

<script>
import Chart from "../../components/Chart";
import { random } from "lodash";

export default {
  components: {
    Chart,
  },
  data() {
    return {
      chartOption: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(
        () => random(100)
      );
      this.chartOption = { ...this.chartOption };
    }, 3000);
  },
  beforDestory() {
    clearInterval(this.interval);
  },
};
</script>
