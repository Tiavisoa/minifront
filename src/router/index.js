import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Equipe from '../views/Equipe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Equipe',
    name: 'Equipe',
    component: Equipe
  },
]

const router = new VueRouter({
  routes
})

export default router
