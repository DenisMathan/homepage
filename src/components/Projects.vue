<template>
  <section ref="content" id="projects">
    <h2 data-headinganim-projects class="opacity-0">&lt;Company-Experience&gt;</h2>
    <kacheln class="mb-24" :projects="experience" :windowWidth="windowWidth" name="Companies"/> 
    <h2 data-headinganim-projects class="opacity-0">&lt;Projects&gt;</h2>
    <kacheln class="mb-24" :projects="programming" :windowWidth="windowWidth" name="Programming"/> 
    <carousel  :items="film" :windowWidth="windowWidth" name="Filmographie"/> 
  </section>
</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
import carousel from '@/components/elements/carousel/carousel';
import kacheln from './elements/kachel/kacheln.vue';
import catalog from '@/assets/texts/projects.json'
import { resolveProjectImage, resolveProjectVideo } from '@/js/projectAssets.js'
export default {
  components: {
     carousel,
     kacheln,
  },
  data(){
    return{
      windowWidth: window.innerWidth,
      experience: catalog.experience.map(project => ({
        ...project,
        img: resolveProjectImage(project.img),
      })).sort((a, b) => (a.position || 100) - (b.position || 100)),
      programming: catalog.programming.map(project => ({
        ...project,
        img: resolveProjectImage(project.img),
      })).sort((a, b) => (a.position || 100) - ( b.position || 100)),
      film: catalog.film.map(project => ({
        ...project,
        img: resolveProjectImage(project.img),
        vid: resolveProjectVideo(project.vid),
      })),
    }
  },
    mounted(){
      window.addEventListener("scroll", this.onScroll, true);
      window.addEventListener("resize", this.updateWindowSize, true);
    },
    beforeUnmount(){
        window.removeEventListener("scroll", this.onScroll, true);
        window.removeEventListener("resize", this.updateWindowSize, true);
    },
    methods:{
        onScroll(){
            if(this.$refs.content.getBoundingClientRect().y-500 <= 0){
                let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-projects]"));
                manipulate(all_headings);
                window.removeEventListener("scroll", this.onScroll, true)
            }
        },
        moveback(){
          let projects = document.querySelectorAll("[data-project]");
          for(let i = 0; i<projects.length; i++){
            const project = projects[i];

          }
        },
        moveforward(){
          for(let i = 0; i<this.projects.length; i++){
            const project = this.projects[i];
            if(project.position != this.projects.length-1){
              project.position++;
            }
            else{
              project.position = 0;
            }
          }
        },
        updateWindowSize(){
          this.windowWidth = window.innerWidth
        }
    }
}
</script>

<style>


</style>