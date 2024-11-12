<template>
  <div>
    <main-card
      :message1="$t('common.main_message1')"
      :message2="$t('common.main_message2')"
    ></main-card>
    <main-board></main-board>
    <contact-board></contact-board>
  </div>
</template>

<script>

import MainCard from '../../../../common/molecules/card/MainCard'
import MainBoard from './board/MainBoard'
import ContactBoard from './board/ContactBoard'

export default {
  name: 'Home',
  components: {
    MainCard,
    MainBoard,
    ContactBoard
  }
}
</script>

<style scoped>

</style>
