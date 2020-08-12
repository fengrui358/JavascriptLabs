<template>
  <input type="checkbox" :checked="isSelected" @input="selectedChanged" />
</template>

<script>
export default {
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
