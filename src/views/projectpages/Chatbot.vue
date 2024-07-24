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

      <h2>Current knowledge</h2>
      <p>I am Denis. I'm a Softwareengeneer with a degree in mediatechnology. </p> 
      <p>My name is Denis Mathan </p> 
      <p>I was born on July 2, 1994 </p> 
      <p>I played soccer / football for the first time when I learned to walk </p> 
      <p>At the age of 6, I started playing soccer at the Fc Neuhadern club </p> 
      <p>At the age of 12, I started playing guitar </p> 
      <p>I'm playing Tennis since I was a teenager </p> 
      <p>I completed my Abitur at the Max-Planck-Gymnasium in Munich! </p> 
      <p>My Abitur was moderately successful with an average grade of 3.1 </p> 
      <p>My first attempt to study was the Environmental Engineering program at TU Munich. I dropped out after 2 semesters! </p> 
      <p>My second attempt to study was Secondary School Teaching with the subjects Mathematics and Sports </p> 
      <p>My last and successfull attempt to study was mediatechnology at the Technische Hochschule Deggendorf </p> 
      <p>I completed a Bachelor of Engineering at the Deggendorf Institute of Technology with an average grade of 1.9 </p> 
      <p>My bachelor's thesis was about a songwriting app that allowed users to both record lyrics and collaborate with their bandmates </p> 
      <p>My enthusiasm for programming developed during my studies in Media Technology at THD </p> 
      <p>I have very diverse hobbies! On the one hand, I really enjoy playing sports games like soccer, tennis, and volleyball. But I am also very passionate about music. I play guitar and sing, which I have tried with several bands! </p> 
      <p>My favourite bands are the White Stripes, Bukahara and most of the old rockbands </p> 
      <p>When I was younger I loved to read books, I mean I still like it but I'm not reading that often anymore </p> 

      <h2>Result</h2>
      <p>It is a functional chatbot capable of answering questions in a basic manner. Its performance could be significantly improved by utilizing a more advanced model, which would also require superior hardware.</p>
      <a href="./chat">You can try it here :)</a>
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