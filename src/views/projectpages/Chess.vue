<template>
  <div class="p-12 overflow-hidden">
    <h1 data-headinganim-chess class="opacity-0 mb-6">
        {{ page.title }}
    </h1>
    <p v-for="paragraph in page.intro" :key="paragraph" class="text-white mb-6 max-w-3xl m-auto">
      {{ paragraph }}
    </p>
    <h2 data-headinganim-chess class="opacity-0">{{ page.sectionTitle }}</h2>
    <carousel  :textwidthLikeImg="true" :projects="images"/>
  </div>
</template>

<script>
import { resolveProjectImage } from '@/js/projectAssets.js'
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
import { findProjectPage, projectMeta } from '@/js/projects.js'
export default {
  name: 'Chess',
  metaInfo: projectMeta('chess'),
  components:{
    carousel
  },
    data(){
        return{
        page: findProjectPage('chess'),
            images:[{
                img: resolveProjectImage('Schach/9damenUmwandlung.webp'),
                position:0,
                headline: 'Queen transformation',
                p : ['This is what freedom must feel like! His hope and ambition were rewarded. The opportunity to develop into a Queen has already been integrated. It would also be quite embarrassing if he now had to stand on the edge of the field as a pawn for the rest of his life. "Phew lucky!" thinks Hector and goes into his well-deserved retirement.']
                },
                {
                img: resolveProjectImage('Schach/1start.webp'),
                position:1,
                headline: 'Start',                
                p : ['Here you can see the field which is spanned with an array tuple. The numbers reflect the array values. With the help of these values the figures can orientate themselves on the field. Currently all figures are implemented except of the king.'],
                },
                {
                img: resolveProjectImage('Schach/2movePawn.webp'),
                position:2,
                headline: 'Selected Pawn',
                p : ['In this picture the pawn is selected, so the program shows the player what possibilities this piece has. In this case we are talking about the E4 pawn, which will also be the protagonist of our little demonstration. Since a hero needs a name, let\'s call him Hector.']
                },
                {
                img: resolveProjectImage('Schach/3moveQueen.webp'),
                position:3,
                headline: 'Selected Queen',
                p : ['Now that Hector has jumped forward two squares, Black has responded with D5. This is the so-called Scandinavian defense. This gives the white queen more possible squares to move to.']
                },
                {
                img: resolveProjectImage('Schach/4moveKnight.webp'),
                position:4,
                headline: 'Selected Knight',
                p : ['The knight is only blocked by its own pieces, when they are on its destination.']
                },
                {
                img: resolveProjectImage('Schach/5killPawn.webp'),
                position:5,
                headline: 'Selected Pawn',
                p : ['Hector, on the other hand, now has two options. First, he can capture the opponent\'s pawn or simply move past him.']
                },
                {
                img: resolveProjectImage('Schach/6killedPawn.webp'),
                position:6,
                headline: 'Killed pawn',
                p : ['Out of a profound dissatisfaction and lack of compassion, he overpowers his opponent and takes his place.']
                },
                {
                img: resolveProjectImage('Schach/7enPassent.webp'),
                position:7,
                headline: 'Lack of "En passent"',
                p : ['Still overwhelmed by his act, Hector overlooks the opponent\'s pawn, which simply threatens to pass him by. On the other hand he may simply be unable to do anything, since his designer has not yet incorporated the "en passent" move.']
                },
                {
                img: resolveProjectImage('Schach/8abwechslung.webp'),
                position:8,
                headline:'Lack of alternate turns',
                p : ['However, when he realizes that this sacrifice is going to slip through his fingers, Hector gets so enraged that he accidentally takes another step forward and realizes that he doesn\'t even have to wait for his opponent to make a move. He can simply move whenever he wants. ']
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