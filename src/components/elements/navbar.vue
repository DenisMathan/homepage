<template>
  <div id="navbar" class="navbar h-screen fixed w-32 bg-backgroundLight flex items-center justify-center tablet:z-40 tablet:fixed tablet:w-screen tablet:h-screen tablet:border-none tablet:right-0 tablet:right-full tablet:bg-background tropacity">
    <div class="text-white w-full">
        <button class="btn hover:text-myGreen text-center h-12 w-full border-t border-b leading-12">About </button>
        <button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12">Skills </button>
        <button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12">Projects </button>
        <button class="btn hover:text-myGreen text-center h-12 w-full border-b leading-12">Contact </button>
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