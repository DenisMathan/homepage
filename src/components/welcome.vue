<template>
  <section class=" min-h-screen flex flex-col justify-center z-30" id="welcome">
    <h1 data-headinganim-welcome class="opacity-0">
      Hi, <br>I'm Denis, <br> Software-Engineer
    </h1>
    <h2 data-headinganim-welcome class ="opacity-0 break-words">	&lt;B. Eng.&gt;</h2>
    <div class="w-full h-12">
      <a href="./contact"><button ref="btn" class="btn-1 left w-45 h-full w-44 bg-background rounded-md border-myGreen border text-white">Contact me</button></a>
    </div>
  </section>
</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
export default {
    mounted(){
      let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-welcome]"));
      manipulate(all_headings);
      setTimeout(()=>{
        this.$refs.btn.classList.remove('left')
      },6000)
    },
    methods:{
    }
}
</script>

<style>
.left{
  transform:translateX(100vw);
}
.btn-1{
  box-shadow: inset 0 0 0 0 rgba(75, 201, 106, var(--tw-border-opacity));
  transition: transform cubic-bezier(1, 1.31, 0.74, 1.04) 1s, box-shadow ease-in 0.3s; 
  /* transition: ease-in 0.3s;*/
}
.btn-1:hover{
  box-shadow: inset 300px 0 0 0 rgba(0, 255, 188, var(--tw-border-opacity));
  color: black;
}
.grow{
    display: inline-block;
    transition: all 1s cubic-bezier(0, 1.73, 0.19, 0.7);
    cursor: default;
}
.grow:hover{
    transition: transform 1s;
    transition-timing-function: cubic-bezier(0, 1.73, 0.19, 0.7);
    transform:scale(1.3);
    text-shadow: 0px 0px 10px #21FFFD;
}
</style>