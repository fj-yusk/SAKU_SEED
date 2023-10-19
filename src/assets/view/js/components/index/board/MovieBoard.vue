<template>
  <div class="margin">
    <title-label
      :title="$t('movie.title')"
    ></title-label>
    <div class="movie-all">
      <movie-card
        :movie-name-ja="$t('movie.gesshou')"
        :movie-name-en="$t('movie.gesshou')"
        :movie-url="'https://www.youtube.com/embed/9ehffSt9lqM'"
      ></movie-card>
      <movie-card
        :movie-name-ja="$t('movie.yoisa')"
        :movie-name-en="$t('movie.yoisa')"
        :movie-url="'https://www.youtube.com/embed/WyB5f2I5--0'"
      ></movie-card>
      <movie-card
        :movie-name-ja="$t('movie.chimney')"
        :movie-name-en="$t('movie.chimney')"
        :movie-url="'https://www.youtube.com/embed/5k4j07CvsVk'"
      ></movie-card>
    </div>
    <detail-button
      :url="'/movie'"
    ></detail-button>
  </div>
</template>

<script>

import MovieCard from '../../../../../common/molecules/card/MovieCard'
import DetailButton from '../../../../../common/atoms/DetailButton'
import TitleLabel from '../../../../../common/atoms/TitleLabel'

export default {
  name: 'MovieBoard',
  components: {
    MovieCard,
    DetailButton,
    TitleLabel
  }
}
</script>

<style scoped>
.margin {
  margin: 0 auto 150px;
}
.movie-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 80px;
}
</style>
