<template>
  <div class="about">
    <div>
      <label>读取modul1中的SET_TESTTRE</label>
      <span>{{ testStr }}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("module1", ["testStr"]),
  }
};
</script>
