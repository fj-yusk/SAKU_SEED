<template>
  <div class="wrap">
    <Header></Header>
    <team-detail-board></team-detail-board>
    <contact-board></contact-board>
    <Footer></Footer>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import Header from '@/components/layout/Header'
import TeamDetailBoard from '@/views/boards/TeamDetailBoard'
import Footer from '@/components/layout/Footer'
import ContactBoard from '@/views/boards/ContactBoard'

export default {
  name: 'team',
  components: {
    Header,
    TeamDetailBoard,
    Footer,
    ContactBoard
  },
  setup () {
    useHead({ title: '月咲SEED公式HP | チーム' })
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
