<template>
  <div class="wrap">
    <Header></Header>
    <news-detail-board></news-detail-board>
    <contact-board></contact-board>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './index/Header'
import NewsDetailBoard from './index/board/detail/NewsDetailBoard'
import Footer from './index/Footer'
import ContactBoard from './index/board/ContactBoard'

export default {
  name: 'news',
  components: {
    Header,
    NewsDetailBoard,
    Footer,
    ContactBoard
  },
  head: {
    title: {
      inner: '月咲SEED公式HP',
      separator: '|',
      complement: 'ニュース'
    }
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
