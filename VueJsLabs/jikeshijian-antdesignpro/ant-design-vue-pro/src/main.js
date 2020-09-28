import Vue from "vue";
// 1. 全局引入ant-design，大概15mb
//import Antd from "ant-design-vue";

// 2. 只引入Button，大概6.3mb
//import Button from "ant-design-vue/lib/button";

// 3. 使用babel插件实现按需引入组件 https://www.antdv.com/docs/vue/introduce-cn/#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD
import { Button, Layout, Icon, Drawer, Radio, Menu } from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Authorized from './components/Authorized'; //权限组件，优点灵活，缺点是需要嵌套，写法繁琐
import Auth from './directives/auth'; //权限指令，优点是使用简单，缺点是只只会在开始渲染时执行一次，无法后期动态变更

// 1. 全局引入ant-design样式
//import "ant-design-vue/dist/antd.less";

// 2. 只引入Button样式
//import "ant-design-vue/lib/button/style";

Vue.config.productionTip = false;

// 1. Vue.use(Antd);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.component('Authorized', Authorized);
Vue.use(Auth);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
