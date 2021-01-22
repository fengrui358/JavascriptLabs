<template>
  <div class="home">
    <div>
      <label>测试写入读取vuex根上属性的数据</label>
      <input v-model="testInfo" />
    </div>
    <div>
      <label>读取modul1中的testStr</label>
      <span>{{ testStr }}</span>
      <label style="margin-left: 15px">修改modul1中的SET_TESTTRE</label>
      <input @input="SET_TESTTRE($event.target.value)" />
    </div>
    <div>
      <label>读取modul1中的innerObj</label>
      <span>{{ innerObj }}</span>
      <label style="margin-left: 15px">修改modul1中的SET_TESTTRE</label>
      <input type="button" @click="changeInnerObj" value="修改对象" />
    </div>
    <div>
      <label>读取modul1中的innerObj中的部分值</label>
      <span>{{
        innerObj != null
          ? innerObj.testObj != null
            ? innerObj.testObj.a
            : null
          : null
      }}</span>
      <label style="margin-left: 15px"
        >修改modul1中的SET_TESTTRE(实验结果，这种方式会报错)</label
      >
      <input type="button" @click="changeInnerObjValue" value="修改指定值" />
    </div>
    <div>
      <label>读取modul1中的list</label>
      <p v-for="item in listIndexs" :key="item">
        {{ item }}
      </p>
      <span>
        <input type="button" value="添加" @click="addItem" />
        <input type="button" value="删除" />
        <input type="button" value="修改" @click="updateItem" />
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import rootStoreTypes from "@/constants/common/rootStoreTypes";
import module1StoreTypes from "@/constants/common/module1StoreTypes";

export default {
  name: "Home",
  computed: {
    testInfo: {
      get: function () {
        return this.$store.getters.info;
      },
      set: function (newVal) {
        this.$store.commit(rootStoreTypes.CHANGE_NAME, newVal);
      },
    },
    ...mapState("module1", ["testStr", "innerObj", "list"]),
    ...mapGetters("module1", ["listIndexs"]),
  },
  mounted: function () {
    this[module1StoreTypes.SET_INNEROBJ]({
      test: "free",
      testObj: { a: "free" },
    });

    //在list中加入测试数据
    this[module1StoreTypes.SET_LIST]([
      { index: 5, name: "5" },
      { index: 3, name: "3" },
    ]);
  },
  methods: {
    ...mapMutations("module1", [
      module1StoreTypes.SET_TESTTRE,
      module1StoreTypes.SET_INNEROBJ,
      module1StoreTypes.SET_LIST,
      module1StoreTypes.SET_LISTITEM,
      module1StoreTypes.ADD_LISTITEM,
    ]),
    changeInnerObj: function () {
      //修改整个对象
      this[module1StoreTypes.SET_INNEROBJ]({
        test: "free2",
        testObj: { a: "free2" },
      });
    },
    changeInnerObjValue: function () {
      //修改整个对象
      console.log(this.$store);
      this.$store.state.module1.innerObj.testObj.a = "free3";
    },
    updateItem: function () {
      let item = { ...this.list[0] };
      //将第一个的索引5改成1
      item.index = 1;
      this[module1StoreTypes.SET_LISTITEM](item);
    },
    addItem: function () {
      let item = { ...this.list[0] };
      item.index = item.index + Math.floor(Math.random() * 10);
      item.name = "新加" + item.index;
      this[module1StoreTypes.ADD_LISTITEM](item);
    },
  },
};
</script>
