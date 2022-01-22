<template>
  <div id="app" class="bg-background min-h-screen overflow-x-hidden">
    <div class="fixed h-full w-full z-0">
      <canvas width="150" height="600" ref="can" class="w-full h-full"></canvas>
    </div>
    <Navbar/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view class="desktop:ml-32 tablet:ml-0 home-content mx-auto relative z-10" />
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
    window.addEventListener('scroll',this.test)
    initCanvas(this.$refs.can);
  },
  beforeDestroy(){
    destroyCanvas()
  }
}
</script>