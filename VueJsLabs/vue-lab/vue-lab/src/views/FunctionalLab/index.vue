<template>
  <div>
    <TempVar
      :var1="`hello ${name}`"
      :var2="isVue ? 'hello vue' : 'hello world'"
    >
      <template v-slot:default="{ var1, var2 }">
        <p>sadfaf</p>
        <Functional :str="var2"></Functional> {{ var1 }}
        {{ var2 }}
      </template>
    </TempVar>
  </div>
</template>

<script>
import Functional from "./Functional";
import TempVar from "./TempVar";

export default {
  components: { Functional, TempVar },
  data() {
    return {
      name: "free",
      isVue: true,
    };
  },
};
</script>