<template>
  <el-row class="tac">
    <el-col :span="4">
      <h5>默认颜色</h5>
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Vue基础功能</span>
          </template>
          <el-menu-item-group>
            <template slot="title">计算属性测试</template>
            <el-menu-item index="1-1" :route="{ name: 'ComputedLab' }"
              >层层嵌套计算属性获取</el-menu-item
            >
            <el-menu-item index="1-2" :route="{ name: 'TransitionLab' }"
              >进入/离开 & 列表过渡</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group :title="`Inject Provide ${providerMsg}`">
            <el-menu-item index="1-3" :route="{ name: 'InjectProvideLab' }"
              >Inject Provide</el-menu-item
            >
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">表单</template>
            <el-menu-item index="1-4-1" :route="{ name: 'InputLab' }"
              >输入校验</el-menu-item
            >
          </el-submenu>
          <el-submenu index="1-5">
            <template slot="title">样式控件</template>
            <el-menu-item index="1-5-1" :route="{ name: 'ColorfulTextLab' }"
              >多色文本</el-menu-item
            >
          </el-submenu>
          <el-submenu index="1-6">
            <template slot="title">函数式组件</template>
            <el-menu-item index="1-6-1" :route="{ name: 'FunctionalLab' }"
              >函数式组件</el-menu-item
            >
            <el-menu-item index="1-6-2" :route="{ name: 'TemplateAndJsxLab' }"
              >Template And JSX</el-menu-item
            >
          </el-submenu>
          <el-submenu index="1-7">
            <template slot="title">时序和生命周期</template>
            <el-menu-item index="1-7-1" :route="{ name: 'LifeCycleLab' }"
              >时序和生命周期</el-menu-item
            >
          </el-submenu>
          <el-submenu index="1-8">
            <template slot="title">Watch</template>
            <el-menu-item index="1-8-1" :route="{ name: 'WatchLab' }"
              >WatchLab</el-menu-item
            >
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <keep-alive>
      <router-view :span="20"></router-view>
    </keep-alive>
  </el-row>
</template>

<script>
import Color from "../constants/enums/Color";

export default {
  data() {
    return {
      providerMsg: "1",
    };
  },
  provide() {
    return {
      provideMsg: this.provideMsg,
    };
  },
  // inject: ['provideMsg'],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    console.log("provideMsg", this.provideMsg);
    console.log(Color.enumFlagOf(1));
  },
};
</script>