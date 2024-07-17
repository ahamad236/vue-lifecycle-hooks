import { createRouter, createWebHistory } from 'vue-router'
import home from "../components/HomeComponent.vue"
import childHome from "../components/ChildHomeComponent.vue"
import firstPage from "../components/FirstPageComponent.vue"
import secondPage from "../components/SecondPageComponent.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '/',
          component: childHome
        },
        {
          path: 'firstPage',
          component: firstPage
        },
        {
          path: 'secondPage',
          component: secondPage
        }
      ]
    }
  ]
})

export default router
