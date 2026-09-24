<template>
<section id="skills" ref= "content" class="about">
  <h2 data-headinganim-skills class="opacity-0">&lt;Skills&gt;</h2>
  <div class="flex tablet:flex-col justify-stretch">
    <div class="w-1/2 tablet:w-full pr-12 flex items-center">
    <div class="w-full">
      <h3>Languages</h3>
      <div v-for="program in languages" :key="program.name" class="px-6">
        <h4>{{program.name}}</h4>
        <div class="bg-gray-600 w-full h-1 rounded-full skill-container" >
          <div class="h-full bg-myGreen rounded-full skill"  :style="'width:'+program.percent+'%'"></div>
        </div>
      </div>
      <h3 class="mt-4">Frameworks</h3>
      <div v-for="program in frameworks" :key="program.name" class="px-6">
        <h4>{{program.name}}</h4>
        <div class="bg-gray-600 w-full h-1 rounded-full skill-container" >
          <div class="h-full bg-myGreen rounded-full skill"  :style="'width:'+program.percent+'%'"></div>
        </div>
      </div>
    </div>

    </div>
    <div class="w-1/2 tablet:w-full">
    <h3 class="text-center tablet:text-left">Technologies I have worked with</h3>
      <div class="h-full flex justify-center">
        <div ref="gl" :style="'height:' +width + 'px'" class="threeDContainer w-full" @mouseenter="()=>startAnim()"></div>
      </div>
    </div>
  </div>

</section>

</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
import {init, resize, startAnimation} from '@/js/threeD.js';
// const loadThreeD = ()=> import ('@/js/threeD.js')
export default {
  data(){
    return{
      width: 0,
      languages:{
        javascript: {name: 'JavaScript', percent: 95},
        typescript: {name: 'TypeScript', percent: 90},
        golang: {name:'Golang',percent:85},
        java: {name: 'Java', percent: 40},
        python: {name: 'Python', percent: 70},
        c: {name: 'C', percent: 20}
      },
      frameworks: {
        angular: {name:'Angular',percent:90},
        vue: {name: 'Vue', percent: 70},
        react: {name: 'React', percent: 40}
      },
      creative: {
        DsMax: {name:'3D\'s Max',percent:20},
        illustrator: {name:'Illustrator',percent:60},
        photoshp: {name:'Photoshop',percent:60},
        Ableton: {name: 'Ableton Live', percent:20}
      }
    }
  },
  created(){

  },
    mounted(){
        window.addEventListener("scroll", this.onScroll, true);
        window.addEventListener("resize", this.resizing, true);

        this.width = this.$refs.gl?.clientWidth || 0;
        setTimeout(() => {
          if (this.$refs.gl) {
            init(this.$refs.gl);
          }
        }, 50);
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
      },
      startAnim(){
        startAnimation();
      }
    },
    beforeUnmount(){
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
  box-shadow: 0px 0px 4px 2px #21FFFD;
}
.show{
  transform:scale(1,1);
}
</style>