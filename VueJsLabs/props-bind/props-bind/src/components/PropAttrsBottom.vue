<template>
  <div class="prop-attrs">
    {{ id + ':' }}
    <slot></slot>
    <input type="checkbox" :checked="isSelected" @input="selectedChanged" />
  </div>
</template>

<script>
export default {
  name: "PropAttrs",
  props: {
    id: {
      type: Number,
      default: null
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectedChanged(event) {
      this.$emit("selectedChanged", this.id, event.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>