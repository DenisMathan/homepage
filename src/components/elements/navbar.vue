<template>
  <div>
    <!-- button -->
    <div class="fixed top-6 right-12 h-12 w-12 hidden tablet:block cursor-pointer" style="z-index: 51" @click="toggleNav"><img class="h-full w-full" :src="require('@/assets/icons/menu.webp')" alt="menu-button"></div>
    <!-- navigation -->
    <div ref="navbar" id="navbar" class="navbar h-screen fixed w-32 bg-backgroundLight tablet:z-50 tablet:fixed tablet:w-screen tablet:h-screen tablet:border-none tablet:right-0 tablet:right-full tablet:bg-background tropacity">  
      <div class="absolute tablet:relative tablet:w-1/2 tablet:min-w-nav m-auto mb-12">
        <div class="p-2 max-w-logo m-auto tablet:mt-32 ">
          <a :href="path==='/'?'#welcome':'./'" aria-label="Go back Home">
            <button class="w-full h-full logoshadow" title="Back to Home">
            <img class="w-full h-full" :src="require('@/assets/logo.webp')" alt="">
          </button>
        </a>

        </div>
      </div>
      <div  class="h-full tablet:h-auto flex items-center justify-center tablet:mt-2s flex-1 mobile:w-1/2 tablet:min-w-nav mx-auto">    
      <div class="text-white w-full">
          <div v-if="path==='/'">
            <a @click="toggleNav" href='#skills'><button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12" :class="position==='skills'?'text-myGreen':'text-white'">Skills</button></a>
            <a @click="toggleNav" href='#projects'><button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12" :class="position === 'projects'?'text-myGreen':'text-white'">Experience</button></a>
            <a @click="toggleNav" href="#about"><button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12" :class="position === 'about'?'text-myGreen':'text-white'">About me</button></a>
          </div>
          <div v-else>
            <a :href="path==='/'?'javascript:void(0);':'./'"><button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12" :class="path==='/'?'text-myGreen':'text-white'">Home</button></a>
          </div>
         

          <a @click="toggleNav" :href="path==='/contact'?'javascript:void(0);':'./contact'"><button class="btn hover:text-myGreen text-center h-12 w-full leading-12" :class="path==='/contact'?'text-myGreen':'text-white'">Contact</button></a>
          <!-- <a @click="toggleNav" :href="path==='/video-player'?'javascript:void(0);':'./video-player'"><button class="btn hover:text-myGreen text-center h-12 w-full leading-12" :class="path==='/video-player'?'text-myGreen':'text-white'">Youtube-Player</button></a> -->
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  props: {
    position: String
  },
  data(){return{
    folder: '',
    path: "",
    window: undefined
  }},
  created(){
    this.path = window.location.pathname;
    if (this.path === '/bachelor-thesis' || this.path === '/firstapp' || this.path === '/chess') this.folder="projects"
    else this.folder = ""
  },
  methods:{
    toggleNav(){
      if(this.navbar){
        this.$refs.navbar.classList.add('tablet:right-full')
      }else{
        this.$refs.navbar.classList.remove('tablet:right-full')
      }
      this.navbar = !this.navbar
    },
    toggleProjects(e){
      if(e.target.classList.contains('open')) {
        e.target.classList.remove('open')
      } else {
        e.target.classList.add('open')
      }
    }
  }
}
</script>

<style scoped>
.tropacity{
    transition: right 0.5s ease-in;
}
.btn{
    transition: 0.3s ease-in;
}
.link-container{
  transition: 0.3s ease-in;
  transform-origin:top;
  height: 3rem;
}
/* .link-container:hover{
  height: 12rem
} */
.link-container.open {
  height: 12rem
}
.link-container.open .link-content{
  transform:scaleY(100%)
}
.link-content{
  transform:scaleY(0%);
  transform-origin:top;
  transition: 0.3s ease-in;
}

.logoshadow {
  box-shadow: 10px 10px 30px #010009;
  cursor: pointer;
}
.logoshadow:active:hover{
  box-shadow: 0 0 0 #010009;
  transform: scale(0.95)
}
@media screen and (min-width: 1111px) {
    .menu-on{
        transition: opacity 1s ease-in;
        opacity: 1;
    }
    .tablet\:translate-reverse{
        transform: translate(0, 0)
    }  
    .desktop\:ml-32 {
        margin-left: 0rem;
        width: 100%
    } 
    #skills div div{
        padding-right: 0;
    }
    .navbar {
      background-color: rgb(0 60 105 / 50%);
      /* background-color: blue; */
      --tw-bg-opacity: 0.5;
    }
}


</style>