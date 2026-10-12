<template>
  <div class="wrap">
    <Header></Header>
    <stage-detail-board></stage-detail-board>
    <contact-board></contact-board>
    <Footer></Footer>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import Header from '@/components/layout/Header'
import StageDetailBoard from '@/views/boards/StageDetailBoard'
import Footer from '@/components/layout/Footer'
import ContactBoard from '@/views/boards/ContactBoard'

export default {
  name: 'stage',
  components: {
    Header,
    StageDetailBoard,
    Footer,
    ContactBoard
  },
  setup () {
    useHead({ title: '月咲SEED公式HP | 出演' })
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
