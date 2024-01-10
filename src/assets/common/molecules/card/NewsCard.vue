<template>
  <div class="news-card">
    <img :src="imageUrl">
    <div class="news-date">{{$t('news.update_date')}}：<span>{{ newsDate }}</span></div>
    <div v-if="$i18n.locale==='ja'" class="news-title"><span>{{ newsTitleJa }}</span></div>
    <div v-if="$i18n.locale==='en'" class="news-title"><span>{{ newsTitleEn }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    newsTitleJa: {
      type: String,
      default: null
    },
    newsTitleEn: {
      type: String,
      default: null
    },
    newsDate: {
      type: String,
      default: null
    },
    newsPicture: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      imageUrl: require('../../../img/' + this.newsPicture)
    }
  }
}
</script>

<style scoped>

.news-card {
  text-align: center;
}
.news-title {
  font-size: 22px;
}
.news-date {
  font-size: 22px;
  margin-top: 20px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
    .news-card {
        margin: 20px 15px;
    }
    img {
        width: 100%;
    }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
    .news-card {
        margin: 20px 50px 30px;
    }
    img {
        width: 100%;
    }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
    .news-card {
        margin: 20px 50px 30px;
    }
    img {
        width: 400px;
        height: 300px;
    }
}

@media screen and (min-width:960px) {
    .news-card {
        margin: 20px 50px 30px;
    }
    img {
        width: 400px;
        height: 300px;
    }
}

</style>
