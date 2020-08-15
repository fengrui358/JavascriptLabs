import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/404.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);
const routes = [
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/UserLayout"),
    children: [
      {
        path: "/user",
        redirect: "/user/login"
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login")
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/Register")
      }
    ]
  },
  {
    path: "/",
    redirect: "/dashboard"
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      {
        path: "/dashboard/analysis",
        name: "analysis",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis"
          )
      }
    ]
  },
  {
    path: "/form",
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/Forms/BasicForm")
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(()=>{
  NProgress.done();
})

export default router;
