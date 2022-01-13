<template>
<section ref= "content" class="about min-h-screen">
  <h2 data-headinganim-skills class="opacity-0">&lt;My Skills&gt;</h2>
  <div class="flex tablet:flex-col justify-stretch">
    <div class="w-1/2 tablet:w-full pr-12">
      <h3>Programming</h3>
      <div v-for="program in programming" :key="program.name" class="px-6">
        <h4>{{program.name}}</h4>
        <div class="bg-gray-600 w-full h-1 rounded-full skill-container" >
          <div class="h-full bg-myGreen rounded-full skill"  :style="'width:'+program.percent+'%'"></div>
        </div>
      </div>
      <h3 class="mt-4">Creative</h3>
      <div v-for="program in creative" :key="program.name" class="px-6">
        <h4>{{program.name}}</h4>
        <div class="bg-gray-600 w-full h-1 rounded-full skill-container" >
          <div class="h-full bg-myGreen rounded-full skill"  :style="'width:'+program.percent+'%'"></div>
        </div>
      </div>
    </div>
    <div class="w-1/2 tablet:w-full">
    <h3 class="text-center tablet:text-left">Technologies I have worked with</h3>
      <div class="h-full flex items-center">
        <div ref="gl" :style="'height:' +width + 'px'" class="threeDContainer w-full"></div>
      </div>
    </div>
  </div>

</section>

</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
import {init, resize} from '@/js/threeD.js';
export default {
  data(){
    return{
      width: 0,
      programming:{
        frontend: {name:'Frontend',percent:90},
        backend: {name: 'Backend', percent: 70 },
        java: {name:'Java',percent:60},
        python: {name:'Python',percent:40}
      },
      creative: {
        DsMax: {name:'3D\'s Max',percent:60},
        illustrator: {name:'Illustrator',percent:70},
        photoshp: {name:'Photoshop',percent:60},
      }
    }
  },
    mounted(){
        window.addEventListener("scroll", this.onScroll, true);
        
        window.addEventListener("resize", this.resizing, true);
        this.width= this.$refs.gl.clientWidth;
        init(this.$refs.gl)
  },
    methods: {
      onScroll(){
          if(this.$refs.content.getBoundingClientRect().y - 500 <= 0){
              let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-skills]"));
              manipulate(all_headings);
              window.removeEventListener("scroll", this.onScroll, true)
              let skills = document.querySelectorAll('.skill');
              for(let i= 0; i<skills.length; i++){
                const skill = skills[i];
                skill.classList.add('show')
              }
          }
      },
      resizing(){
            resize(this.$refs.gl)
      }
    },
    beforeDestroy(){
      window.removeEventListener("scroll", this.onScroll, true);
      window.removeEventListener("resize", this.resizing, true);
  }
}
</script>

<style>

</style>
<style scoped>
.skill{
  transform-origin: left;
  transition:all 4s ease-out;
  transform:scale(0,1);
  box-shadow: 0px 0px 4px 2px greenyellow;
}
.show{
  transform:scale(1,1);
}
</style>