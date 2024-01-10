<template>
  <div v-if="$i18n.locale==='ja'" class="stage-card">
    <div class="stage-name">{{ stageNameJa }}</div>
    <img :src="imageUrl">
    <div class="stage-season">{{$t('stage.season')}} : {{ stageSeasonJa }}</div>
    <div class="stage-venue">{{ stageVenueJa }}</div>
  </div>
  <div v-else-if="$i18n.locale==='en'" class="stage-card">
    <div class="stage-name">{{ stageNameEn }}</div>
    <img :src="imageUrl">
    <div class="stage-season">{{$t('stage.season')}} : {{ stageSeasonEn }}</div>
    <div class="stage-venue">{{ stageVenueEn }}</div>
  </div>
</template>

<script>
export default {
  name: 'StageCard',
  props: {
    stageNameJa: {
      type: String,
      default: null
    },
    stageNameEn: {
      type: String,
      default: null
    },
    stageSeasonJa: {
      type: String,
      default: null
    },
    stageSeasonEn: {
      type: String,
      default: null
    },
    stageVenueJa: {
      type: String,
      default: null
    },
    stageVenueEn: {
      type: String,
      default: null
    },
    stagePicture: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      imageUrl: require('../../../img/' + this.stagePicture)
    }
  }
}
</script>

<style scoped>

.stage-card {
  text-align: center;
}

.stage-name {
  color: rgb(218, 218, 112);
  margin: 0 0 10px;
  padding: 0;
  font-size: 25px;
}
.stage-season{
  margin: 10px 0 10px;
  font-size: 22px;
}
.stage-venue {
  margin: 0 0 10px;
  font-size: 22px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .stage-card {
    margin: 20px 15px;
  }
  img {
    width: 100%;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .stage-card {
    margin: 20px 50px;
  }
  img {
    width: 100%;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .stage-card {
    margin: 20px 50px;
  }
  img {
    width: 400px;
    height: 300px;
  }
}

@media screen and (min-width:960px) {
  .stage-card {
    margin: 20px 50px;
  }
  img {
    width: 400px;
    height: 300px;
  }
}
</style>
