import { createRouter, createWebHistory } from 'vue-router'

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
  {
    path:'/quantum-computing',
    name: 'QuantumComputing',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'quantum-computing' }
  },
  {
    path:'/arcade-game',
    name: 'ArcadeGame',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'arcade-game' }
  },
  {
    path:'/tutor-app',
    name: 'TutorApp',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'tutor-app' }
  },
  {
    path:'/placemark-app',
    name: 'PlacemarkApp',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'placemark-app' }
  },
  {
    path:'/hits-and-history',
    name: 'HitsAndHistory',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'hits-and-history' }
  },
  {
    path:'/ml-diabetes-prediction',
    name: 'MlDiabetesPrediction',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'ml-diabetes-prediction' }
  },
  {
    path:'/grimlang',
    name: 'Grimlang',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'grimlang' }
  },
  {
    path:'/aumovio',
    name: 'Aumovio',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'aumovio' }
  },
  {
    path:'/vector',
    name: 'Vector',
    component: () => import ('../views/projectpages/GenericProject.vue'),
    props: { projectSlug: 'vector' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import ('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
