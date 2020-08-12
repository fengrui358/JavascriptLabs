<template>
  <div class="prop-attrs">
    {{ id + ":" }}
    <slot></slot>
    <prop-attrs-bottom-checkbox v-bind="$attrs" v-on="$listeners" :id="id"></prop-attrs-bottom-checkbox>
  </div>
</template>

<script>
import PropAttrsBottomCheckbox from "./PropAttrsBottomCheckbox";

export default {
  name: "PropAttrs",
  components: {
    PropAttrsBottomCheckbox
  },
  props: {
    id: {
      type: Number,
      default: null
    }
  }
};
</script>
