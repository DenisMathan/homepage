<template>
    <div id="" ref="dyn-content" class="justify-center">
        <h2 v-if="title && title!==''" >{{title}}</h2>
        <p v-for="phrase in phrases">
            {{ phrase }}
        </p>
    </div>
  </template>

<script>
export default {
  name: 'dynContent',
  props:{
      title: String,
      phrases: Array
  },
  components:{
  },
}
</script>