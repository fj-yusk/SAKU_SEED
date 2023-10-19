<template>
  <div>
    <title-label
      :title="$t('stage.title')"
    ></title-label>
    <div class="stage-all">
      <stage-card
        :stage-name-ja="'TAGAWAコールマイン・フェスティバル'"
        :stage-name-en="'TAGAWA Coalmine Festival'"
        :stage-season-ja="'11月中旬ごろ'"
        :stage-season-en="'Mid-November'"
        :stage-venue-ja="'福岡県田川市'"
        :stage-venue-en="'Tagawa City, Fukuoka'"
        :stage-picture="'IMG_5531.jpg'"
      ></stage-card>
      <stage-card
        :stage-name-ja="'にっぽり炭坑節まつり'"
        :stage-name-en="'Nippori Tanko Bushi Festival'"
        :stage-season-ja="'9月中旬ごろ'"
        :stage-season-en="'Mid-September'"
        :stage-venue-ja="'東京都荒川区南西部地区'"
        :stage-venue-en="'Southwestern district of Arakawa-ku, Tokyo'"
        :stage-picture="'event003.jpg'"
      ></stage-card>
    </div>
    <stage-list></stage-list>
  </div>
</template>

<script>

import TitleLabel from '../../../../../../common/atoms/TitleLabel'
import StageList from '../../../../../../common/molecules/StageList'
import StageCard from '../../../../../../common/molecules/card/StageCard'
import Schedule from '../../../../../../common/molecules/Schedule'

export default {
  name: 'StageDetailBoard',
  components: {
    TitleLabel,
    StageCard,
    StageList,
    Schedule
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.stage-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 100px;
}
</style>
