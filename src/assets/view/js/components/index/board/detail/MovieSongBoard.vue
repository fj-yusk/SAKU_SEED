<template>
  <div>
    <title-label
      :title="$t('movie.song')"
    ></title-label>
    <div class="movie-all">
      <movie-card
        :movie-name-ja="$t('movie.gesshou')"
        :movie-name-en="$t('movie.gesshou')"
        :movie-description1-ja="'月咲SEEDのメインテーマソング'"
        :movie-description2-ja="'炭坑節のイメージを覆す現代的J-POPソング'"
        :movie-description1-en="'SAKU-SEED\'s Main Theme Song'"
        :movie-description2-en="''"
        :movie-url="'https://www.youtube.com/embed/9ehffSt9lqM'"
      ></movie-card>
      <movie-card
        :movie-name-ja="$t('movie.yoisa')"
        :movie-name-en="$t('movie.yoisa')"
        :movie-description1-ja="'地元の小学生達の運動会でも大人気！'"
        :movie-description2-ja="'これぞ田川の現代の現代風炭坑節'"
        :movie-description1-en="'Modern Style Tanko Bushi'"
        :movie-description2-en="'Popular at Sports Day'"
        :movie-url="'https://www.youtube.com/embed/WyB5f2I5--0'"
      ></movie-card>
      <movie-card
        :movie-name-ja="$t('movie.chimney')"
        :movie-name-en="$t('movie.chimney')"
        :movie-description1-ja="'田川のシンボル「夫婦煙突」'"
        :movie-description2-ja="'その高さは45.45m 年齢は約110歳'"
        :movie-description1-en="'Couple Chimney is Tagawa\'s Symbol'"
        :movie-description2-en="'Its height is 45.45m. Age is over 100years old.'"
        :movie-url="'https://www.youtube.com/embed/5k4j07CvsVk'"
      ></movie-card>
    </div>
  </div>
</template>

<script>

import TitleLabel from '../../../../../../common/atoms/TitleLabel'
import MovieCard from '../../../../../../common/molecules/card/MovieCard'

export default {
  name: 'MovieSongBoard',
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
