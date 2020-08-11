<template>
  <div class="prop-input">
    <span>{{ id }}</span>
    <!-- input使用新的值更新 -->
    <input type="text" :value="name" @input="$emit('update:name', $event.target.value)" />
    <!-- <input type="text" :value="name" @input="inputChanged" /> -->
    <!-- <input
      type="checkbox"
      :value="isSelected"
      @input="$emit('update:isSelected', $event.target.checked)"
    />-->
    <input type="checkbox" :checked="isSelected" @input="selectedChanged" />
  </div>
</template>

<script>
export default {
  name: "PropInput",
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
  methods: {
    inputChanged(event) {
      this.$emit("update:name", event.target.value);
    },
    selectedChanged(event) {
      this.$emit("selectedChanged", this.id, event.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.prop-input {
  display: flex;
}
</style>