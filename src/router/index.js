import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("@/views/login/login.vue"),
    meta: {
      keepAlive: true,
      title: "登录",
    },
  },
  {
    path: "/register",
    name: "login_reigster",
    component: () => import("@/views/login/register.vue"),
    meta: {
      keepAlive: true,
      title: "注册",
    },
  },

  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
