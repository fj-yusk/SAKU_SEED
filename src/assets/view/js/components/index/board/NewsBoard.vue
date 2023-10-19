<template>
  <div class="margin">
    <title-label
      :title="$t('news.title')"
    ></title-label>
    <div class="news-all">
      <news-card
        :news-date="'2023/08/31'"
        :news-title-ja="'夏祭り2連チャン！'"
        :news-title-en="'Double Summer Festival!!'"
        :news-picture="'IMG_6867.jpg'">
      </news-card>
      <news-card
        :news-date="'2023/08/31'"
        :news-title-ja="'大町町夏祭り！！'"
        :news-title-en="'OHMACHI Town Summer Festival!'"
        :news-picture="'IMG_6496.jpg'">
      </news-card>
    </div>
    <detail-button
      :url="'/news/'"
    ></detail-button>
  </div>
</template>

<script>

import NewsCard from '../../../../../common/molecules/card/NewsCard'
import DetailButton from '../../../../../common/atoms/DetailButton'
import TitleLabel from '../../../../../common/atoms/TitleLabel'

export default {
  name: 'NewsBoard',
  components: {
    NewsCard,
    DetailButton,
    TitleLabel
  }
}
</script>

<style scoped>
.margin {
  margin: 0 auto 150px;
}
.news-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 80px;
}
</style>
