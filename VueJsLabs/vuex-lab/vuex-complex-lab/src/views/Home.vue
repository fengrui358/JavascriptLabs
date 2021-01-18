<template>
  <div class="home">
    <div>
      <input v-model="testInfo" />
    </div>
  </div>
</template>

<script>
// import { mapMutation } from "vuex";
// import { mapGatters } from "vuex";
import rootStoreTypes from "@/constants/common/rootStoreTypes";

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
  },
  // methods: {
  //   ...mapMutation([rootStoreTypes.CHANGE_NAME]),
  // },
};
</script>
