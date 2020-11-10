import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import locale from 'element-ui/lib/locale/lang/en'
import './assets/element-variables.scss'
import VueRouter from 'vue-router'
import clickoutside from 'element-ui/lib/utils/clickoutside'

Vue.config.productionTip = false

//1. 引入ElementUI和路由
Vue.use(ElementUI, { locale })
Vue.use(VueRouter)

//2. 定义路由组件 （使用后面 import(/* webpackChunkName: 的方式可以不用声明导入组件）
// import TabLab from './components/TabLab'
// import BadgeLab from './components/BadgeLab'
// import PopoverLab from './components/PopoverLab'

//3. 定义路由
const routes = [
  { path: '/tablab', name: 'TabLab', component: () => import(/* webpackChunkName: "labs" */ './components/TabLab') },
  { path: '/badgelab', name: 'BadgeLab', component: () => import(/* webpackChunkName: "labs" */ './components/BadgeLab') },
  { path: '/popoverlab', name: 'PopoverLab', component: () => import(/* webpackChunkName: "labs" */ './components/PopoverLab') },
  { path: '/treelab', name: 'TreeLab', component: () => import(/* webpackChunkName: "labs" */ './components/TreeLab') },
  { path: '/dialoglab', name: 'DialogLab', component: () => import(/* webpackChunkName: "labs" */ './components/DialogLab') },
  { path: '/inputLab', name: 'InputLab', component: () => import(/* webpackChunkName: "labs" */ './components/InputLab') },
]

//4. 创建router实例，然后传入配置
const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.directive('clickoutside', clickoutside)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
