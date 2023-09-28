import { createRouter, createWebHistory } from 'vue-router'
import main from '../views/mainPage.vue'

import Bar1 from '../components/PageBar01.vue'
import Bar2 from '../components/PageBar02.vue'
import Bar3 from '../components/PageBar03.vue'
import Bar4 from '../components/PageBar04.vue'
import Bar5 from '../components/PageBar05.vue'
import Bar6 from '../components/PageBar06.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/Bar1',
      name: 'Bar1',
      component: Bar1
    },
    {
      path: '/Bar2',
      name: 'Bar2',
      component: Bar2
    },
    {
      path: '/Bar3',
      name: 'Bar3',
      component: Bar3
    },
    {
      path: '/Bar4',
      name: 'Bar4',
      component: Bar4
    },
    {
      path: '/Bar5',
      name: 'Bar5',
      component: Bar5
    },
    {
      path: '/Bar6',
      name: 'Bar6',
      component: Bar6
    }
  ]
})

export default router
