<template>
  <div class="techview px-12 tablet:px-6 mobile:px-4 py-12 text-white">
    <section class="hero max-w-6xl mx-auto mb-16">
      <p class="eyebrow mb-4">Techview</p>
      <h1 data-headinganim-techview class="opacity-0 mb-6">
        Software
        <br />
        first. Clear.
        <br />
        Structured.
      </h1>
      <div class="max-w-3xl text-lg leading-8 text-gray-200">
        <p>
          Denis Mathan, B. Eng., with experience from Valueminer and Coma, and projects ranging from a songwriting app to a chatbot and a Java chess game.
        </p>
      </div>
      <div class="mt-8 flex flex-wrap gap-4">
        <a href="#work" class="pill">01 Selected work</a>
        <a href="#stack" class="pill">02 Tech stack</a>
        <a href="#contact" class="pill">03 Contact</a>
      </div>
    </section>

    <section id="work" class="max-w-6xl mx-auto mb-16">
      <div class="section-head mb-6">
        <p class="eyebrow">01 Selected work</p>
        <h2>Projects presented as case studies</h2>
      </div>
      <div class="grid gap-6 lg:grid-cols-3">
        <article v-for="project in featuredProjects" :key="project.title" class="card">
          <p class="card-tag">{{ project.category }}</p>
          <h3 class="mb-3">{{ project.title }}</h3>
          <p class="text-gray-200 leading-7 mb-4">{{ project.summary }}</p>
          <ul class="space-y-2 text-sm text-gray-300 mb-5">
            <li v-for="point in project.points" :key="point">{{ point }}</li>
          </ul>
          <p class="mini-label">Technologies used</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="stack in project.stack" :key="stack" class="tag">{{ stack }}</span>
          </div>
          <a v-if="project.link" :href="project.link" target="_blank" rel="noreferrer" class="inline-flex mt-5 text-sm text-myGreen">
            Open project
          </a>
        </article>
      </div>
    </section>

    <section id="stack" class="max-w-6xl mx-auto mb-16">
      <div class="section-head mb-6">
        <p class="eyebrow">02 Tech stack</p>
        <h2>Tools I actually use</h2>
      </div>
      <div class="grid gap-6 md:grid-cols-3">
        <div v-for="group in stackGroups" :key="group.title" class="card compact-card">
          <h3 class="mb-4">{{ group.title }}</h3>
          <ul class="space-y-3 text-gray-200">
            <li v-for="item in group.items" :key="item.name" class="flex items-center justify-between gap-4">
              <span>{{ item.name }}</span>
              <span class="text-xs uppercase tracking-[0.2em] text-myGreen">{{ item.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto mb-16">
      <div class="section-head mb-6">
        <p class="eyebrow">03 Focus</p>
        <h2>Less storytelling, more proof</h2>
      </div>
      <div class="grid gap-6 lg:grid-cols-2">
        <div class="card">
          <h3 class="mb-4">Hiring signal</h3>
          <p class="text-gray-200 leading-7">
            Clear headings, stronger project summaries, and a direct path to contact.
          </p>
        </div>
        <div class="card">
          <h3 class="mb-4">Design choice</h3>
          <p class="text-gray-200 leading-7">
            Calm, technical, and legible. The creative homepage can stay expressive while this view stays functional.
          </p>
        </div>
      </div>
    </section>

    <section id="contact" class="max-w-6xl mx-auto">
      <div class="card contact-card">
        <div>
          <p class="eyebrow mb-3">04 Contact</p>
        </div>
        <div class="flex flex-wrap gap-4 mt-6 lg:mt-0">
          <a href="./contact" class="pill">Contact</a>
          <a href="https://github.com/DenisMathan" target="_blank" rel="noreferrer" class="pill">GitHub</a>
          <a href="./" class="pill pill-ghost">Creative view</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { manipulate } from '@/js/headlineManipulation.js'

export default {
  name: 'Techview',
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
    return {
      featuredProjects: [
        {
          category: 'Company experience',
          title: 'Valueminer',
          summary:
            'A Munich-based low-code application where clients can build their own configuration around the system.',
          points: ['Real company experience in a production setting', 'Low-code product context', 'JSON configuration and Firebird conversion work'],
          stack: ['Low-code', 'JSON config', 'Firebird', 'Cron job', 'Unit-based inputs'],
          link: 'https://valueminer.eu/',
        },
        {
          category: 'Internship',
          title: 'Coma',
          summary:
            'A five-month internship during my studies, marking my first experience in the IT working world outside university projects.',
          points: ['First IT industry experience', 'Five-month internship', 'Good evidence of working in a real company environment'],
          stack: ['Internship', 'IT work', 'Team environment'],
          link: 'https://www.coma.de/',
        },
        {
          category: 'Applied AI',
          title: 'Chatbot',
          summary:
            'A chatbot with personal knowledge developed in Python, using ChromaDB and both local and API-backed model approaches.',
          points: ['Personal knowledge as data source', 'ChromaDB-based retrieval', 'Versioned approach with Mistral 7B and Le Chat API'],
          stack: ['Python', 'ChromaDB', 'Mistral 7B', 'Le Chat API'],
          link: 'https://github.com/DenisMathan/Alfred',
        },
        {
          category: 'Product thinking',
          title: 'Bachelor Thesis / Songwriting App',
          summary:
            'A progressive web app for musicians that combines a digital audio workstation with a lead sheet creation tool.',
          points: ['Combines DAW and lead sheet workflow', 'Built to support songwriting collaboration', 'Strongest end-to-end product case study'],
          stack: ['PWA', 'Vue', 'DAW', 'Lead sheet', 'Audio recording'],
          link: './bachelor-thesis',
        },
        {
          category: 'Foundations',
          title: 'Chess',
          summary:
            'A Java project created to teach myself object-oriented programming and game logic.',
          points: ['Learning project for Java and OOP', 'Implements the core rules except the king', 'Clear proof of early engineering fundamentals'],
          stack: ['Java', 'OOP', 'Game logic', 'Rules engine'],
          link: './chess',
        },
      ],
      stackGroups: [
        {
          title: 'Frontend',
          items: [
            { name: 'JavaScript', level: '95%' },
            { name: 'TypeScript', level: '90%' },
            { name: 'Vue', level: '70%' },
          ],
        },
        {
          title: 'Backend / tooling',
          items: [
            { name: 'Golang', level: '85%' },
            { name: 'Python', level: '70%' },
            { name: 'Java', level: '40%' },
          ],
        },
        {
          title: 'Creative tech',
          items: [
            { name: "3D's Max", level: '20%' },
            { name: 'Illustrator', level: '60%' },
            { name: 'Photoshop', level: '60%' },
          ],
        },
      ],
    }
  },
  mounted() {
    const allHeadings = [].slice.call(document.querySelectorAll('[data-headinganim-techview]'))
    manipulate(allHeadings)
  },
}
</script>

<style scoped>
.techview {
  max-width: 1440px;
  margin: 0 auto;
}

.hero h1 {
  font-size: clamp(3rem, 9vw, 6.5rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  text-transform: uppercase;
}

.eyebrow {
  font-size: 0.75rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #00ffbc;
}

.section-head h2 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  letter-spacing: -0.04em;
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
}

.compact-card {
  min-height: 100%;
}

.card h3 {
  font-size: 1.25rem;
}

.mini-label {
  margin-bottom: 0.5rem;
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
}

.card-tag {
  display: inline-flex;
  margin-bottom: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
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

.pill {
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
}

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