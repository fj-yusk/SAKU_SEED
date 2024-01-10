<template>
  <div>
    <main-card
      :message1="$t('common.main_message1')"
      :message2="$t('common.main_message2')"
    ></main-card>
    <main-board></main-board>
<!--    <stage-board></stage-board>-->
    <team-board></team-board>
    <news-board></news-board>
    <movie-board></movie-board>
    <contact-board></contact-board>
  </div>
</template>

<script>

import MainCard from '../../../../common/molecules/card/MainCard'
import MainBoard from './board/MainBoard'
import TeamBoard from './board/TeamBoard'
import NewsBoard from './board/NewsBoard'
import MovieBoard from './board/MovieBoard'
import StageBoard from './board/StageBoard'
import ContactBoard from './board/ContactBoard'

export default {
  name: 'Home',
  components: {
    MainCard,
    MainBoard,
    TeamBoard,
    NewsBoard,
    MovieBoard,
    StageBoard,
    ContactBoard
  }
}
</script>

<style scoped>

</style>
