<template>
    <div class="relative p-12 tablet:p-6 mobile:p-2 overflow-hidden text-white">
      <h1 data-headinganim-chess class="opacity-0 mb-6">
          Bachelor-<br class="hidden mobile:block"/>Thesis
      </h1>
      <h2 data-headinganim-chess class="opacity-0 mb-6">Songwriting-App 0.8</h2>
      <h2>{{text['motivation'].title}}</h2>
      <p>{{text['motivation'].text}}</p>
      <h2>{{text['problem'].title}}</h2>
      <p>{{text['problem'].text}}</p>
      <h2>{{text['team'].title}}</h2>
      <p>{{text['team'].text}}</p>
      <h2>{{text['requirements'].title}}</h2>
      <p>{{text['requirements'].text}}</p>
      <div class="flex mobile:flex-col justify-center items-center max-w-7xl m-auto">
        <div class="bg-gray-700 rounded-lg shadow max-w-xs mobile:max-w-full mobile:w-full w-1/2">
          <ul class="divide-y divide-background">
            <li class="p-3 cursor-pointer">
              <a href="#DAW" class="no-underline">
                <h4>DAW:</h4> 
                <ul class="">
                  <li class="px-1 text-myGreen">Recording</li>
                  <li class="px-1 text-myGreen">Overdubbing</li>
                  <li class="px-1 text-red">Looping</li>
                </ul>
              </a> 
            </li>
            <li class="p-3">
              <a href="#textEditor" class="no-underline">
                <h4>Leadsheet:</h4> 
                <ul>
                  <li class="px-1 text-myGreen">Simple Texteditor</li>
                  <li class="px-1 text-myGreen">Chords over Text</li>
                  <li class="px-1 text-red">Tabs</li>
                  <li class="px-1 text-orange">Rhymelibrary</li>
                </ul>
              </a>
            </li>
            <li class="p-3">
              <a href="#standards" class="no-underline">
                <h4>Data handling:</h4> 
                <ul>
                  <li class="px-1 text-myGreen">Saveable projcts</li>
                  <li class="px-1 text-myGreen">Sorted by last editing</li>
                  <li class="px-1 text-myGreen">Hierarchical folder structures</li>
                  <li class="px-1 text-orange">Collaboration with other musicians</li>
                </ul>
              </a>
            </li>
          </ul>
        </div>
        <div class="mobile:w-full w-1/2">
          <p class="mobile:text-left text-center text-myGreen">Fully integrated</p>
          <p class="mobile:text-left text-center text-orange">At least something to work with</p>
          <p class="mobile:text-left text-center text-red">Not even thought about it</p>
        </div>
      </div>

      <h2>{{text['compatibility'].title}}</h2>
      <p>{{text['compatibility'].text}}</p>

      <h2>{{text['TechnicalStructure'].title}}</h2>
      <div v-for="technologie in text['TechnicalStructure']" :key="technologie.title">
        <h3>{{technologie.title}}</h3>
        <p v-for="paragraph in technologie.text" :key="paragraph">{{paragraph}}</p>
      </div>

      <h2>{{text['result'].title}}</h2>
      <p>{{text['result'].text}}</p>
      <section id="standards">
        <h3>{{text['navigationCarousel'].title}}</h3>
        <carousel  :projects="navigationCarousel"/>
      </section>
      <section id="DAW">
        <h3>{{text['DAW'].title}}</h3>
        <carousel :projects="DAW"/>
      </section>
      <section id="textEditor">
        <h3>{{text['textEditor'].title}}</h3>
        <carousel :projects="textEditor"/>
      </section>
    </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import {manipulate} from '@/js/headlineManipulation.js';
import text from '@/assets/texts/projectpages/ba.json';
export default {
  name: 'BA',
  metaInfo: {
    meta:[{
      name: 'description',
      content: 'This page presents the bachelor thesis of the developer Denis Mathan.'
    }]
  },
  components:{
    carousel
  },
    data(){
        return{
          text: text['BA'],
          navigationCarousel:[
              {
              img: require('@/assets/images/ba/1Anmeldung.png'),
              position:1,
              form: 'upright',
              headline: text['BA']['navigationCarousel']['parts']['signIn']['title'],                
              p : text['BA']['navigationCarousel']['parts']['signIn'].text,
              },
              {
              img: require('@/assets/images/ba/2homescreen.png'),
              position:2,
              form: 'upright',
              headline: text['BA']['navigationCarousel']['parts']['home']['title'],
              p : text['BA']['navigationCarousel']['parts']['home']['text']
              },
              {
              img: require('@/assets/images/ba/contacts/1contacts.png'),
              position:3,
              form: 'upright',
              headline: text['BA']['navigationCarousel']['parts']['contacts']['title'],
              p : text['BA']['navigationCarousel']['parts']['contacts']['text']
              },
              {
              img: require('@/assets/images/ba/contacts/2searchContact.png'),
              position:4,
              form: 'upright',
              headline: text['BA']['navigationCarousel']['parts']['contactsVal']['title'],
              p : text['BA']['navigationCarousel']['parts']['contactsVal']['text']
              },
              {
              img: require('@/assets/images/ba/contacts/3chat.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['navigationCarousel']['parts']['chat']['title'],
              p : text['BA']['navigationCarousel']['parts']['chat']['text']
              },
          ],
          DAW:[
              {
              img: require('@/assets/images/ba/DAW/1DAW.png'),
              position:1,
              form: 'upright',
              headline: text['BA']['DAW']['parts']['openProject']['title'],                
              p : text['BA']['DAW']['parts']['openProject']['text'],
              },
              {
              img: require('@/assets/images/ba/DAW/2DAW.png'),
              position:2,
              form: 'upright',
              headline: text['BA']['DAW']['parts']['activateTrack']['title'],
              p : text['BA']['DAW']['parts']['activateTrack']['text']
              },
              {
              img: require('@/assets/images/ba/DAW/3DAW.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['DAW']['parts']['chosenWave']['title'],
              p : text['BA']['DAW']['parts']['chosenWave']['text']
              },
          ],
          textEditor:[{
              img: require('@/assets/images/ba/text/1text.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['textEditor']['parts']['openProject']['title'],                
              p : text['BA']['textEditor']['parts']['openProject']['text'],
              },
              {
              img: require('@/assets/images/ba/text/2text.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['textEditor']['parts']['chordKeyboard']['title'],                
              p : text['BA']['textEditor']['parts']['chordKeyboard']['text'],
              },
              {
              img: require('@/assets/images/ba/text/3changeHarmony.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['textEditor']['parts']['choseHarmony']['title'],                
              p : text['BA']['textEditor']['parts']['choseHarmony']['text'],
              },
              {
              img: require('@/assets/images/ba/text/4changedHarmony.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['textEditor']['parts']['newHarmony']['title'],
              p : text['BA']['textEditor']['parts']['newHarmony']['text']
              },
              {
              img: require('@/assets/images/ba/text/5moveChord.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['textEditor']['parts']['moveChord']['title'],
              p : text['BA']['textEditor']['parts']['moveChord']['text']
              },
              {img: require('@/assets/images/ba/text/7selectLines.png'),
              position:0,
              form: 'upright',
              headline: text['BA']['textEditor']['parts']['selectLine']['title'],
              p : text['BA']['textEditor']['parts']['selectLine']['text']
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