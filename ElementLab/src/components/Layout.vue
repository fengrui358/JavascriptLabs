<template>
  <el-container>
    <el-header>Hello Element</el-header>
    <el-container>
      <el-aside>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          class="el-menu-vertical-demo"
          router
          @open="handleOpen"
          @close="handleClose"
          @select="selectedHandler"
          :collapse="isCollapse"
        >
          <el-submenu index="Basic">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Basic</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="Basic-TabLab" :route="{name: 'TabLab'}">TabLab</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="Form">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">Form</span>
            </template>
          </el-submenu>
          <el-submenu index="Data">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">Data</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="Data-TreeLab" :route="{name: 'TreeLab'}">TreeLab</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="Notice">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">Notice</span>
            </template>
          </el-submenu>
          <el-submenu index="Navigation">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">Navigation</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="Navigation-BadgeLab" :route="{name: 'BadgeLab'}">BadgeLab</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="Others">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">Others</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="Others-PopoverLab" :route="{name: 'PopoverLab'}">PopoverLab</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectedHandler(index, indexPath) {
      console.log(index, indexPath);
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>