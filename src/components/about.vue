<template>
  <section ref = "content" class="about min-h-screen">
      <h2 data-headinganim-2 class="opacity-0">&lt;About Me and Myself&gt;</h2>
      <div class="flex justify-center flex-row-reverse tablet:flex-row tablet:block relative">
            <div class="max-w-lg tablet:max-w-full superslim:h-150 w-1/2 tablet:w-full relative">
                <div class="w-full h-full flex items-center">
                    <img class="w-full h-auto" :src="require('@/assets/images/danny_the_kid.jpg')" alt="">
                </div>
            </div>
            <div class="max-w-lg tablet:max-w-full w-1/2 tablet:w-full tablet:p-12 slim:p-2 flex flex-col justify-center tablet:absolute top-0 tablet:h-full tablet:bg-gray-800 tablet:bg-opacity-50 pr-6 ">
                <h3>Danny the kid</h3>
                <p class="break-words text-white">My path to becoming a developer was not the classic one, in which I was already very interested in this field as a child. At that time I was rather the opposite. My passion at the time was solely for music. So I spent my days writing new songs and practicing old classics. But apart from the experience of playing in a few bands with which I also played some gigs, I didn't get much out of it. When I discovered media engineering in Deggendorf after having started two courses of studies (environmental engineering and teaching math/sports), both of which were not for me, I knew that this was where I would get my degree. This allowed me to combine my creativity and my technical understanding. On the one hand, we had subjects like design and film production, but on the other hand, there were also engineering subjects like electrical engineering, math and computer science. I quickly realized that a certain mathematical understanding combined with my creativity and patience made programming easier than I had originally thought.</p>
            </div>
      </div>   
        <div class="flex justify-center tablet:flex-row items-stretch tablet:block relative">
            <div class=" max-w-lg tablet:max-w-full w-1/2 tablet:w-full relative">
                <div class="w-full h-fullflex items-center">
                    <img class="w-full h-auto" :src="require('@/assets/images/danny_the_nerd.png')" alt="">
                </div>
            </div>
            <div class="max-w-lg tablet:max-w-full w-1/2 tablet:w-full tablet:p-12 slim:p-2 flex flex-col tablet:justify-end mobile:justify-center justify-center  tablet:absolute top-0 tablet:h-full tablet:bg-gray-800 tablet:bg-opacity-50 pl-6 ">
                    <h3>Danny the nerd</h3>
                    <p class=" break-words text-white">The first projects at the university were rather simple. These included the development of little algorithms that should work incoherently. Gradually, more complex structures were added, such as developing a website, or a program to control the cameras in our software engineering room. At the end of the 5th semester, we were supposed to develop our first app. It was during this project that I got the idea for my main project, which was to combine my former passion with my current one. The development of a song writing app that allows musicians to collaborate remotely and keep their ideas together in a simple way.</p>
            </div>
      </div>             
  </section>
</template>

<script>
import {manipulate} from '@/js/headlineManipulation.js';
export default {
    data(){
        return {
            anim: false,
            width: 0,
        }
    },
    mounted(){
        window.addEventListener("scroll", this.onScroll, true)   
    },
    methods: {
        onScroll(){
            if(this.$refs.content.getBoundingClientRect().y - 500 <= 0){
                let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-2]"));
                manipulate(all_headings);
                window.removeEventListener("scroll", this.onScroll, true)
            }
        },
    },
    beforeDestroy(){
        window.removeEventListener("scroll", this.onScroll, true);
    }
}
</script>

<style>
/*   .threeDContainer{
    width: 31.25rem;
    height:31.25rem;
  } */
</style>