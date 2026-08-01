<template>
    <div class="relative p-12 overflow-hidden">
      <h1 data-headinganim-chess class="opacity-0 mb-6">
          {{ page.title }}
      </h1>
      <p v-for="paragraph in page.intro" :key="paragraph" class="text-white max-w-4xl m-auto" v-html="paragraph"></p>
      <h2 data-headinganim-chess class="opacity-0">{{ page.sectionTitle }}</h2>
      <carousel  :projects="images"/>
    </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
import catalog from '@/assets/texts/projects.json'
export default {
  name:'Sonwriting-App',
  metaInfo: {
    meta:[{
      name: 'description',
      content: catalog.programming[2].page.metaDescription
    }]
  },
  components:{
    carousel
  },
    data(){
        return{
        page: catalog.programming[2].page,
            images:[{
                img: require('@/assets/images/songwritingApp_1_0/projects.webp'),
                position:0,
                form: 'upright',
                headline: 'Projects',
                p : [
                  'Projects simply lists the projects that have already been saved. In addition, it is displayed when they were last saved. The projects are also sorted according to this.', 
                  'A longer click on a project opens a query to delete it. A single click opens it and takes you directly to Record.'
                  ]
                },
                {
                img: require('@/assets/images/songwritingApp_1_0/recordwindow.webp'),
                position:1,
                form: 'upright',
                headline: 'Record',                
                p : ['This is the app\'s home screen and also the area where recordings can be made. At the top you can see the three subdivisions. Record is where we are right now. In Texting, texts can be created and viewed. And in Projects there is a list of all the projects that have been created so far, which can be viewed.'],
                },
                {
                img: require('@/assets/images/songwritingApp_1_0/recordedAudio.webp'),
                position:2,
                form: 'upright',
                headline: 'Recorded',
                p : [
                  'Once a recording has been made, it is displayed as a simple audio tag and can be played back.', 
                  'When you click on the + you will be asked if you want to save the current project and then clear the screen to open the new project.'
                  ]
                },
                {
                img: require('@/assets/images/songwritingApp_1_0/texteditor.webp'),
                position:3,
                form: 'upright',
                headline: 'Texting/Texteditor',
                p : [
                  'In Texting there are four buttons at the top. The first three each open a text box, with the corresponding title. If you click long enough on one of the text fields, it copies an identical text field to the end of the project. A text field can be deleted by the button "Delete La...". To be honest I don\'t know today what I wanted to express with "Delete La".',
                  'One of the text fields can be copied to the end by clicking on it for a long time and thus saves you from retyping the chorus, for example.',
                  'The complete project, can be saved by the "Save" button, or by switching the project.'
                  ]
                },
                {
                img: require('@/assets/images/songwritingApp_1_0/song.webp'),
                position:4,
                form: 'upright',
                headline: 'Texting/Songview',
                p : [
                  'The fourth button, "Song", takes you to the view of your written text, which allows you to easily read the text in the correct order. Here the first three buttons also switch to a button that takes you back to the editor.',
                  'The heading is the title of the project.']
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