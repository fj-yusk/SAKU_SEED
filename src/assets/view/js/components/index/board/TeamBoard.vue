<template>
  <div class="margin">
    <title-label
      :title="$t('team.title')"
    ></title-label>
    <div class="team-all">
      <team-card
        :team-name="$t('common.saku_seed')"
        :team-picture="'team002.jpg'"
      ></team-card>
      <team-card
        :team-name="$t('common.diggy_dan')"
        :team-picture="'IMG_5500.jpg'"
      ></team-card>
    </div>
    <detail-button
      :url="'/team'"
    ></detail-button>
  </div>
</template>

<script>

import TeamCard from '../../../../../common/molecules/card/TeamCard'
import DetailButton from '../../../../../common/atoms/DetailButton'
import TitleLabel from '../../../../../common/atoms/TitleLabel'

export default {
  name: 'TeamBoard',
  components: {
    TeamCard,
    DetailButton,
    TitleLabel
  }
}
</script>

<style scoped>
.margin {
  margin: 0 auto 150px;
}
.team-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 80px;
}
</style>
