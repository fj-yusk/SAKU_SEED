<template>
  <div>
    <title-label
      :title="$t('team.title')"
    ></title-label>
    <team-detail-card
      :team-name="$t('common.saku_seed')"
      :team-intro="$t('team.saku_seed_intro')"
      :team-picture="'team002.jpg'"
    ></team-detail-card>
    <team-detail-card
      :team-name="$t('common.diggy_dan')"
      :team-intro="$t('team.diggy_dan_intro')"
      :team-picture="'IMG_5500.jpg'"
    ></team-detail-card>
  </div>
</template>

<script>

import TitleLabel from '../../../../../../common/atoms/TitleLabel'
import TeamDetailCard from '../../../../../../common/molecules/card/detail/TeamDetailCard'

export default {
  name: 'TeamDetailBoard',
  components: {
    TitleLabel,
    TeamDetailCard
  }
}
</script>

<style scoped>

</style>
