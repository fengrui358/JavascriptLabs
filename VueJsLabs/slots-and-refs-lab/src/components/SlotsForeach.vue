<template>
  <!-- slot名称中不能使用'-' -->
  <div class="container">
    <div>
      <!-- 3. ref1 通过v-if绑定slot1，可以挂载Dom -->
      <div ref="ref1" v-if="$slots.slot1">
        div1
        <!-- 1. 模板使用者只给slot1赋值 -->
        <slot name="slot1"></slot>
      </div>
      <slot></slot>
      <!-- 4. ref2 通过v-if绑定slot2，不可以挂载Dom -->
      <div ref="ref2" v-if="$slots.slot2">
        div2
        <!-- 2. 模板使用者没有给slot1赋值 -->
        <slot name="slot2"></slot>
      </div>
      <div style="background-color:red" v-if="$slots.slot1">slot1 flag</div>
      <div style="background-color:yellow" v-if="$slots.slot2">slot2 flag</div>

      <!-- 6. 在这里使用refs的判断全部判断成了无效 -->
      <div style="background-color:blue" v-if="$refs.ref1">ref1 flag</div>
      <div style="background-color:orange" v-if="$refs.ref2">ref2 flag</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlotsForeach",
  mounted: function() {
    if (this.$slots.default != null) {
      console.log(`find default ${JSON.stringify(this.$slots.default)}`);
      console.log(`find default is ${typeof this.$slots.default}`);
    }

    if (this.$slots.slot1 != null) {
      console.log(`find slot1 ${JSON.stringify(this.$slots.slot1)}`);
      console.log(`find slot1 is ${typeof this.$slots.slot1}`);
    }

    if (this.$slots.slot2 != null) {
      console.log(`find slot2 ${JSON.stringify(this.$slots.slot2)}`);
      console.log(`find slot2 is ${typeof this.$slots.slot2}`);
    }

    if (this.$refs.ref1 != null) {
      console.log(`find ref1 ${JSON.stringify(this.$refs.ref1)}`);
      console.log(`find ref1 is ${typeof this.$refs.ref1}`);
    }

    //5. 在ref2没有挂载到Dom的情况下，这里获取不到ref2，如果使用v-show这里可以获取到
    if (this.$refs.ref2 != null) {
      console.log(`find ref2 ${JSON.stringify(this.$refs.ref2)}`);
      console.log(`find ref2 is ${typeof this.$refs.ref2}`);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
}
</style>