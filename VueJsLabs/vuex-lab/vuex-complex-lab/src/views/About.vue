<template>
  <div class="about">
    <div>
      <label>读取modul1中的SET_TESTTRE</label>
      <span>{{ testStr }}</span>
    </div>
    <div>
      <label>本地计算属性测试</label>
      <span>{{ listItem }}</span>
      <span>
        <input type="button" value="modify" @click="modify" />
      </span>
      <div>
        <label>本地计算属性集合测试</label>
        <span>{{ orderList }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: function () {
    return {
      list: [],
    };
  },
  computed: {
    ...mapState("module1", ["testStr"]),
    listItem: function () {
      if (this.list.length > 0) {
        return this.list[0].name;
      }

      return null;
    },
    orderList: function () {
      //todo 重新计算列表
      return this.list;
    },
  },
  mounted: function () {
    for (let index = 0; index < 3; index++) {
      this.list.push({ index: index, name: "name" + index });
    }
  },
  methods: {
    modify() {
      this.list[0].index = 5;
    },
  },
};
</script>
