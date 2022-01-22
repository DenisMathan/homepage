<template>
  <div>
    <!-- button -->
    <div class="fixed top-6 right-12 h-12 w-12 hidden tablet:block cursor-pointer" style="z-index: 51" @click="toggleNav()"><img class="h-full w-full" :src="require('@/assets/icons/menu.webp')" alt="menu-button"></div>
    <!-- navigation -->
    <div ref="navbar" id="navbar" class="navbar h-screen fixed w-32 bg-backgroundLight tablet:z-50 tablet:fixed tablet:w-screen tablet:h-screen tablet:border-none tablet:right-0 tablet:right-full tablet:bg-background tropacity">  
      <!-- <div class="p-2 tablet:top-1/3 tablet:left-1/2 tablet:-translate-1/2 absolute tablet:relative m-auto tablet:w-full tablet:max-w-logo">
        <img class="w-full h-full" :src="require('@/assets/logo.webp')" alt="">
      </div> -->
      <div class="absolute tablet:relative tablet:w-1/2 tablet:min-w-nav m-auto mb-12">
        <div class="p-2 max-w-logo m-auto tablet:mt-32 ">
          <img class="w-full h-full" :src="require('@/assets/logo.webp')" alt="">
        </div>
      </div>
      <div  class="h-full tablet:h-auto flex items-center justify-center tablet:mt-2s flex-1 mobile:w-1/2 tablet:min-w-nav mx-auto">    
      <div class="text-white w-full">
          <a v-show="home" @click="toggleNav" href="#skills"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Skills </button></a>
          <a v-show="home" @click="toggleNav" href="#projects"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Projects </button></a>
          <a v-show="home" @click="toggleNav" href="#about"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-t border-b leading-12">About </button></a>
          <a v-show="home" @click="toggleNav" rel="noopener" href="./contact" target="_blanc"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Contact </button></a>
          <a v-show="!home" href="./"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Home</button></a>
          <a v-show="!home" href="./bachelor-thesis"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Bachelor-Thesis</button></a>
          <a v-show="!home" href="./firstapp"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">First App</button></a>
          <a v-show="!home" href="./chess"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Chess</button></a>
          <a v-show="!home" href="./coma"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">coma</button></a>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
  data(){return{
    home: false
  }},
  created(){
    if(window.location.pathname === '/') this.home = true;
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

<style>
.tropacity{
    transition: right 0.5s ease-in;
}
.btn{
    transition: 0.3s ease-in;
}
</style>