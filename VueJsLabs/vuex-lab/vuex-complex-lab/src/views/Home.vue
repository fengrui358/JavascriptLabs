<template>
  <div class="home">
    <div>
      <label>测试写入读取vuex根上属性的数据</label>
      <input v-model="testInfo" />
    </div>
    <div>
      <label>读取modul1中的SET_TESTTRE</label>
      <span>{{ testStr }}</span>
      <label style="margin-left: 15px">修改modul1中的SET_TESTTRE</label>
      <input @input="SET_TESTTRE($event.target.value)" />
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
    ...mapState("module1", ["testStr"]),
  },
  methods: {
    ...mapMutations("module1", [module1StoreTypes.SET_TESTTRE]),
  },
};
</script>
