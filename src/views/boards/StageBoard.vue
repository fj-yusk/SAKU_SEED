<template>
  <div class="margin">
    <Schedule
      :title="$t('stage.schedule')"
      :sub_title="$t('stage.supplement')"
      :schedules="schedules"
      :members="false"
    ></Schedule>
    <detail-button
      :url="'/stage'"
      :stage="true"
    ></detail-button>
  </div>
</template>

<script>

import DetailButton from '@/components/atoms/DetailButton'
import TitleLabel from '@/components/atoms/TitleLabel'
import Schedule from '@/components/molecules/Schedule'

export default {
  name: 'StageBoard',
  components: {
    DetailButton,
    TitleLabel,
    Schedule
  },
  data () {
    return {
      schedules: [
        {title: 'なし', date: '-'}
      ]
    }
  }
}
</script>

<style scoped>
.margin {
  margin: 0 auto 150px;
}
.stage-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 80px;
}
</style>
