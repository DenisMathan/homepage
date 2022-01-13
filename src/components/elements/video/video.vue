<template>
  <div ref="fullscreen"  class="vid-container w-full h-full relative" :style="'height:+'+'px'" @click="controlsOn" @mousemove="controlsOn" >
      <div class="h-full w-full flex justify-center items-center" @click="playing=!playing">
              <video data-vid ref="vid"  :class="(ratio<=1.8)?('w-full h-auto'):('w-auto h-full')" @loadedmetadata="fillData" :muted="muted" :src="url"  :poster="poster" controlslist="nodownload"></video>
      </div>
      <div ref="controls" data-vid class="controls controls-on absolute w-full bg-gray-700 bg-opacity-70 bottom-0">
        <div data-vid class="h-8 px-3 flex items-center">
          <div data-vid ref="timebar" class="timebar-container w-full bg-backgroundLight m-auto rounded-full relative cursor-pointer" @mousemove="getTime" @click="setTime">
              <div data-vid class="bufferbar h-full bg-gray-200 rounded-full absolute" :style="'width:'+bufferedPercent+'%'"> </div>
              <div data-vid class="timebar h-full bg-gray-700 rounded-full absolute" :style="'width:'+(currentTime/duration)*100+'%'"> </div>
              <div data-vid class="mouseTime absolute -top-6 -translate-1/2 text-white shadow-sm" :style="'left:'+100* mouseTime/duration + '%'">{{parseTimeToString(mouseTime)}}</div>
          </div>
        </div>
        <div data-vid class="h-12 w-full relative">
            <div data-vid class="play h-12 w-12 absolute left-2 cursor-pointer" @click="playing=!playing">
                <img data-vid v-if="!playing" class="w-6 h-auto absolute top-1/2 left-1/2 -translate-1/2" :src="require('@/components/elements/video/icons/play.png')" alt="">
                <img data-vid v-else class="w-6 h-auto absolute top-1/2 left-1/2 -translate-1/2" :src="require('@/components/elements/video/icons/pause.png')" alt="">
            </div>
            <div class="time h-12 absolute left-16">
                <div class="leading-12">
                    <span data-vid>{{parseTimeToString(currentTime)}}</span>/
                    <span data-vid>{{parseTimeToString(duration)}}</span>
                </div>
            </div>
            <div class="volume h-12 w-12 absolute right-16 cursor-pointer"  @click="muted=!muted">
                 <img data-vid class="w-6 h-auto absolute top-1/2 left-1/2 -translate-1/2" :class="(muted)?'opacity-50':''" :src="require('@/components/elements/video/icons/volume.png')" alt="">
            </div>
            <div class="fullscreen h-12 w-12 absolute right-2 cursor-pointer" @click="fullscreen=!fullscreen">
              <img data-vid v-if="!fullscreen" class="w-6 h-auto absolute top-1/2 left-1/2 -translate-1/2" :src="require('@/components/elements/video/icons/fullscreen.png')" alt="">
              <img data-vid v-else class="w-6 h-auto absolute top-1/2 left-1/2 -translate-1/2" :src="require('@/components/elements/video/icons/minimize.png')" alt="">
            </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import {parseTimeToString} from '@/js/date.js'
export default {
    props:{
        url: String,
        poster: String
    }, 
    data(){
        return{
            playing: false,
            muted: true,
            fullscreen: false,
            media: null,
            currentTime: 0,
            duration: 0,
            bufferedPercent: 0,
            anim: null,
            controlsTime: null,
            ratio: 0,
            mouseTime: 0
        }
    },
    watch:{
        playing: function(val){
            if(val){         
                    this.play();
            }
            else{
                this.pause();
            }
        },
        fullscreen: function(val){
            if(val){
                this.$refs.fullscreen.requestFullscreen();
            }
            else{
                document.exitFullscreen();
            }
            this.checkRatio();
        }
    },
    mounted(){
        this.$refs.fullscreen.addEventListener('fullscreenchange', this.checkRatio)
    },
    beforeDestroy(){
         this.$refs.fullscreen.removeEventListener('fullscreenchange', this.checkRatio);
    },
    methods:{
        fillData(e){ 
                this.media = this.$refs.vid;
                this.duration = this.media.duration
                // this.media.currentTime = 30;
                this.currentTime = this.media.currentTime;                
        },
        play(){               
            this.$refs.vid.play();
            this.animate(Date.now());
            this.$refs.vid.onended = ()=>{
                this.playing = false;
            }
        },
        animate(){
            this.currentTime = this.media.currentTime;
            this.anim = requestAnimationFrame(this.animate)
            let length = this.media.buffered.length;
            this.bufferedPercent = 100 * (this.media.buffered.start(length-1)+ this.media.buffered.end(length-1))/this.duration;
        },
        pause(){
            this.$refs.vid.pause();
            window.cancelAnimationFrame(this.anim);
        },
        openFullscreen(){
            this.$refs.fullscreen.requestFullscreen();
            this.checkRatio();
        },
        closeFullscreen(){
            this.$refs.fullscreen.exitFullscreen();
            this.checkRatio();
        },
        parseTimeToString(e){
            return parseTimeToString(e);
        },
        timing(e){
            this.currentTime=this.media.currentTime
        },
        checkRatio(){
            console.log('jup')
            this.ratio = this.$refs.fullscreen.offsetWidth/this.$refs.fullscreen.offsetHeight;
            console.log(this.$refs.fullscreen.offsetWidth,this.$refs.fullscreen.offsetHeight, this.ratio)
        },
        getTime(e){
            this.mouseTime = e.offsetX/this.$refs.timebar.offsetWidth * this.duration;
        },
        setTime(){
            this.media.currentTime=this.mouseTime;
            this.currentTime = this.mouseTime;
        },
        controlsOn(){
            this.$refs.controls.classList.add('controls-on')
            clearTimeout(this.controlsTime)
            this.controlsTime = setTimeout(()=>{
              this.$refs.controls.classList.remove('controls-on')  
            },3000)
        }
    }
}
</script>

<style scoped>
/* .vid-container:hover .controls{
    opacity: 1;
} */
.controls{
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
}
.controls-on{
    opacity:1;
}
.timebar::after{
    content:"";
    background-color: #4BC96A;
    height: 0.5rem;
    width: 0.5rem;
    position: absolute;
    top: 50%;
    right:-0.25rem;
    transform: translate(0%, -50%) scale(0);
    border-radius: 5rem;
    transition: transform 0.3s ease-in;
}
.timebar-container:hover .timebar::after{
    content:"";
    background-color: #4BC96A;
    height: 0.5rem;
    width: 0.5rem;
    position: absolute;
    top: 50%;
    right: -0.25rem;
    transform: translate(0%, -50%) scale(4);
    border-radius: 0.5rem;
    transition: transform 0.3s ease-in;
}
.mouseTime{
    opacity: 0;
    transition: opacity 0.2s;
    transform:scale(1)
}
.timebar-container:hover .mouseTime{
    opacity: 1;
}
.timebar-container{
    transition: all 0.3s ease-in;
    height: 0.2rem;
    transform: scale(1,1)
}
.timebar-container:hover{
    height: 1rem
}
/* .smooth{
    transition: width 0.25s;
} */
</style>

</style>