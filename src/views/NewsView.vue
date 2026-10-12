<template>
  <div class="wrap">
    <Header></Header>
    <news-detail-board></news-detail-board>
    <contact-board></contact-board>
    <Footer></Footer>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import Header from '@/components/layout/Header'
import NewsDetailBoard from '@/views/boards/NewsDetailBoard'
import Footer from '@/components/layout/Footer'
import ContactBoard from '@/views/boards/ContactBoard'

export default {
  name: 'news',
  components: {
    Header,
    NewsDetailBoard,
    Footer,
    ContactBoard
  },
  setup () {
    useHead({ title: '月咲SEED公式HP | ニュース' })
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
