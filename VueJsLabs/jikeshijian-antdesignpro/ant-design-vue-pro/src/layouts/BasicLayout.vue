<template>
  <div>
    <Header></Header>
    <SiderMenu></SiderMenu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import SiderMenu from "./SiderMenu";
import Header from "./Header";
import Footer from "./Footer";

export default {
  components: {
    SiderMenu,
    Header,
    Footer
  }
};
</script>

<style lang="scss" scoped></style>
