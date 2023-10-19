<template>
  <div class="wrap">
    <Header></Header>
    <team-detail-board></team-detail-board>
    <contact-board></contact-board>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './index/Header'
import TeamDetailBoard from './index/board/detail/TeamDetailBoard'
import Footer from './index/Footer'
import ContactBoard from './index/board/ContactBoard'

export default {
  name: 'team',
  components: {
    Header,
    TeamDetailBoard,
    Footer,
    ContactBoard
  },
  head: {
    title: {
      inner: '月咲SEED公式HP',
      separator: '|',
      complement: 'チーム'
    }
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
