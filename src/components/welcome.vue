<template>
  <div class=" min-h-screen flex flex-col justify-center z-30">
    <h1 data-headinganim-1 class="opacity-0">
      Hi, <br>I'm Denis, <br> Webdeveloper
    </h1>
    <h2 data-headinganim-1 class ="opacity-0 break-words">	&lt;Developer with extras (B. Eng.)&gt;</h2>
    <div class="w-full h-12">
      <a href="#contact"><button class="btn-1 w-45 h-full w-44 rounded-md border-myGreen border text-white">Contact me</button></a>
    </div>
  </div>
</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
export default {
    mounted(){
      let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-1]"));
      console.log(all_headings)
      manipulate(all_headings);
    },
    methods:{
    }
}
</script>

<style>
.btn-1{
  box-shadow: inset 0 0 0 0 rgba(75, 201, 106, var(--tw-border-opacity));
  transition: ease-in 0.3s;
}
.btn-1:hover{
  box-shadow: inset 300px 0 0 0 rgba(75, 201, 106, var(--tw-border-opacity));
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
}
</style>