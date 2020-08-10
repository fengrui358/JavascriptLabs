<template>
  <div>
    <div class="div1">
      原始数据展示
      <prop-component
        v-for="item in datas"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :is-selected="item.isSelected"
      ></prop-component>
    </div>
    <div class="div2">
      Bind子组件Props，修改同步
      <prop-input
        v-for="item in datas"
        :key="item.id"
        :id="item.id"
        :name.sync="item.name"
        :is-selected="item.isSelected"
        @selectedChanged="selectedChanged"
      ></prop-input>
    </div>
    <div class="div3"></div>
  </div>
</template>

<script>
import PropComponent from "./PropComponent";
import PropInput from "./PropInput";

export default {
  name: "PropsBind",
  components: {
    PropComponent,
    PropInput
  },
  data: function() {
    return {
      datas: [
        {
          id: 1,
          name: "test1",
          isSelected: true
        },
        {
          id: 2,
          name: "test2"
        },
        {
          id: 3,
          name: "test3"
        },
        {
          id: 4,
          name: "test4"
        },
        {
          id: 5,
          name: "test5"
        }
      ]
    };
  },
  methods: {
    selectedChanged: function(id, val) {
      let item = this.datas.filter(s => s.id === id);
      if (item !== null) {
        item.isSelected = val;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.div1 {
  border: 2px solid aqua;
  min-height: 200px;
  margin: 5px;
}
.div2 {
  border: 2px solid bisque;
  min-height: 200px;
  margin: 5px;
}
.div3 {
  border: 2px solid brown;
  min-height: 200px;
  margin: 5px;
}
</style>
