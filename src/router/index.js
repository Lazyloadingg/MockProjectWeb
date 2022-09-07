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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
