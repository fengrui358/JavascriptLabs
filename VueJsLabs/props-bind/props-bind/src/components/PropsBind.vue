<template>
  <div>
    <div class="div1">
      <div>
        原始数据展示
        <prop-component
          v-for="item in datas"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :is-selected="item.isSelected"
        ></prop-component>
      </div>
      <div>
        Bind子组件Props，使用整体绑定
        <prop-component v-for="item in datas" :key="item.id" v-bind="item"></prop-component>
      </div>
    </div>
    <div class="div2">
      Bind子组件Props，修改同步，但是如果元素数据对象中没有指定属性，后面再添加属性会绑定不上
      <prop-input
        v-for="item in datas"
        :key="item.id"
        :id="item.id"
        :name.sync="item.name"
        :is-selected="item.isSelected"
        @selectedChanged="selectedChanged"
      ></prop-input>
    </div>
    <div class="div3">
      内部使用对象绑定
      <prop-component2 v-for="item in datas" :key="item.id" :item="item"></prop-component2>
    </div>
    <div class="div4">
      $attrs 及 $listens 高级测试
      <prop-attrs
        v-for="item in datas"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :is-selected="item.isSelected"
        @selectedChanged="selectedChanged"
      ></prop-attrs>
    </div>
  </div>
</template>

<script>
import PropComponent from "./PropComponent";
import PropComponent2 from "./PropComponent2";
import PropInput from "./PropInput";
import PropAttrs from "./PropAttrs";

export default {
  name: "PropsBind",
  components: {
    PropComponent,
    PropComponent2,
    PropInput,
    PropAttrs
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
          name: "test2",
          isSelected: false
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
      if (item.length > 0) {
        if (item[0].isSelected === undefined) {
          this.$set(item[0], "isSelected", val);
        } else {
          item[0].isSelected = val;
        }
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
.div4 {
  border: 2px solid blueviolet;
  min-height: 200px;
  margin: 5px;
}
</style>
