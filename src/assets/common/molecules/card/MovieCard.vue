<template>
  <div class="movie-card">
    <iframe class="movie" :src="movieUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div v-if="$i18n.locale==='ja'">
      <div class="movie-name">
        <div>{{ movieNameJa }}</div>
        <div>{{ movieName2Ja }}</div>
      </div>
      <div>{{ movieDescription1Ja }}</div>
      <div>{{ movieDescription2Ja }}</div>
    </div>
    <div v-if="$i18n.locale==='en'">
      <div class="movie-name">
        <div>{{ movieNameEn }}</div>
        <div>{{ movieName2En }}</div>
      </div>
      <div>{{ movieDescription1En }}</div>
      <div>{{ movieDescription2En }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movieNameJa: {
      type: String,
      default: null
    },
    movieName2Ja: {
      type: String,
      default: null
    },
    movieNameEn: {
      type: String,
      default: null
    },
    movieName2En: {
      type: String,
      default: null
    },
    movieDescription1Ja: {
      type: String,
      default: null
    },
    movieDescription2Ja: {
      type: String,
      default: null
    },
    movieDescription1En: {
      type: String,
      default: null
    },
    movieDescription2En: {
      type: String,
      default: null
    },
    movieUrl: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.movie-card {
  margin: 20px 50px;
}
.movie {
  width: 360px;
  height: 195px;
}
.movie-name {
  font-size: 23px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
