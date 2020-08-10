<template>
  <div class="prop-component">
    {{ display }}
    <input type="checkbox" disabled :checked="isSelected" />
  </div>
</template>

<script>
export default {
  name: "PropComponent",
  props: {
    id: {
      type: Number,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    isSelected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    display: function() {
      return `${this.id}:${this.name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.prop-component {
  display: flex;
}
</style>
