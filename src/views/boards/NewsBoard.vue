<template>
  <div class="margin">
    <title-label
      :title="$t('news.title')"
    ></title-label>
    <div class="news-all">
      <news-card
        :news-date="'2026/10/17'"
        :news-title-ja="'第41回ふくしまつり'"
        :news-title-en="'41st Fukushi Festival'"
        :news-picture="'IMG_1238.jpg'">
      </news-card>
      <news-card
        :news-date="'2026/10/10'"
        :news-title-ja="'穴生まつり'"
        :news-title-en="'Anao Festival'"
        :news-picture="'IMG_1143.jpg'">
      </news-card>
    </div>
    <detail-button
      :url="'/news/'"
    ></detail-button>
  </div>
</template>

<script>

import NewsCard from '@/components/molecules/card/NewsCard'
import DetailButton from '@/components/atoms/DetailButton'
import TitleLabel from '@/components/atoms/TitleLabel'

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
