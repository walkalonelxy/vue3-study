import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Layout,
    },
    {
      path: "/virtualList", // 虚拟列表
      name: "VirtualList",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/virtualList/index.vue"),
    },
  ],
});

export default router
