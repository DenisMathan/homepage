<template>
  <div class="">
    <h3 class=" mb-6">{{name}}</h3>
    <div class="relative custom-h  max-w-4xl m-auto">
      <div @click="moveback()" class="text-white cursor-pointer z-40 absolute opacity-50 h-full w-12 text-center">
        <button class="h-full text-4xl">&lt;</button>
      </div>
      <div class="absolute w-full z-20">
        <div class="custom-h w-full relative">
          <div v-for="(project, index) in projects" :key="project.name" data-project class="project z-10" :class="(project.position<4 && project.position>0)?'project-'+ project.position:'hidden'"  :title="(project.position==2)?project.name:''">
            <div :class="(project.position===2)?'flip-card':''">
              <div :id="name+'-'+index" :class="(project.position===2)?'flip-card-inner':''" @click="(e)=>{flip(name+'-'+index,e)}">
                <div class="front bg-center bg-cover text-white cursor-pointer" :class="(!project.img)?('bg-backgroundLight'):('')" :style="'background-image: url('+project.img+')'">
                  <h4 class="absolute right-4 bottom-0 z-20 tex" :class="(project.text==='dark')?'text-background':''">{{project.name}}</h4>
                </div>
                <div class="back bg-center bg-cover" :style="(project.img)?('background-image: url('+project.img+')'):('bg-backgroundLight')">
                  <div class="h-full w-full bg-gray-600 bg-opacity-80 p-12">
                    <h4 class="text-center mb-8">{{project.name}}</h4>
                    <div class="text-white text-base ">
                      <p v-for="paragraph in project.description" :key="paragraph">{{paragraph}}</p>
                      <p v-if="project.link">Click <a :href="project.link" rel="noopener" target="_blank">here</a> to learn more!</p>
                      <p v-if="project.learnMore"><a :href="'./'+project.learnMore" rel="noopener" target="_blank">Want to see more?</a></p>
                      <p v-if="project.goto"><a :href="project.goto" rel="noopener" target="_blank">Go to {{project.name}}!</a></p>
                      <p v-if="project.github"><a :href="project.github" rel="noopener" target="_blank">Go to code!</a></p>
                      <div  :class="(project.position!==2)?('hidden'):''" v-if="project.vid">
                        <cine :url="project.vid"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div @click="moveforward();" class="absolute opacity-50 h-full w-12 text-center right-0 li z-40">
        <button class="text-white h-full text-4xl">&gt;</button>
      </div>
    </div>
  </div>
</template>
<script>
import cine from '@/components/elements/video/video.vue';
export default {
  components:{
    cine
  },
  props:{
      projects: Array,
      name: String
  },
  beforeMount(){
    for(let i=0; i<this.projects.length; i++){
      let pos = i+2;
      if(pos===this.projects.length) this.projects[i].position = 0;
      else if(pos>this.projects.length) this.projects[i].position = 1;
      else this.projects[i].position = i+2;
    }
  },
  methods: {
      moveforward(){
        for(let i = 0; i<this.projects.length; i++){
          const project = this.projects[i];
          if(project.position !== 0){
            project.position--;
          }
          else{
            project.position = this.projects.length-1;
          }
        }
      },
      moveback(){
        for(let i = 0; i<this.projects.length; i++){
          const project = this.projects[i];
          if(project.position != this.projects.length-1){
            project.position++;
          }
          else{
            project.position = 0;
          }
        }
      },
      flip(id,e){
        if(e.target.dataset.vid===undefined && e.target.localName !== 'a'){
          let flipcard = document.querySelector('#'+id)
          if(flipcard.classList.contains('flip')){
            flipcard.classList.remove('flip');
          }else{
            flipcard.classList.add('flip');
          }
        }
      }
  }
}
</script>
<style scoped>
.custom-h{
    height: 30rem
}
.project{
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  transition: all 1s ease-out; 
  
}
.project:hover{
  z-index: 60;
}
.project-1{
  left: -100%;
  transform: perspective(50cm) rotate3d(0,1,0, 45deg) scale(1.35) ;
}
.project-2{
  left: 0;
  opacity: 1;
  transform: perspective(50cm)  scale(1) rotate3d(0,1,0, 0deg);
}
.project-3{
  left: 100%;
  transform: perspective(50cm) rotate3d(0,1,0, -45deg)  scale(0.9);
}
.flip{
    transform: rotateY(180deg) scale(1);
}
::-webkit-scrollbar {
    width: 0rem;
}

</style>