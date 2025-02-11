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

      <h2>Used model</h2>
      <p>capybarahermes-2.5-mistral-7b.Q3_K_M.gguf</p>
      <p><a href="https://huggingface.co/TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF">You can get it here!</a></p>

      <h2>Prompt</h2>
      <p>
        <|im_start|> <br>
        You are Denis who thinks like: <br>
        {<strong>data</strong>} <br>
        Don't add additional things!<|im_end|> <br>
        <|im_start|> <br>
        {<strong>user-input</strong>}<|im_end|> <br>
        <|im_start|>assistant <br>
      </p>
      <p>
        <strong>data</strong>: Phrases found in ChromaDB with a vector distance of less than one
      </p>
      <p>
        <strong>user-input</strong>: the actual prompt of the user
      </p>
      <dynContent :title="'Current knowledge'" :phrases="this.knowledge"></dynContent>
      <h2>Result</h2>
      <p>It is a functional chatbot capable of answering questions in a basic manner. Its performance could be significantly improved by utilizing a more advanced model, which would also require superior hardware.</p>
      <a href="./chat">You can try it here :)</a>
    </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
import text from '@/assets/texts/projectpages/chatbot.json';
import dynContent from '../../components/dynContent.vue';
import { getKnowledge } from '../../js/requests';
export default {
  name: 'BA',
  metaInfo: {
    meta:[{
      name: 'description',
      content: 'This page presents a chatbot which I Denis Mathan developed as a sideproject'
    }]
  },
  components:{
    carousel,
    dynContent
  },
    data(){
        return{
          text: text['BA'],
          knowledge: []
        }
    },
    mounted(){
      this.requestKnowledge();
      let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-chess]"));
      manipulate(all_headings);
    },
    methods: {
      async requestKnowledge() {
        this.knowledge = await getKnowledge();
      },
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

strong {
  color: rgb(14 245 177);
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