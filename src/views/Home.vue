<template>
  <div class="home" >
    <div class="px-16 mobile:px-0">
      <Welcome class="mobile:px-2"/>
      <Skills class="mobile:px-2"/>
      <Projects class="mobile:px-2"/>
      <!-- <About />  -->
    </div>
    <!-- <myfooter  class="tablet:ml-0 relative z-10"/>   -->
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/welcome.vue'
import Projects from '@/components/Projects.vue'
import About from '@/components/about.vue'
const Skills = ()=> import ('@/components/skills.vue')
import Navbar from '@/components/elements/navbar.vue'
import myfooter from '@/components/footer.vue'

export default {
  name: 'Home',
  metaInfo: {
    meta:[{
      vmid: 'description',
      name: 'description',
      content: 'This page introduces the developer, Denis Mathan. It also contains many other of his projects, apart from programming.'
    }]
  },
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
}
</script>

<style lang="css">
  #home{
    height: 50px
  }
</style>