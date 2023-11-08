<template>
    <div>
        <h3 class="test mb-6">{{name}}</h3>
            <div class="flex flex-wrap">
        <div v-for="(project, index) in projects" :key="project.name" data-project class="project w-64 h-64 m-4">
            <div class='flip-card' >
                  <div :id="name+'-'+index" class='flip-card-inner'  @click="(e)=>{flip(name+'-'+index,e, project.position)}">
                    <div class="front bg-center bg-cover cursor-pointer bg-background kachelFront" :style="'background-image: url('+project.img+')'">
                      <h4 class="absolute bottom-0 z-20" :class="(project.text==='dark')?'text-background':''" >{{project.name}}</h4>
                    </div>
                    <div class="beep back">
                            <div class="back-content  bg-backgroundLight  bg-center bg-cover" :class="project.size" :style="'background-image: url('+project.img+')'">
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
    
</template>
<script>
import cine from '@/components/elements/video/video.vue';
export default {
    components: {
        cine,
    },
    props:{
        projects: Array,
        name: String
    },
    mounted() {
        console.log(this.$props.projects)
    },
    methods: {
        flip(id,e){
          if(e.target.dataset.vid===undefined && e.target.localName !== 'a'){
            let flipcard = document.querySelector('#'+id)
            if(flipcard.classList.contains('flip')){
              flipcard.classList.remove('flip');
              flipcard.parentElement.parentElement.classList.remove('flipped')
            }else{
              let flipped = document.querySelector(".flipped")
                if(flipped !== null) {
                    flipped.classList.remove("flipped")
                    flipped.querySelector('.flip').classList.remove('flip')
                }
              flipcard.classList.add('flip');
              e.target.parentElement.parentElement.parentElement.classList.add('flipped')
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
  position: relative;
  z-index: 0;
  transition: all 0.5s ease-out; 
  opacity:0.5;
}

.kachelFront{
    border: 1px solid #00FFBC;

}
.back-content{
  transition: all 0.5s;
  transition-delay: 0.5s;
  position: absolute;
  transform: translate(-50%,-50%) scale(0.2);
  left: 50%;
  top: 50%;
  max-height: 90vh;
  width: 30rem;
  height: 30rem;
}
.flip .back-content {
  transition: all 0.5s;
  transition-delay: 0s;
  position: absolute;
  transform: translate(-50%,-50%) scale(1);
  left: 50%;
  top: 50%;
} 
.project:hover {
    z-index: 1001;
    opacity: 1;
}
.flip-card-inner:hover {
    transform: scale(1.5);
}
.flipped {
    z-index: 1000;
    opacity: 1;
}
.flip, .flip.flip-card-inner:hover{
    -webkit-font-smoothing: subpixel-antialiased;
    transform: rotateY(180deg) scale(1);
}
</style>