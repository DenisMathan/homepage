<template>
  <section ref="content" id="projects">
    <h2 data-headinganim-projects class="opacity-0">&lt;Experience&gt;</h2>
    <kacheln class="mb-24" :projects="experience" :windowWidth="windowWidth" name="Experience"/> 
    <h2 data-headinganim-projects class="opacity-0">&lt;Projects&gt;</h2>
    <kacheln class="mb-24" :projects="programming" :windowWidth="windowWidth" name="Programming"/> 
    <carousel  :items="film" :windowWidth="windowWidth" name="Filmographie"/> 
  </section>
</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
import carousel from '@/components/elements/carousel/carousel';
import kacheln from './elements/kachel/kacheln.vue';
// import data from '@/assets/json/projects.json'
export default {
  components: {
     carousel,
     kacheln,
  },
  data(){
    return{
      windowWidth: window.innerWidth,
      experience: [
      {
          name: "Valueminer",
          img: require('@/assets/images/kacheln/valueminer.jpeg'),
          text: 'dark',
          goto: "https://valueminer.eu/",
          description: ["Valueminer is a small company settled in munich which provides an application on a lowcode-base. That means every client is able to build up their very own configuration to use Valueminers system in the for them most efficient way."],
          size: 'middle',
          position: undefined
        },
        {
          name: "Internship Coma",
          img: require('@/assets/images/coma.webp'),
          learnMore: 'coma',
          goto: "https://www.coma.de/",
          description: ["Coma was my first experience in the IT working world, away from university projects. I did my five-month internship for my studies at this company in 2020."],
          size: 'middle',
          position: undefined
        },
      ],
      // it: data["IT-projects"],
      programming: [
        {
          name: "Bachelor-Thesis",
          img: require('@/assets/images/kacheln/baKachel.webp'),
          description: [
            'Conception & realization of a progressive web app to support musicians in their songwriting process by means of developing of a digital audio workstation and a lead sheet creation tool.',
            ],
          learnMore:'./bachelor-thesis',
          position: undefined,
          size: 'middle',
        },
        {
          name: "Synthesizer",
          img: require('@/assets/images/kacheln/synthi.webp'),
          description: [
            'I programmed the synthesizer during the fourth semester for fun, because I wanted to get a bit more into React and Typescript. It\'s very rudimentary and the sound isn\'t the best either, but at least you can play simple ditties with it.',
            'The basic code I was able to work my way into was given to me at the time by my lecturers from the subject "Internet Applications". Unfortunately, I could only find the finished build of what I made out of it. For this reason, I can only present the result and not my code. The code in my Github, is the one that the lecturers had given me at that time.'
            ],
          goto: 'https://synthesizer-4db56.web.app/',
          github:'TODO',
          position: undefined
        },
        {
          name: "Rocket-Simulation",
          link: 'https://codepen.io/Gnomath/pen/gOaeYzR',
          img: require('@/assets/images/kacheln/rocketship.webp'),
          description:['To be honest this has nothing to do with a simulation. It was just a little afternoon project to get to know vue.js a little better. It was a weekly assignment from codepen. I can\'t remember its exact wording. If you want to take a closer look, check out my codepen.'],
          size: 'middle',
          position: undefined
        },

        {
          name: "Song-Writing-App 0.1",
          // text: 'dark',
          learnMore: 'firstApp',
          img: require('@/assets/images/kacheln/songwritingApp0_1Kachel.webp'),
          description: [
            'The songwriting app began as an ambitious project in the fourth semester. At the time, it was only supposed to be able to capture various ideas both lyrically and acoustically. The creation of this program required two intensive weeks in which I had created a pretty decent program for a beginner. The most difficult part for me at the time was the recording, although the features here don\'t begin to compare to those of the bachelor thesis I tackled a year later.'
          ],
          size: 'middle',
          position: undefined
        },
        {
          name: "Chess",
          img: require('@/assets/images/kacheln/chess.webp'),
          learnMore: 'chess',
          text: 'dark',
          description:[
            'This was a project with which I wanted to teach myself Java and object-oriented programming. ',
            'In the current state all pieces are implemented except the king. The pieces can hit each other and may only move as allowed by the rules. It is very unlikely that this project will ever be finished because it has already fulfilled its original purpose.'
          ],
          position: undefined
        },
        {
          name: 'Hemp-for-future',
          img: require('@/assets/images/hemp-for-future.webp'),
          goto: 'https://hemp-for-future.web.app/',
          github: 'https://github.com/DenisMathan/hemp_for_future',
          description:[
            'This was my first "larger" project, which I developed in the fourth semester as part of the subject design with three other fellow students. While I did the programming, the others took care of the design and project management. The title is based on the "Fridays for future" movement and is meant to illustrate that the blanket demonization of cannabis has promoted more environmentally harmful substances.',
            'This site is mainly designed for desktop devices and not recommended for the usage with mobile devices.'
          ],
          position: undefined
        },
      ],
      film:[
        {
          name: "Medipus",
          position: 1,
          img: require('@/assets/images/medipusI.webp'),
          vid: require('@/assets/videos/Der_Medipus.mp4'),
          description: [
            '“Der Medipus" is about an octopus that could be said to have a somewhat unhealthy media consumption. Thanks to his eight arms, each of which is equipped with a brain, he also uses many technical devices at the same time. Whether this will be his undoing, you can find out here.',
            'The stop motion film was created in the 4th semester at the university with a team of 6 people. With a frame rate of six frames per second, it took two very intensive weeks to produce the film, which is about one and a half minutes long. However, these were more than worth it, because we won first prize with this film at the animation screening (an internal university event where all viewers can vote on the best film of the semester).', 
          ]
        },
        {
          name: "Pirate",
          position: 1,
          vid: require('@/assets/videos/walkcycle.mp4'),
          img: require('@/assets/videos/walkcycle.webp'),
          description:[
              'This was a simple task that everyone had to do individually before the stop motion movie. The task was to animate this running pirate. Everyone was free to design the environment.',  
              'The program used was After Effects with the Duik Bassel plugin. However, at that time it was still very buggy, which led to some nervous breakdowns. Fortunately, it worked pretty well for me.'
          ]
        },
        {
          name: "Zwischen Familie, Arbeit & Rock'n Roll",
          position: 2,
          img: require('@/assets/images/simonPoster.webp'),
          vid: require('@/assets/videos/Simon.mp4'),
          description:[
            'In the 2nd semester of my studies, I had to shoot a portrait. Our film is about Simon, an enthusiastic musician who, in addition to music, also has to reconcile work and his family. He has been an enthusiastic musician since his youth and has been living out this lifestyle for years.  But now, with his little daughter, another big responsibility has come along.',
            'We shot the film in a team of four people. I did the interview and the editing.'
          ]
          
        },
        {
          name: "Turbina",
          position: 3,
          img: require('@/assets/images/autoPoster.webp'),
          vid: require('@/assets/videos/TurbinaFilm.mp4'),
          description:[
            'This film had to be animated by everyone in the subject of animation using the program 3D\'s Max. The only requirement was to recreate the body of the Fiat Turbina from 1954. The environment in which this was then allowed to go into action was left up to everyone.'
          ]
        },
      ]
    }
  },
    mounted(){
      window.addEventListener("scroll", this.onScroll, true);
      window.addEventListener("resize", this.updateWindowSize, true);
    },
    beforeDestroy(){
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
          console.log(projects)
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
            console.log(project.position)
          }
          console.log(this.projects)
        },
        updateWindowSize(){
          this.windowWidth = window.innerWidth
        }
    }
}
</script>

<style>


</style>