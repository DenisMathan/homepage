<template>
  <div class="p-12 overflow-hidden">
    <h1 data-headinganim-chess class="opacity-0 mb-6">
        Chess
    </h1>
    <p class="text-white mb-6 max-w-3xl m-auto">
      Welcome to the presentation of my very rudimentary chess program. I have programmed it with Java. First basics are already developed, but it is still a long way to the finished game, which I will probably not go. But it has already fulfilled the purpose of teaching me object-oriented programming and Java. If you are interested in the already existing code, just visit me on <a href="https://github.com/DenisMathan/Schach" target="_blanc">Github</a>.
    </p>
    <h2 data-headinganim-chess class="opacity-0">Hector's Adventure</h2>
    <carousel  :textwidthLikeImg="true" :projects="images"/>
  </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
export default {
  name: 'Chess',
  metaInfo: {
    meta:[{
      name: 'description',
      content: 'This site presents a very rudimentary chess program which the developer Denis Mathan had once started.'
    }]
  },
  components:{
    carousel
  },
    data(){
        return{
            images:[{
                img: require('@/assets/images/Schach/9damenUmwandlung.png'),
                position:0,
                headline: 'Queen transformation',
                p : ['This is what freedom must feel like! His hope and ambition were rewarded. The opportunity to develop into a Queen has already been integrated. It would also be quite embarrassing if he now had to stand on the edge of the field as a pawn for the rest of his life. "Phew lucky!" thinks Hector and goes into his well-deserved retirement.']
                },
                {
                img: require('@/assets/images/Schach/1start.png'),
                position:1,
                headline: 'Start',                
                p : ['Here you can see the field which is spanned with an array tuple. The numbers reflect the array values. With the help of these values the figures can orientate themselves on the field. Currently all figures are implemented except of the king.'],
                },
                {
                img: require('@/assets/images/Schach/2movePawn.png'),
                position:2,
                headline: 'Selected Pawn',
                p : ['In this picture the pawn is selected, so the program shows the player what possibilities this piece has. In this case we are talking about the E4 pawn, which will also be the protagonist of our little demonstration. Since a hero needs a name, let\'s call him Hector.']
                },
                {
                img: require('@/assets/images/Schach/3moveQueen.png'),
                position:3,
                headline: 'Selected Queen',
                p : ['Now that Hector has jumped forward two squares, Black has responded with D5. This is the so-called Scandinavian defense. This gives the white queen more possible squares to move to.']
                },
                {
                img: require('@/assets/images/Schach/4moveKnight.png'),
                position:4,
                headline: 'Selected Knight',
                p : ['The knight is only blocked by its own pieces, when they are on its destination.']
                },
                {
                img: require('@/assets/images/Schach/5killPawn.png'),
                position:5,
                headline: 'Selected Pawn',
                p : ['Hector, on the other hand, now has two options. First, he can capture the opponent\'s pawn or simply move past him.']
                },
                {
                img: require('@/assets/images/Schach/6killedPawn.png'),
                position:6,
                headline: 'Killed pawn',
                p : ['Out of a profound dissatisfaction and lack of compassion, he overpowers his opponent and takes his place.']
                },
                {
                img: require('@/assets/images/Schach/7enPassent.png'),
                position:7,
                headline: 'Lack of "En passent"',
                p : ['Still overwhelmed by his act, Hector overlooks the opponent\'s pawn, which simply threatens to pass him by. On the other hand he may simply be unable to do anything, since his designer has not yet incorporated the "en passent" move.']
                },
                {
                img: require('@/assets/images/Schach/8abwechslung.png'),
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