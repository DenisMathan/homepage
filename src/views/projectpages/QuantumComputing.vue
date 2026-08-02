<template>
    <div class="p-12 overflow-hidden">
        <h1 data-headinganim-chess class="opacity-0 mb-6">
            {{ page.title }}
        </h1>
        <p v-for="paragraph in page.intro" :key="paragraph" class="text-white mb-6 max-w-3xl m-auto">
            {{ paragraph }}
        </p>
        <h2 data-headinganim-chess class="opacity-0">{{ page.sectionTitle }}</h2>
        <div class="w-full max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-700 shadow-2xl"
            style="aspect-ratio: 210 / 297;">
            <object class="w-full h-full" :data="page.pdfLink" type="application/pdf">
                <p class="text-white p-4">Ihr Browser kann dieses PDF nicht anzeigen.</p>
            </object>
        </div>
    </div>
</template>

<script>
import carousel from '@/components/elements/carousel/types/justCarousel.vue';
import { manipulate } from '@/js/headlineManipulation.js';
import catalog from '@/assets/texts/projects.json'
export default {
    name: 'QuantumComputing',
    metaInfo: {
        meta: [{
            name: 'description',
            content: catalog.programming[6].metaDescription
        }]
    },
    components: {
        carousel
    },
    data() {
        return {
            page: catalog.programming[8].page,
        }
    },
    mounted() {
        let all_headings = [].slice.call(document.querySelectorAll("[data-headinganim-chess]"));
        manipulate(all_headings);
    },
}
</script>