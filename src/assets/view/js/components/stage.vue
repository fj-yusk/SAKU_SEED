<template>
  <div class="wrap">
    <Header></Header>
    <stage-detail-board></stage-detail-board>
    <contact-board></contact-board>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './index/Header'
import StageDetailBoard from './index/board/detail/StageDetailBoard'
import Footer from './index/Footer'
import ContactBoard from './index/board/ContactBoard'

export default {
  name: 'stage',
  components: {
    Header,
    StageDetailBoard,
    Footer,
    ContactBoard
  },
  head: {
    title: {
      inner: '月咲SEED公式HP',
      separator: '|',
      complement: '出演'
    }
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
