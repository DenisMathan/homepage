<template>
  <div class="techview px-12 tablet:px-6 mobile:px-4 py-12 text-white">
    <section class="hero max-w-6xl mx-auto mb-8">
      <h1 data-headinganim-techview class="opacity-0 mb-6">
        Techview
      </h1>
      <p class="eyebrow mb-4">Denis Mathan B. Sc. / B. Eng.</p>
      <div class="text-lg text-gray-200">
        <p class="text-sm">
          A structured software-focused portfolio with selected work. This view is designed to provide a clear overview
          of my technical expertise and project experience, making it easier for potential employers or collaborators to
          assess my skills and contributions.
        </p>
      </div>
    </section>

    <section id="work" class="max-w-6xl mx-auto mb-8">
      <div class="section-head mb-6">
        <p class="eyebrow">Company experience</p>
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        <article v-for="project in companies" :key="project.title" class="card">
          <h3 class="mb-3">{{ project.title }}</h3>
          <p class="text-gray-200 leading-7 mb-4">{{ project.summary }}</p>
          <ul class="space-y-2 text-sm text-gray-300 mb-5">
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>
          <div class="flex flex-wrap gap-4">
            <a v-if="project.goto" :href="project.goto" target="_blank"
              :rel="project.gotoExternal ? 'noreferrer' : null" class="inline-flex mt-5 text-sm text-myGreen">
              {{ project.gotoLabel }}
            </a>
            <a v-if="project.learnMore" :href="project.learnMore"
              class="inline-flex mt-5 text-sm text-myGreen" target="_self">
              {{ project.learnMoreLabel }}
            </a>
            <a v-if="project.github" :href="project.github" target="_blank"
              :rel="project.githubExternal ? 'noreferrer' : null" class="inline-flex mt-5 text-sm text-myGreen">
              {{ project.githubLabel }}
            </a>
          </div>
          <div class="pill-container mb-2 flex flex-gap-2 flex-wrap mt-4">
            <Pill class="mb-2" v-for="technology in project.techstack" :key="technology" :name="technology" />
          </div>
        </article>
      </div>
    </section>

    <section id="projects" class="max-w-6xl mx-auto mb-8">
    <div class="section-head">
      <p class="eyebrow mt-8">Projects</p>
    </div>
    <div class="grid gap-6 lg:grid-cols-3">
      <article v-for="project in projects" :key="project.title" class="card">
        <h3 class="mb-3">{{ project.title }}</h3>
        <p class="text-gray-200 leading-7 mb-4">{{ project.summary }}</p>
        <ul class="space-y-2 text-sm text-gray-300 mb-5">
          <li v-for="point in project.points" :key="point">{{ point }}</li>
        </ul>
        <div class="flex flex-wrap gap-4">
          <a v-if="project.goto" :href="project.goto" target="_blank" :rel="project.gotoExternal ? 'noreferrer' : null"
            class="inline-flex mt-5 text-sm text-myGreen">
            {{ project.gotoLabel }}
          </a>
          <a v-if="project.learnMore" :href="project.learnMore" target="_self" class="inline-flex mt-5 text-sm text-myGreen">
            {{ project.learnMoreLabel }}
          </a>
          <a v-if="project.github" :href="project.github" target="_blank"
            :rel="project.githubExternal ? 'noreferrer' : null" class="inline-flex mt-5 text-sm text-myGreen">
            {{ project.githubLabel }}
          </a>
        </div>
        <div class="pill-container mb-2 flex flex-gap-2  mt-4">
          <Pill class="mb-2" v-for="technology in project.techstack" :key="technology" :name="technology" />
        </div>
      </article>
    </div>
    </section>

    <div class="flex flex-wrap gap-4 mt-6 lg:mt-0">
      <a href="./" class="pill">Creative view</a>
      <a href="https://github.com/DenisMathan" target="_blank" rel="noreferrer" class="pill">GitHub</a>
      <a href="./contact" class="pill">Contact</a>
    </div>
  </div>
