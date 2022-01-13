<template>
  <div>
    <div class="relative mobile:h-64 h-128 mb-6">
      <div @click="moveback()" class="text-white cursor-pointer z-40 absolute opacity-50 h-full w-12 text-center">
        <button class="h-full text-4xl">&lt;</button>
      </div>
      <div class="absolute w-full mobile:h-64 h-128 z-20" >
        <div class=" h-full w-full relative">
          <div v-for="(project) in projects" :key="project.name" data-project class="project z-10 flex justify-center items-center" :class="(project.position<3)?'project-'+ project.position:'hidden'"  :title="(project.position!==2)?project.name:''">
            <div class="mobile:h-64 mobile:w-64 h-128 w-128 flex justify-center items-center">
              <img :class="(project.form==='upright')?'h-full w-auto':'w-full h-auto'"  :src="project.img" alt="">
            </div>
          </div>
        </div>
      </div>
      <div @click="moveforward();" class="absolute opacity-50 h-full w-12 text-center right-0 li z-40"><button class="text-white h-full text-4xl">&gt;</button></div>
    </div>
    <div class="text-white w-128 h-150 mobile:w-full m-auto" :class="(textwidthLikeImg)?'w-128':'w-full'">
      <h3 :key="obj.headline">{{obj.headline}}</h3>
      <p v-for="paragraph in obj.p" :key="paragraph" @change="test()" @>{{paragraph}}</p>
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
  mounted(){
    this.obj = this.$props.projects[1]
  },
  methods: {
    test(){
      console.log('hihi')
    },
    switchParagraph(){
      console.log(this.$props.projects.filter((a)=>{return a.position === 1}))
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