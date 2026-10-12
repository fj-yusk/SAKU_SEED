<template>
  <div class="wrap">
    <Header></Header>
    <movie-message-board></movie-message-board>
    <movie-song-board></movie-song-board>
    <contact-board></contact-board>
    <Footer></Footer>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import Header from '@/components/layout/Header'
import MovieSongBoard from '@/views/boards/MovieSongBoard'
import MovieMessageBoard from '@/views/boards/MovieMessageBoard'
import Footer from '@/components/layout/Footer'
import ContactBoard from '@/views/boards/ContactBoard'

export default {
  name: 'movie',
  components: {
    Header,
    MovieSongBoard,
    MovieMessageBoard,
    Footer,
    ContactBoard
  },
  setup () {
    useHead({ title: '月咲SEED公式HP | 動画' })
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
