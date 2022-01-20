<template>
  <div class="home">
    <div class="fixed top-6 right-12 h-12 w-12 hidden tablet:block cursor-pointer" style="z-index: 51" @click="toggleNav()"><img class="h-full w-full" :src="require('@/assets/icons/menu.png')" alt="menu-button"></div>
    <Navbar/>
    <div class="desktop:ml-32 tablet:ml-0 home-content mx-auto">
      <div class="px-16 mobile:px-0">
        <Welcome class="mobile:px-2"/>
        <Skills class="mobile:px-2"/>
        <Projects class="mobile:px-2"/>
        <About/> 
      </div>
        <!-- <myfooter  class="tablet:ml-0 relative z-10"/>   -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/welcome.vue'
import Projects from '@/components/Projects.vue'
import About from '@/components/about.vue'
import Skills from '@/components/skills.vue'
import Navbar from '@/components/elements/navbar.vue'
import myfooter from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    Projects,
    Welcome,
    Navbar,
    About,
    Skills,
    myfooter
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

<style>
.home-content{
  max-width: 1300px;
  margin:0 auto 0 auto;
}
</style>