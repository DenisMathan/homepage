import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Impressum from '../views/Impressum.vue'
import Chess from '../views/projectpages/Chess.vue'
import Coma from '../views/projectpages/Coma.vue'
import FirstApp from '../views/projectpages/FirstApp.vue'
import BA from '../views/projectpages/BA.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/coma',
    name: 'Coma',
    component: Coma
  },
  {
    path:'/chess',
    name: 'Chess',
    component: Chess
  },
  {
    path:'/firstapp',
    name: 'FirstApp',
    component: FirstApp
  },
  {
    path:'/bachelor-thesis',
    name: 'Bacherlor-Thesis',
    component: BA
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
