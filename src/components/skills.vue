<template>
<section id="skills" ref= "content" class="about">
  <h2 data-headinganim-skills class="opacity-0">&lt;Skills&gt;</h2>
  <div class="flex tablet:flex-col justify-stretch">
    <div class="w-1/2 tablet:w-full pr-12 tablet:pr-0 flex items-center">
    <div class="w-full">
      <h3>What I do</h3>
      <div v-for="focus in focusAreas" :key="focus.title" class="px-6 mobile:px-0 mb-6">
        <h4>{{focus.title}}</h4>
        <p class="text-white mb-1">{{focus.text}}</p>
        <p class="text-sm text-gray-300">
          e.g.
          <template v-for="(example, index) in focus.examples" :key="example.link">
            <a :href="example.link" class="text-myGreen">{{example.name}}</a><span v-if="index < focus.examples.length - 1">, </span>
          </template>
        </p>
      </div>
      <p class="px-6 mobile:px-0 text-sm text-gray-300">
        Beyond that: Python for <a href="./chatbot" class="text-myGreen">AI</a> and <a href="./hits-and-history" class="text-myGreen">data</a> projects, C for <a href="./grimlang" class="text-myGreen">low-level experiments</a>.
      </p>
    </div>

    </div>
    <div class="w-1/2 tablet:w-full">
    <h3 class="text-center tablet:text-left">Technologies I have worked with</h3>
      <div class="h-full flex justify-center">
        <div ref="gl" :style="'height:' +width + 'px'" class="threeDContainer w-full" @mouseenter="()=>startAnim()"></div>
      </div>
    </div>
  </div>

</section>

</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
import {init, resize, startAnimation} from '@/js/threeD.js';
export default {
  data(){
    return{
      width: 0,
      focusAreas: [
        {
          title: 'Frontend — TypeScript, React, Angular',
          text: 'Data-heavy interfaces like dashboards, diagram views and editors that stay usable when the data gets complex.',
          examples: [
            {name: 'Vector', link: './vector'},
            {name: 'Valueminer', link: './valueminer'}
          ]
        },
        {
          title: 'Backend — Go',
          text: 'Services, data converters and persistence layers behind those interfaces.',
          examples: [
            {name: 'Valueminer', link: './valueminer'}
          ]
        },
        {
          title: 'Cloud — AWS, Docker, Linux',
          text: 'Automating setups so they start, connect and run on their own.',
          examples: [
            {name: 'Aumovio', link: './aumovio'},
            {name: 'Valueminer', link: './valueminer'}
          ]
        }
      ]
    }
  },
    mounted(){
        window.addEventListener("scroll", this.onScroll, true);
        window.addEventListener("resize", this.resizing, true);

        this.width = this.$refs.gl?.clientWidth || 0;
        setTimeout(() => {
          if (this.$refs.gl) {
            init(this.$refs.gl);
          }
        }, 50);
  },
    methods: {
      onScroll(){
          if(this.$refs.content.getBoundingClientRect().y - 500 <= 0){
              let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-skills]"));
              manipulate(all_headings);
              window.removeEventListener("scroll", this.onScroll, true)
          }
      },
      resizing(){
          resize(this.$refs.gl)
      },
      startAnim(){
        startAnimation();
      }
    },
    beforeUnmount(){
      window.removeEventListener("scroll", this.onScroll, true);
      window.removeEventListener("resize", this.resizing, true);
  }
}
</script>
