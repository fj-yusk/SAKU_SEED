<template>
  <div>
    <title-label
      :title="$t('movie.message')"
    ></title-label>
    <div class="movie-all">
      <movie-card
        :movie-name-ja="'届け！幸福のメッセージ'"
        :movie-name2-ja="'「煙突百年物語」'"
        :movie-name-en="'Deliver! Message of Happiness'"
        :movie-name2-en="'「Chimney 100 years Story」'"
        :movie-description1-ja="'結婚式や披露宴を延期・中止にする'"
        :movie-description2-ja="'辛いご決断をされたみなさまへ'"
        :movie-description1-en="''"
        :movie-description2-en="''"
        :movie-url="'https://www.youtube.com/embed/rXlEbKncqOI'"
      ></movie-card>
    </div>
  </div>
</template>

<script>

import TitleLabel from '../../../../../../common/atoms/TitleLabel'
import MovieCard from '../../../../../../common/molecules/card/MovieCard'

export default {
  name: 'MovieMessageBoard',
  components: {
    TitleLabel,
    MovieCard
  }
}
</script>

<style scoped>
.movie-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 100px;
}
</style>
