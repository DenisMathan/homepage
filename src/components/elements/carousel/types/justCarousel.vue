<template>
  <div class="flex tablet:block items-stretch">
    <div class="w-1/2 tablet:w-full tablet:mb-4 m-auto relative mobile:h-64 h-128">
      <div @click="moveback()" class="text-white cursor-pointer z-40 absolute opacity-50 h-full w-1/2">
        <button class="h-full text-4xl w-8/12 ml-0">&lt;</button>
      </div>
      <div class="absolute w-full mobile:h-64 h-128 z-20">
        <div class=" h-full w-full relative">
          <div v-for="(project) in projects" :key="project.headline" data-project class="project z-10 flex justify-center items-center" :class="(project.position<3)?'project-'+ project.position:'hidden'"  :title="(project.position===1)?project.name:''">
            <div class="mobile:h-64 mobile:w-64 h-128 w-128 flex justify-center items-center">
              <img v-if="project.img" :class="(project.form==='upright')?'h-full w-auto':'w-full h-auto'"  :src="project.img" alt="">
              <div v-else class="h-full w-full bg-backgroundLight flex justify-center items-center"><h2 >{{project.headline}}</h2></div>
            </div>
          </div>
        </div>
      </div>
      <div @click="moveforward();" class="absolute opacity-50 h-full w-1/2 text-right right-0 li z-40"><button class="text-white h-full w-8/12 text-4xl">&gt;</button></div>
    </div>
    <div class="w-1/2 tablet:w-128 text-white mobile:w-full z-50 tablet:relative tablet:mx-auto flex flex-col" :class="(textwidthLikeImg)?'tablet:w-128':''">
    <div>
      <h3 :key="obj.headline">{{obj.headline}}</h3>
    </div>
      <div class="h-full tablet:h-32 p-2 border-solid border-myGreen border rounded-md overflow-x-auto">
        <p v-for="(paragraph, index) in obj.p" :key="index" @change="test()" @>{{paragraph}}</p>
        <a v-if="obj.link" :href="obj.link.link">Go to {{obj.link.name}} </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
      projects: Array,
      name: String,
      textwidthLikeImg: Boolean
  },
  data(){return{
    obj: []
  }
  },
  beforeMount(){
    for(let i=0; i<this.projects.length; i++){
      let pos = i+1;
      if(pos!==this.projects.length) this.projects[i].position = pos;
      else this.projects[i].position = 0;
    }
  },
  mounted(){
    this.obj = this.$props.projects[0]

  },
  methods: {
    test(){
      console.log('hihi')
    },
    switchParagraph(){
      console.log(this.$props.projects.filter((a)=>{return a.position === 2}))
      this.obj = this.$props.projects.filter((a)=>{return a.position === 1})[0]
    },
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
      this.switchParagraph()     
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
      this.switchParagraph()
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
.project-0{
  left: -100%;
  transform: perspective(50cm) rotate3d(0,1,0, 45deg) scale(1.35) ;
}
.project-1{
  left: 0;
  opacity: 1;
  transform: perspective(50cm)  scale(1) rotate3d(0,1,0, 0deg);
}
.project-2{
  left: 100%;
  transform: perspective(50cm) rotate3d(0,1,0, -45deg)  scale(0.9);
}
</style>