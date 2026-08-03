<template>
  <div class="relative p-12 tablet:p-6 mobile:p-2 overflow-hidden text-white">
    <h1 data-headinganim-chess class="opacity-0 mb-6">
      {{ currentPage.title || 'Project' }}
    </h1>

    <div v-if="currentPage.intro && currentPage.intro.length" class="max-w-4xl mx-auto">
      <p
        v-for="(paragraph, index) in currentPage.intro"
        :key="`${currentPage.title || 'project'}-${index}`"
        class="text-white mb-6"
        v-html="paragraph"
      ></p>
    </div>

    <div v-if="currentPage.sectionTitle" class="max-w-4xl mx-auto mt-8">
      <h2 data-headinganim-chess class="opacity-0 mb-4">
        {{ currentPage.sectionTitle }}
      </h2>
    </div>

    <div v-if="currentPage.versions" class="max-w-4xl mx-auto mt-8">
      <div class="flex flex-wrap gap-3 mb-6">
        <button
          v-for="(version, index) in currentPage.versions"
          :key="version.label"
          class="px-4 py-2 rounded-full border transition"
          :class="selectedVersion === index ? 'bg-myGreen text-gray-900 border-myGreen' : 'bg-gray-800 text-white border-gray-700 hover:border-myGreen'"
          @click="selectedVersion = index"
        >
          {{ version.label }}
        </button>
      </div>

      <div v-if="selectedVersionData" class="bg-gray-800/70 rounded-lg p-6 shadow-lg">
        <h3 class="text-lg font-semibold mb-3">{{ selectedVersionData.label }}</h3>
        <div v-if="selectedVersionData.usedModel" class="mb-4">
          <p class="text-sm text-gray-300 mb-2">Used model</p>
          <p class="mb-1">{{ selectedVersionData.usedModel[0] }}</p>
          <a
            v-if="selectedVersionData.usedModel[1]"
            :href="selectedVersionData.usedModel[1]"
            class="text-myGreen underline"
          >
            Open model reference
          </a>
        </div>
        <p v-if="selectedVersionData.result" class="text-gray-200 leading-relaxed">
          {{ selectedVersionData.result }}
        </p>
      </div>
    </div>

    <div v-if="pdfSource" class="w-full max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden border border-gray-700 shadow-2xl" style="aspect-ratio: 210 / 297;">
      <object class="w-full h-full" :data="pdfSource" type="application/pdf">
        <div class="flex h-full flex-col items-center justify-center gap-4 bg-gray-900 p-4 text-center">
          <p class="text-white">Ihr Browser kann dieses PDF nicht anzeigen.</p>
          <a
            class="rounded-full border border-myGreen px-5 py-2 text-myGreen transition hover:bg-myGreen hover:text-gray-900"
            :href="pdfSource"
            :download="pdfDownloadName"
          >
            PDF herunterladen
          </a>
        </div>
      </object>
    </div>
    <div v-if="currentPage.TODO" class="max-w-4xl mx-auto mt-8 text-yellow-400">
      <p>TODO: {{ currentPage.TODO }}</p>
    </div>
  </div>
</template>

<script>
import { manipulate } from '@/js/headlineManipulation.js';
import catalog from '@/assets/texts/projects.json';

export default {
  name: 'GenericProject',
  props: {
    projectSlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedVersion: 0
    };
  },
  computed: {
    projectEntry() {
      const entries = [...(catalog.experience || []), ...(catalog.programming || [])];
      return entries.find((entry) => {
        if (!entry) return false;
        return (
          entry.learnMore === this.projectSlug ||
          entry.id === this.projectSlug ||
          entry.name?.toLowerCase().replace(/\s+/g, '-') === this.projectSlug
        );
      });
    },
    currentPage() {
      return this.projectEntry?.page || {};
    },
    selectedVersionData() {
      return this.currentPage.versions?.[this.selectedVersion] || null;
    },
    pdfSource() {
      const pdfLink = this.currentPage.pdfLink;

      if (!pdfLink) {
        return '';
      }

      if (/^(https?:)?\/\//.test(pdfLink) || pdfLink.startsWith('data:')) {
        return pdfLink;
      }

      return `${process.env.BASE_URL}${pdfLink.replace(/^\/+/, '')}`;
    },
    pdfDownloadName() {
      const pdfLink = this.currentPage.pdfLink;

      if (!pdfLink) {
        return 'download.pdf';
      }

      return pdfLink.split('/').pop() || 'download.pdf';
    }
  },
  metaInfo() {
    return {
      meta: [
        {
          name: 'description',
          content: this.currentPage.metaDescription || 'Project page'
        }
      ]
    };
  },
  mounted() {
    const allHeadings = [].slice.call(document.querySelectorAll('[data-headinganim-chess]'));
    manipulate(allHeadings);
  },
  watch: {
    projectSlug() {
      this.selectedVersion = 0;
    }
  }
};
</script>
