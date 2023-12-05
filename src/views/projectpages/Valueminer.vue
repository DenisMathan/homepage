<template>
  <div class="p-12 overflow-hidden">
    <h1 data-headinganim-chess class="opacity-0 mb-6">
        Experience at <br> Valueminer
    </h1>
    <p class="text-white mb-6 max-w-3xl m-auto">
      In simplified terms, Valueminer sells a web-based management program that can be customized to meet customer requirements using low-code. In theory, it is a highly dynamic tool, limited only by the lack of imagination of the users. In practice, these imaginative ideas still need to be developed before they can be configured. This was part of my responsibilities at Valueminer.
My tools there included AWS, Docker, Angular with Typescript, and Golang in the backend.
    </p>
    <p class="text-white mb-6 max-w-3xl m-auto">
As I cannot disclose the company's secrets, I cannot go into detail or provide code examples. However, I can provide a broad explanation of larger projects.
    </p>
    <h2 data-headinganim-chess class="opacity-0">Project-Examples</h2>
    <carousel  :textwidthLikeImg="true" :projects="images"/>
  </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
export default {
  metaInfo: {
    meta:[{
      name: 'description',
      content: 'This page describes the time that developer Denis Mathan experienced at Valueminer.'
    }]
  },
  components:{
    carousel
  },
    data(){
        return{
            images:[{
                position:0,
                headline: 'History & Notification',
                img: require('@/assets/images/valueminer/historyNotification.webp'),
                p : [
                  'The history is ultimately the program\'s memory and is one of my significant contributions to the application. Essentially, I tracked and stored all user activities within the app. When writing the history entry, the program also checks if it involves another user. If so, those users are promptly informed of the changes via email or within the app.']
                },
                {
                img: require('@/assets/images/valueminer/calculator.webp'),
                position:1,
                headline: 'CO2 Calculator',    
                // link:{link:'https://www.imago-design.de/', name: 'Imago-site'},       
                p : [
                  'The calculator computes CO2 in kilograms based on user inputs in a form and a background data model, which determines the coefficients to be used for various values. The different results eventually contribute to a sum and/or can be reused for other calculations where an intermediate result is needed. In the end, all results are added together.',
                  'The primary challenge here was that this calculator must not be hard-coded at any point. Instead, every calculation and query in the form can be freely assembled by the managers of the Valueminer-Software. Additionally, a flexible user input system was designed. The application can now handle inputs differently based on the unit (e.g., kg vs liters).',
                  'The result is a program that, with the right data model and the proper form composition, can calculate not only CO2 balances but virtually anything.'
                ],
                },
                {
                // img: require('@/assets/images/praktikum-coma/comaTools.webp'),
                position:2,
                img: require('@/assets/images/valueminer/dbToValueminer.webp'),
                headline: 'Random DB -> Valueminer Data',
                // link:{link:'https://www.coma.de/blog', name: 'coma-Blog'},
                p : [
                  'My last task for the company was to create a converter that allows transforming a database (initially, a Firebird database) into a format understandable by the Valueminer app. As expected, a requirement was a flexible configuration, which can now be done in a JSON file. The script performing the conversion can also be executed in a cron job, and in each subsequent run, it only transfers the changes from the database to be converted.']
                },
            ]
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