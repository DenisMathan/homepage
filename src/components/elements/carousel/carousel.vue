<template>
    <div v-if="windowWidth>=1000 && items.length>=5">   
      <threeDCarousel  :projects="items" :name="name"/>
    </div>
    <div v-else>
      <simpleCarousel :projects="items"  :name="name"/>
    </div>
</template>

<script>
import threeDCarousel from '@/components/elements/carousel/types/3DCarousel.vue';
import simpleCarousel from '@/components/elements/carousel/types/simpleCarousel';
export default {
    components: {
        threeDCarousel,
        simpleCarousel
    },
    props:{
        items: Array,
        name: String,
        windowWidth: Number
    },

}
</script>

<style>

</style>