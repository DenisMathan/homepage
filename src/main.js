import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css';
import './assets/css/font.css';

Vue.config.productionTip = false
// var script = document.createElement('script');
// script.src = "https://cloud.ccm19.de/app.js?apiKey=55f0aeab2dc486b39148b331ccb52d525a063386d72d7d2a&amp;domain=654b9e585fc5d82ae3018e32";
// document.head.appendChild(script); //or something of the likes

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
