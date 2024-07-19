<template>
  <div id="app" class="bg-background min-h-screen overflow-x-hidden">
    <div class="fixed h-full w-full z-0">
      <canvas width="150" height="600" ref="can" class="w-full h-full"></canvas>
    </div>
    <Navbar :position="position" />
    <div class="page-content desktop:ml-32 tablet:ml-0 home-content mx-auto relative z-10  w-full">
      <router-view class="w-full" />
    </div>
    <!-- <router-view class="page-content desktop:ml-32 tablet:ml-0 home-content mx-auto relative z-10" /> -->
    <myfooter  class="tablet:ml-0 relative z-10"/>
  </div>
</template>

<script>
import {initCanvas, destroyCanvas} from '@/js/canvasDraw.js';
import myfooter from '@/components/footer.vue'
import Navbar from '@/components/elements/navbar.vue'
export default {
  components:{
    myfooter,
    Navbar
  },
  mounted(){
    document.title = "Denis Mathan || Webdeveloper"
    window.addEventListener('scroll',this.onScroll)
    this.windowHeight = window.innerHeight
    initCanvas(this.$refs.can);
  },
  data(){
    return {
      windowHeight: undefined,
      skills: undefined,
      skillsTop: undefined,
      projects: undefined,
      projectsTop: undefined,
      about: undefined,
      aboutTop: undefined,
      position: ""
    }
  },
  methods: {
    onScroll() {  
      this.getPositions();
      let startPoint = this.windowHeight/2
      this.position = ''
      if (this.skillsTop < startPoint) {
        this.position = 'skills'
      }
      if (this.projectsTop < startPoint) {this.position = 'projects'}
      if (this.aboutTop < startPoint) {this.position = 'about'}
    },
    getPositions() {
      if (this.skills == undefined) {
        this.skills = document.querySelector('#skills')
      }
      this.skillsTop = this.skills?.getBoundingClientRect().top
      if (this.projects == undefined) {
        this.projects = document.querySelector('#projects')
      }
      this.projectsTop = this.projects?.getBoundingClientRect().top
      if (this.about == undefined) {
        this.about = document.querySelector('#about')
      }
      this.aboutTop = this.about?.getBoundingClientRect().top
    }
  },
  beforeDestroy(){
    destroyCanvas()
    window.addEventListener('scroll',this.onScroll)
    
  }
}
</script>

<style>

#app {
  background-image: url('./assets/images/background/bg2.webp');
  background-size: cover;
  --tw-bg-opacity: 0.5;
}
.page-content{
  max-width: 1300px;
}
</style>