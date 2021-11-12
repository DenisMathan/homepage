<template>
  <div class="home">
    <h1>Hello</h1>
    <div ref="gl" class=threeDContainer></div>y
<!--     <div class="canvasContainer">
        <canvas width="250" height="250" ref="myCanvas">
        </canvas>
        
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {init} from '@/js/threeD.js';
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){return{
    canvas: null,
    words: [{
      name: 'HTML',
      xpos: 0,
      ypos: 0,
      pos: 1
    }],
    three:{
      scene: null,
      camera: null,
      renderer: null,
      cube: null
    },
    renderer: null
  }},
  mounted(){
    init(this.$refs.gl);
  },
  methods:{

  } 
}
</script>
<style scoped>
  .threeDContainer{
    width: 50vw;
    height:50vw;
  }
</style>