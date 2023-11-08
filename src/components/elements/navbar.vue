<template>
  <div>
    <!-- button -->
    <div class="fixed top-6 right-12 h-12 w-12 hidden tablet:block cursor-pointer" style="z-index: 51" @click="toggleNav()"><img class="h-full w-full" :src="require('@/assets/icons/menu.webp')" alt="menu-button"></div>
    <!-- navigation -->
    <div ref="navbar" id="navbar" class="navbar h-screen fixed w-32 bg-backgroundLight tablet:z-50 tablet:fixed tablet:w-screen tablet:h-screen tablet:border-none tablet:right-0 tablet:right-full tablet:bg-background tropacity">  
      <div class="absolute tablet:relative tablet:w-1/2 tablet:min-w-nav m-auto mb-12">
        <div class="p-2 max-w-logo m-auto tablet:mt-32 ">
          <a :href="path==='/'?'javascript:void(0);':'./'" aria-label="Go back Home">
            <button class="w-full h-full logoshadow" title="Back to Home">
            <img class="w-full h-full" :src="require('@/assets/logo.webp')" alt="">
          </button>
        </a>

        </div>
      </div>
      <div  class="h-full tablet:h-auto flex items-center justify-center tablet:mt-2s flex-1 mobile:w-1/2 tablet:min-w-nav mx-auto">    
      <div class="text-white w-full">
          <a :href="path==='/'?'javascript:void(0);':'./'"><button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12" :class="path==='/'?'text-myGreen':'text-white'">Home</button></a>
          <div>
            <div class="link-container tablet:px-12 hover:text-myGreen text-center w-full border-b leading-12" :class="folder==='projects'?'text-myGreen':'text-white'">Projects
              <ul class="link-content">
                <li><a :href="path==='/bachelor-thesis'?'javascript:void(0);':'./bachelor-thesis'"><button class="btn hover:text-myGreen text-center h-12 w-full border-b border-t leading-12" :class="path==='/bachelor-thesis'?'text-myGreen':'text-white'">Bachelor-Thesis</button></a></li>
                <li><a :href="path==='/firstapp'?'javascript:void(0);':'./firstapp'"><button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12" :class="path==='/firstapp'?'text-myGreen':'text-white'">First App</button></a></li>
                <li><a :href="path==='/chess'?'javascript:void(0);':'./chess'"><button class="btn hover:text-myGreen text-center h-12 w-full leading-12" :class="path==='/chess'?'text-myGreen':'text-white'">Chess</button></a></li>
              </ul>
            </div>
          </div>
          <a @click="toggleNav" :href="path==='/contact'?'javascript:void(0);':'./contact'"><button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12" :class="path==='/contact'?'text-myGreen':'text-white'">Contact </button></a>
          <a @click="toggleNav" :href="path==='/video-player'?'javascript:void(0);':'./video-player'"><button class="btn hover:text-myGreen text-center h-12 w-full leading-12" :class="path==='/video-player'?'text-myGreen':'text-white'">Youtube-Player</button></a>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  data(){return{
    folder: '',
    path: ""
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
.link-container:hover{
  height: 12rem
}
.link-container:hover .link-content{
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

</style>