<template>
    <div class="test relative p-12 tablet:p-6 mobile:p-2 overflow-hidden text-white">
      <h1 data-headinganim-chess class="opacity-0 mb-6">
          Chatbot
      </h1>
      <h2>{{text['motivation'].title}}</h2>
      <p>{{text['motivation'].text}}</p>
      
      <h2>{{text['TechnicalStructure'].title}}</h2>
      <div v-for="technologie in text['TechnicalStructure']" :key="technologie.title">
        <h3>{{technologie.title}}</h3>
        <p v-for="paragraph in technologie.text" :key="paragraph">{{paragraph}}</p>
      </div>

      <h2>Result</h2>
      <p>It is a functioning chatbot which is able to answer questions in an rudimentary way. It could be much better by using a better model but for that case you also need much better hardware!</p>
      <a href="./chat">chatbot</a>
    </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
import text from '@/assets/texts/projectpages/chatbot.json';
export default {
  name: 'BA',
  metaInfo: {
    meta:[{
      name: 'description',
      content: 'This page presents a chatbot which I Denis Mathan developed as a sideproject'
    }]
  },
  components:{
    carousel
  },
    data(){
        return{
          text: text['BA'],
        }
    },
    mounted(){
      
      let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-chess]"));
      manipulate(all_headings);
    },
    methods: {
      moveforward(){
          for(let i = 0; i<this.images.length; i++){
            const project = this.images[i];
            if(project.position != this.images.length-1){
              project.position++;
            }
            else{
              project.position = 0;
            }
          }
          this.switchParagraph()
      },
      moveback(){
          for(let i = 0; i<this.images.length; i++){
            const project = this.images[i];
            if(project.position !== 0){
              project.position--;
            }
            else{
              project.position = this.images.length-1;
            }
          }
          this.switchParagraph()
      },
    },
}
</script>

<style scoped>

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