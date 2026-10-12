<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'

export default {
  name: 'App',
  setup () {
    useHead({
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'google-site-verification', content: 'fCOdw9ODxphtZzgw__w6RqEB06GKuD-H6PauBng-o6k' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Sawarabi+Mincho&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css', crossorigin: 'anonymous' }
      ]
    })
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: 'Sawarabi Mincho', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e1e6b5;
  margin: 0;
  background-color: #1C1B18;
}
</style>
