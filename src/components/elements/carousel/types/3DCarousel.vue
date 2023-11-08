<template>
  <div>
    <h3 class="test mb-6">{{name}}</h3>
    <div class="flex max-w-7xl m-auto">
      <div @click="moveback()" class="text-white cursor-pointer z-20">
        <button class="h-full text-4xl">&lt;</button>
      </div>
      <div class="flex-1">
        <div class="w-full mx-auto relative h-64">
          <div v-for="(project, index) in projects" :key="project.name" data-project class="project w-64 h-64" :class="[(project.position<5||project.position==0)?'project-'+ project.position:'hidden']"  :title="(project.position!==3)?project.name:''">
                <div :class="(project.position===2)?'flip-card':''" >
                  <div :id="name+'-'+index" :class="(project.position===2)?'flip-card-inner':''"  @click="(e)=>{flip(name+'-'+index,e, project.position)}">
                    <div class="front bg-backgroundLight bg-center bg-cover" :class="(project.position===2)?'cursor-pointer':''" :style="'background-image: url('+project.img+')'">
                      <h4 class="absolute bottom-0 z-20" :class="(project.text==='dark')?'text-background':''" >{{project.name}}</h4>
                    </div>
                    <div class="beep back bg-backgroundLight">
                        <div class="back-content  bg-center bg-cover" :class="project.size" :style="'background-image: url('+project.img+')'">
                          <div class="h-full w-full  overflow-y-auto bg-gray-600 bg-opacity-80" :class="(project.size)?'p-2':'p-12'">
                            <h4 class="text-center">{{project.name}}</h4>
                            <div class="text-white">
                              <p v-for="paragraph in project.description" :key="paragraph">{{paragraph}}</p>
                              <p v-if="project.link">Click <a :href="project.link" target="_blank">here</a> to learn more!</p>
                              <p v-if="project.learnMore"><a :href="'./'+project.learnMore" target="_blank">Want to see more?</a></p>
                              <p v-if="project.goto"><a :href="project.goto" target="_blank">Go to {{project.name}}!</a></p>
                              <p v-if="project.github"><a :href="project.github" target="_blank">Go to code!</a></p>
                              <div :class="(project.position!==2)?('hidden'):''" v-if="project.vid" >
                                <cine   :url="project.vid"/>
                              </div>
                            </div> 
                          </div>

                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div @click="moveforward();" class="cursor-pointer z-20"><button class="text-white h-full text-4xl">&gt;</button></div>
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
        flip(id,e,pos){
        if(pos===2){
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
}
</script>
<style>
.front img{
  transform: translate(-50%,-50%)
}
</style>
<style scoped>
h4{
  right: 0.25rem;
}
.project{
  position: absolute;
  transition: all 1s ease-out; 
  opacity:1;
  
}

.project-0{
  z-index: 0;
  left: -15%;
  transform: perspective(50cm) rotate3d(0,1,0, 85deg) scale(1.35) ;
  opacity: 0;
}
.project-1{
  left: 0;
  transform: perspective(50cm)  scale(1) rotate3d(0,1,0, 45deg);
}
.project-2{
  z-index: 30;
  left: 50%;
  transform: perspective(50cm) rotate3d(0,1,0, 0deg) translate(-50%)  scale(0.9);
}
.project-3{
  left: 100%;
  transform: perspective(50cm)  scale(1)  translate(-100%) rotate3d(0,1,0, -45deg);
}
.project-4{
  z-index: 0;
  left:85%;
  opacity: 0;
  transform: perspective(50cm) rotate3d(0,1,0, -85deg)  scale(1.35) translate(-100%);
}
.flip{
    -webkit-font-smoothing: subpixel-antialiased;
    transform: rotateY(180deg) scale(1);
}
.back-content{
  transition: all 0.5s;
  transition-delay: 0.5s;
  position: absolute;
  transform: translate(-50%,-50%) scale(0.2);
  left: 50%;
  top: 50%;
  max-height: 90vh;
  width: 70rem;
  height: 70rem;
}
.small.back-content{
  width:100%;
  height: 100%;
}
.middle.back-content{
    width:150%;
  height: 150%;
}
.flip .back-content {
  transition: all 0.5s;
  transition-delay: 0s;
  position: absolute;
  transform: translate(-50%,-50%) scale(1);
  left: 50%;
  top: 50%;
}
</style>