import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/i-love-arrays', component: HomeView },
  { path: '/rest-api', component: HomeView },
  // { path: '/', component: HomeView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;