</template>

<script>
import { manipulate } from '@/js/headlineManipulation.js'
import catalog from '@/assets/texts/projects.json'
import Pill from '@/components/elements/pill/pill.vue'

function resolveCatalogReference(reference) {
  const parts = reference.split('.')
  let current = catalog
  for (const part of parts) {
    console.log("part:", part, "current:", current)
    if (current == null) return null
    current = Array.isArray(current) ? current.filter((item) => item.name === part || item.id === part)[0] : current[part]
  }
  console.log('Resolved catalog reference:', reference, 'to:', current)
  return current
}

function getTechviewCategory(reference) {
  const section = reference.split('.')[1]
  if (section === 'experience') return 'Company experience'
  if (section === 'programming') return 'Project'
  return 'Selected work'
}

function createObjectFromReference(reference) {
  const project = resolveCatalogReference(reference)
  if (!project) return null
  return {
    category: getTechviewCategory(reference),
    title: project.name,
    summary: project.summary || '',
    points: project.description || [],
    goto: project.goto,
    gotoLabel: project.goto_label || 'Open live project',
    learnMore: project.learnMore,
    learnMoreLabel: project.learnMore_label || 'More details ',
    github: project.github,
    githubLabel: project.github_label || 'Open code',
    techstack: project.techstack || [],
  }
}

export default {
  name: 'Techview',
  components: {
    Pill,
  },
  metaInfo: {
    title: 'Denis Mathan || Techview',
    meta: [
      {
        name: 'description',
        content:
          'A structured software-focused portfolio view for Denis Mathan with selected work, stack, and direct hiring signals.',
      },
    ],
  },
  data() {
    const companies = catalog.techview.companies
      .map(reference => {
        const project = resolveCatalogReference(reference)
        if (!project) return null
        return createObjectFromReference(reference)
      })
      .filter(Boolean)

    const projects = catalog.techview.projects
      .map(reference => {
        const project = resolveCatalogReference(reference)
        if (!project) return null
        return createObjectFromReference(reference)
      })
      .filter(Boolean)

    return {
      companies: companies,
      projects: projects,
      stackGroups: catalog.techview.stackGroups,
    }
  },
  mounted() {
    const allHeadings = [].slice.call(document.querySelectorAll('[data-headinganim-techview]'))
    manipulate(allHeadings)
  },
}
</script>

<style scoped>
p {
  margin-bottom: 1rem;
  text-align: left;
}

.techview {
  max-width: 1440px;
  margin: 0 auto;
}

.pill-container {
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: space-between; */
  gap: 0.5rem;
  overflow-x: auto;
  scrollbar-width: none;
  /* For Firefox */
  padding: 0.2rem 0rem;
}

.hero h1 {
  font-size: clamp(3rem, 9vw, 6.5rem);
  line-height: 0.9;
  text-transform: uppercase;
}

.eyebrow {
  font-size: 1rem;
  text-transform: uppercase;
  color: #00ffbc;
}

.section-head h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
}

.grid {
  display: grid;
}

.card {
  background: rgba(4, 14, 24, 0.72);
  border: 1px solid rgba(0, 255, 188, 0.18);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  overflow: hidden;
}

.compact-card {
  min-height: 100%;
}

.card h3 {
  font-size: 1.5rem;
}

.mini-label {
  margin-bottom: 0.5rem;
  font-size: 0.72rem;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.card-tag {
  display: inline-flex;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #00ffbc;
}

.tag {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  color: #f2f2f2;
}

/* .pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0.75rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 255, 188, 0.35);
  background: rgba(0, 255, 188, 0.08);
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.pill:hover {
  transform: translateY(-1px);
  background: rgba(0, 255, 188, 0.16);
}

.pill-ghost {
  background: transparent;
} */

.contact-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

@media screen and (max-width: 1111px) {
  .contact-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>