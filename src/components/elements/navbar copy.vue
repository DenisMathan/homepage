<template>
  <div id="navbar" class="navbar h-screen fixed w-32 bg-backgroundLight tablet:z-50 tablet:fixed tablet:w-screen tablet:h-screen tablet:border-none tablet:right-full tablet:bg-background tropacity">  
    <div class="p-2 tablet:top-1/3 tablet:left-1/2 tablet:-translate-x-1/2 absolute tablet:relative tablet:w-full tablet:max-w-logo">
      <img class="w-full h-full" :src="require('@/assets/logo.webp')" alt="">
    </div>
    <div  class="h-full flex items-center justify-center ">    
    <div class="text-white w-full">
      <a href="#skills"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Skills </button></a>
      <a href="#projects"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Projects </button></a>
      <a href="#about"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-t border-b leading-12">About </button></a>      
      <a href="./contact" rel="noopener" target="_blanc"><button class="btn text-white hover:text-myGreen text-center h-12 w-full border-b leading-12">Contact </button></a>
    </div>
  </div>
  </div>

</template>

<script>
export default {

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