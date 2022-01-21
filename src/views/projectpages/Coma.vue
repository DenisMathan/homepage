<template>
  <div class="p-12 overflow-hidden">
    <h1 data-headinganim-chess class="opacity-0 mb-6">
        Internship at Coma
    </h1>
    <p class="text-white mb-6 max-w-3xl m-auto">
      All in all, it was a very nice time there, I had nice colleagues, a pleasant working atmosphere and I got very good work assignments right from the start. I'm very grateful to my boss at the time, especially for this last aspect. She not only challenged me, but also encouraged me. For example, in addition to my tasks, I had to give a presentation on any IT topic for the team meeting every month. Most of the time, I couldn't tell the team anything new, but I learned a lot in the process.
    </p>
    <h2 data-headinganim-chess class="opacity-0">My Experiences</h2>
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
      content: 'This page describes the time that developer Denis Mathan experienced at coma.'
    }]
  },
  components:{
    carousel
  },
    data(){
        return{
            images:[{
                position:0,
                headline: 'CMS-Systems',
                p : [
                  'During my time at coma I also got in touch with some CMS systems, like Wordpress, Typo3, Statamic and First-spirit.',
                  'With Wordpress, I got to develop an entire website with the help of one of our designers. However, this site never went live and eventually fizzled out. Still, I was able to gain quite a bit of experience.']
                },
                {
                img: require('@/assets/images/praktikum-coma/imago.png'),
                position:1,
                headline: 'Imago',    
                link:{link:'https://www.imago-design.de/', name: 'Imago-site'},       
                p : [
                  'Imago was the biggest project that accompanied me at that time. It started shortly before I started my internship and was finished shortly before the end. Here I was allowed to rebuild complete webpages in the design given by the designers, implement animations and algorithms, fix bugs and much more.',
                  'The technologies that were mainly worked with here were nunjucks.js, gulp.js and tailwindcss.'],
                },
                {
                img: require('@/assets/images/praktikum-coma/comaTools.png'),
                position:2,
                headline: 'coma - Tools',
                link:{link:'https://www.coma.de/blog', name: 'coma-Blog'},
                p : [
                  'The Coma-Tools - Intranet site was pretty much the first task I got during my internship. It was also one of the few connections I had with PHP so far. The task was to build a page that can be extended as much as I want. It should also look like the coma blog.',
                  'The technology behind it was php.']
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