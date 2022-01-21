<template>
  <div class="home">
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
  metaInfo: {
    title: 'Denis Mathan || Webdeveloper',
    meta:[{
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
  methods:{

  },
}
</script>

<style>
.home-content{
  max-width: 1300px;
  margin:0 auto 0 auto;
}
</style>