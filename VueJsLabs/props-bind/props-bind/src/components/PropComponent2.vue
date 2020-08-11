<template>
  <div class="prop-component">
    {{ display }}
    <input type="checkbox" disabled :checked="item.isSelected" />
  </div>
</template>

<script>
// 内部使用对象绑定
export default {
  name: "PropComponent2",
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  computed: {
    display: function() {
      return `${this.item.id}:${this.item.name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.prop-component {
  display: flex;
}
</style>
