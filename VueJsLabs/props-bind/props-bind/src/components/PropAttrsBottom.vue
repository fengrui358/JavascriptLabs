<template>
  <div class="prop-attrs">
    <!-- input使用新的值更新 -->
    <input type="text" :value="id" @input="$emit('update:id', $event.target.value)" />:
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
