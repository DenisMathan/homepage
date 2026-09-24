<template>
  <div class="not-found text-white">
    <h1>404</h1>
    <p>Sorry, this page doesn't exist.</p>
    <router-link to="/">Back to the homepage</router-link>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page not found',
    meta:[{
      name: 'robots',
      content: 'noindex'
    }]
  },
}
</script>

<style>
.not-found {
  min-height: calc(100vh - 8rem);
  padding: 2rem;
}
</style>
