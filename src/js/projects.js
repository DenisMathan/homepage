import catalog from '@/assets/texts/projects.json'

// Looks up a project entry by its learnMore slug, id, or slugified name.
export function findProject(slug) {
  const entries = [...(catalog.experience || []), ...(catalog.programming || [])]
  return entries.find((entry) => {
    if (!entry) return false
    return (
      entry.learnMore === slug ||
      entry.id === slug ||
      entry.name?.toLowerCase().replace(/\s+/g, '-') === slug
    )
  })
}

export function findProjectPage(slug) {
  return findProject(slug)?.page || {}
}

// metaInfo for a project page (see head.js): its title plus a description that
// replaces the site-wide fallback from App.vue.
export function projectMeta(slug) {
  const page = findProjectPage(slug)
  return {
    title: page.title,
    meta: [{
      vmid: 'description',
      name: 'description',
      content: page.metaDescription || 'Project page by Denis Mathan'
    }]
  }
}
