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

import Header from './index/Header'
import MovieSongBoard from './index/board/detail/MovieSongBoard'
import MovieMessageBoard from './index/board/detail/MovieMessageBoard'
import MoviePracticeBoard from './index/board/detail/MoviePracticeBoard'
import Footer from './index/Footer'
import ContactBoard from './index/board/ContactBoard'

export default {
  name: 'movie',
  components: {
    Header,
    MovieSongBoard,
    MovieMessageBoard,
    MoviePracticeBoard,
    Footer,
    ContactBoard
  },
  head: {
    title: {
      inner: '月咲SEED公式HP',
      separator: '|',
      complement: '動画'
    }
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
