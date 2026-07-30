import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/techview',
    name: 'Techview',
    component: () => import ('../views/Techview.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import ('../views/Impressum.vue')
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import ('../views/Datenschutz.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import ('../views/Contact.vue')
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import ('../views/Chat.vue')
  },
  {
    path: '/coma',
    name: 'Coma',
    component: () => import ('../views/projectpages/Coma.vue')
  },
  {
    path: '/valueminer',
    name: 'Valueminer',
    component: () => import ('../views/projectpages/Valueminer.vue')
  },
  {
    path:'/chess',
    name: 'Chess',
    component: () => import ('../views/projectpages/Chess.vue')
  },
  {
    path:'/firstapp',
    name: 'FirstApp',
    component: () => import ('../views/projectpages/FirstApp.vue')
  },
  {
    path:'/bachelor-thesis',
    name: 'Bacherlor-Thesis',
    component: () => import ('../views/projectpages/BA.vue')
  },
  {
    path:'/chatbot',
    name: 'Chatbot',
    component: () => import ('../views/projectpages/Chatbot.vue')
  },
  // {
  //   path:'/video-player',
  //   name: 'Video-Player',
  //   component: () => import ('../views/VideoPlayer.vue')
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
