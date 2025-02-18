<template>
    <div class="test relative p-12 tablet:p-6 mobile:p-2 overflow-hidden text-white">
      <h1 data-headinganim-chess class="opacity-0 mb-6">
          Chatbot
      </h1>
      <div class="versions">
       <span :class="(version===0)?'selected':''" @click="()=>this.switch(0)"> Version 0 </span>  | <span :class="(version===1)?'selected':''" @click="()=>this.switch(1)">Version 1</span>
      </div>
      <dynContent v-for="passage in texts" :title="passage.title" :phrases="passage.text"></dynContent>

      <h2>Used model</h2>
      <div v-if="version===0">
        <p>capybarahermes-2.5-mistral-7b.Q3_K_M.gguf</p>
        <p><a href="https://huggingface.co/TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF">You can get it here!</a></p>
      </div>
      <p v-if="version===1">mistral-large-latest <br>Le Chat API</p>
      <!-- <p><a href="https://huggingface.co/TheBloke/CapybaraHermes-2.5-Mistral-7B-GGUF">You can get it here!</a></p> -->

      <h2>Prompt</h2>
      <div v-if="version===1">
        <h3>System</h3>
        <p>You're answering from my perspective with the following facts:</p>
        <p>
          {<strong>data</strong>}
        </p>
        <h3>User / Assistant (Last 10 steps of conversation)</h3>
        <h3>User</h3>
        <p>{<strong>user-input</strong>}</p>
      </div>
      <div v-if="version === 0">
        <p>
        <|im_start|> <br>
        You are Denis who thinks like: <br>
        {<strong>data</strong>} <br>
        Don't add additional things!<|im_end|> <br>
        <|im_start|> <br>
        {<strong>user-input</strong>}<|im_end|> <br>
        <|im_start|>assistant <br>
      </p>
      </div>
      <p>
        <strong>data</strong>: Phrases found in ChromaDB with a vector distance of less than one
      </p>
      <p>
        <strong>user-input</strong>: the actual prompt of the user
      </p>
      <dynContent :title="'Current knowledge'" :phrases="this.knowledge"></dynContent>
      <h2>Result</h2>
      <div v-if="version === 0">
        <p>It is a functional chatbot capable of answering questions in a basic manner. Its performance could be significantly improved by utilizing a more advanced model, which would also require superior hardware.</p>
      </div>
      <div v-if="version === 1">
        <p>It is a functional chatbot capable of answering questions in a basic manner. It is much faster than its previous Version which used to run locally in my Network.</p>
        <a href="./chat">You can try it here :)</a>
      </div>

    </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
import text0 from '@/assets/texts/projectpages/chatbot_0.json';
import text1 from '@/assets/texts/projectpages/chatbot_1.json';
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
          texts: text1['parts'],
          version: 1,
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
      switch(version){
        if (this.version === version) return;
        else {
          this.version = version;
          if(version === 0) {
            this.texts = text0['parts'];
          } else {
            this.texts = text1['parts'];
          }
        }
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

.versions {
  cursor: pointer;
}
.versions .selected {
  font-weight: bold;
  color: rgb(14 245 177); 
}
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