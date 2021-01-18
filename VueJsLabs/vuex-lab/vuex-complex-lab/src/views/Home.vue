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
      <span>{{ innerObj != null ? (innerObj.testObj != null ? innerObj.testObj.a : null) : null }}</span>
      <label style="margin-left: 15px">修改modul1中的SET_TESTTRE</label>
      <input type="button" @click="changeInnerObjValue" value="修改指定值" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import { mapGatters } from "vuex";
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
    ...mapState("module1", ["testStr", "innerObj"]),
  },
  mounted: function () {
    this[module1StoreTypes.SET_INNEROBJ]({
      test: "free",
      testObj: { a: "free" },
    });
  },
  methods: {
    ...mapMutations("module1", [
      module1StoreTypes.SET_TESTTRE,
      module1StoreTypes.SET_INNEROBJ,
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
      //this.$store.module1.innerObj.testObj.a = "free3"
    },
  },
};
</script>
