import getCookie from '@/utils/cookie';
import { createRouter, createWebHashHistory } from "vue-router";

export const routerPath = {
  login: "/login",
  register: "/register",
  projecthome: "/project/home",
  projectdetail: "/project/detail",
  projectApiDetail: "/project/api",

};

const routes = [
  {
    path: routerPath.login,
    name: "login",
    component: () => import("@/views/login/login.vue"),
    meta: {
      keepAlive: true,
      title: "登录",
    },
  },
  {
    path: routerPath.register,
    name: "login_reigster",
    component: () => import("@/views/login/register.vue"),
    meta: {
      keepAlive: true,
      title: "注册",
    },
  },
  {
    path: routerPath.projecthome,
    name: "project_home",
    component: () => import("@/views/project/projectHome.vue"),
    meta: {
      keepAlive: true,
      title: "首页",
    },
  },
  {
    path: routerPath.projectdetail,
    name: "project_detail",
    component: () => import("@/views/project/projectDetail.vue"),
    meta: {
      keepAlive: true,
      title: "项目详情",
    },
  },
  {
    path: routerPath.projectApiDetail,
    name: "project_api",
    component: () => import("@/views/project/apiDetail.vue"),
    meta: {
      keepAlive: true,
      title: "api详情",
    },
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === routerPath.login || to.path === routerPath.register) {
    next();
  } else {

    let token = getCookie("Authorization");
    if (token == null || token.length == 0) {
      console.log("未登录");
      next(routerPath.login);
    } else {
      console.log("跳转了");
      next();
    }
  }
});
