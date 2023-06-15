import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Landing from './views/Landing.vue'
import Planets from './views/Planets.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/landing',
      component: Landing,
    },
    {
      path: '/planets/:id',
      name: 'Planet',
      component: Planets,
      props: true,
    },
    {
      path: '/planets',
      redirect: to => {
        return { path: '/landing' }
      }
    },
  ],
})
