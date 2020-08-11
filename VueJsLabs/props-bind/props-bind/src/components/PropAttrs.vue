<template>
  <div class="prop-attrs">
    <prop-attrs-bottom v-bind="$attrs" v-on="$listeners">
        {{ name }}
    </prop-attrs-bottom>
  </div>
</template>

<script>
import PropAttrsBottom from "./PropAttrsBottom";

export default {
  name: "PropAttrs",
  components: {
    PropAttrsBottom
  },
  props: {
    name: {
      type: String,
      default: null
    }
  },
  mounted() {
    console.log(this.$attrs);
    console.log(this.$listeners);
  }
};
</script>

<style lang="scss" scoped>
.prop-attrs {
  display: flex;
}
</style>