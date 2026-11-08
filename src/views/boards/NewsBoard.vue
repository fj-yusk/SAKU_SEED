<template>
  <div class="margin">
    <title-label
      :title="$t('news.title')"
    ></title-label>
    <div class="news-all">
      <news-card
        :news-date="'2026/11/08'"
        :news-title-ja="'川崎町ふくしまつり'"
        :news-title-en="'Kawasaki Town Fukushi Festival'"
        :news-picture="'IMG_1375.jpg'">
      </news-card>
      <news-card
        :news-date="'2026/11/07'"
        :news-title-ja="'赤村文化祭'"
        :news-title-en="'Akamura Culture Festival'"
        :news-picture="'IMG_1374.jpg'">
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
