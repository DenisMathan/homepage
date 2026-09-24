<template>
  <section id="contact" ref="content" class="contact min-h-screen flex flex-col justify-center mb-0 px-12">
      <h2 data-headinganim-5 class="opacity-0">&lt;Contact Me&gt;</h2>
      <div>
        <form action="https://formsubmit.co/1e04c71884179372b455a4f5caa6cb0c" method="POST" class="">
            <div class="flex mb-2">          
                <label for="email">E-Mail:</label>
                <input type="email" name="email" id="email" placeholder="E-Mail" required>
            </div>
            <div class="flex mb-2">
                <label for="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Name" required>
            </div>
            <div class="mb-2">
                <textarea class="w-full" name="comments, questions" id="" cols="30" rows="10" placeholder="Send me your message!"></textarea>
            </div>
            <div class="w-full h-12 text-right">
              <button class="btn-1 w-45 h-full w-44 rounded-md border-myGreen border text-white" >Send Message!</button>
            </div>
        </form>
      </div>

  </section>
</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
export default {
  metaInfo: {
    title: 'Contact',
    meta:[{
      vmid: 'description',
      name: 'description',
      content: 'On this page the developer Denis Mathan can be contacted.'
    }]
  },
    mounted(){
      let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-5]"));
      manipulate(all_headings);
    },
}
</script>

<style>
input{
    height: 3rem; 
    width: 100%;
}
label{
    width: 20%;
    height: 3rem;
    line-height: 3rem;
    color:white;
}
</style>