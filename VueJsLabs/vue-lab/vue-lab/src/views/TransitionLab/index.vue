<template>
  <div class="transition-lab">
    进入/离开 & 列表过渡
    <div id="demo">
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <div v-if="show">
          <p>hello</p>
          <p>world</p>
        </div>
      </transition>
    </div>
    <div class="dynamic-components">
      <button @click="switchComponent">切换组件</button>
      <transition name="dynamic-component-fade" mode="out-in">
        <component :is="dynamicComponent"></component>
      </transition>
    </div>
    <div>
      列表动画
      <!-- https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E7%9A%84%E8%BF%9B%E5%85%A5-%E7%A6%BB%E5%BC%80%E8%BF%87%E6%B8%A1 -->
      <div id="list-complete-demo" class="demo">
        <button v-on:click="shuffle">Shuffle</button>
        <button v-on:click="add">Add</button>
        <button v-on:click="remove">Remove</button>
        <transition-group name="list-complete" tag="p">
          <span
            v-for="item in items"
            v-bind:key="item"
            class="list-complete-item"
          >
            {{ item }}
          </span>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicComponent1 from "./DynamicComponent1";
import DynamicComponent2 from "./DynamicComponent2";
import _ from 'lodash'

export default {
  data: function () {
    return {
      show: true,
      dynamicComponent: "d1",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  components: {
    d1: DynamicComponent1,
    DynamicComponent2,
  },
  methods: {
    switchComponent() {
      if (this.dynamicComponent === "d1") {
        this.dynamicComponent = "DynamicComponent2";
      } else {
        this.dynamicComponent = "d1";
      }
    },
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle: function () {
      this.items = _.shuffle(this.items);
    },
  },
};
</script>

<style lang="scss" scoped>
#demo {
  background-color: antiquewhite;
  border: 1px solid red;
  width: 30%;
  margin: 0 auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.dynamic-component-fade-enter-active,
.dynamic-component-fade-leave-active {
  transition: all 0.5s;
}

.dynamic-component-fade-enter,
.dynamic-component-fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.list-complete-item {
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter-active,
.list-complete-leave-active {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
// <transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。
// 要使用这个新功能只需了解新增的 v-move class，它会在元素的改变定位的过程中应用。
// 像之前的类名一样，可以通过 name attribute 来自定义前缀，也可以通过 move-class attribute 手动设置。
.list-complete-move {
  transition: all 1s;
}
</style>