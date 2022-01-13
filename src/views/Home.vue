<template>
  <div class="home">
    <div class="fixed top-6 right-12 h-12 w-12 hidden tablet:block cursor-pointer z-50" @click="toggleNav()"><img class="h-full w-full" :src="require('@/assets/icons/menu.png')" alt="menu-button"></div>
    <Navbar/>
    <div class="ml-32 tablet:ml-0 px-16 mobile:px-2 ">
          <Welcome/>
          <Skills/>
          <About/>
          <Projects/>
          <Contact/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/welcome.vue'
import Contact from '@/components/contact.vue'
import Projects from '@/components/Projects.vue'
import About from '@/components/about.vue'
import Skills from '@/components/skills.vue'
import Navbar from '@/components/elements/navbar.vue'

export default {
  name: 'Home',
  components: {
    Projects,
    Welcome,
    Navbar,
    About,
    Skills,
    Contact

  },  
  data(){
    return{
      navbar: false
    }
  },
  methods:{
    toggleNav(){
      if(this.navbar){
        document.querySelector('#navbar').classList.add('tablet:right-full')
      }else{
        document.querySelector('#navbar').classList.remove('tablet:right-full')
      }
      this.navbar = !this.navbar
    },
  },
}
</script>
