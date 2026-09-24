// Minimal replacement for vue-meta. Components declare a `metaInfo` option
// (object, or function evaluated against the component) with a `title` and an
// optional `description` entry in `meta`. The root component additionally
// provides `titleTemplate` and the site-wide default description, which are
// restored on every route change before the new view applies its own.
let titleTemplate = (title) => title
let defaultDescription = ''

function descriptionOf(info) {
  return info.meta?.find((tag) => tag.name === 'description')?.content
}

function apply(info) {
  document.title = titleTemplate(info.title)

  let tag = document.querySelector('meta[name="description"]')
  if (!tag) {
    tag = document.createElement('meta')
    tag.name = 'description'
    document.head.appendChild(tag)
  }
  tag.content = descriptionOf(info) ?? defaultDescription
}

export default {
  created() {
    const option = this.$options.metaInfo
    if (!option) return

    const resolve = () => (typeof option === 'function' ? option.call(this) : option)
    const info = resolve()

    if (info.titleTemplate) {
      titleTemplate = info.titleTemplate
      defaultDescription = descriptionOf(info) ?? ''
      apply({})
      this.$watch('$route', () => apply({}))
      return
    }

    // Re-applies when reactive state the metaInfo depends on changes, e.g. the
    // projectSlug prop of GenericProject when it is reused across routes.
    this.$watch(resolve, apply, { immediate: true })
  }
}
