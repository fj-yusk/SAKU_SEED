<template>
  <div class="team-card">
    <img :src="imageUrl">
    <div class="team-name">〜 {{ teamName }} 〜</div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    teamName: {
      type: String,
      default: null
    },
    teamPicture: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      imageUrl: require('../../../img/' + this.teamPicture)
    }
  }
}
</script>

<style scoped>

.team-name {
  font-size: 30px;
  margin-top: 20px;
  text-align: center;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .team-card {
    margin: 20px 15px;
  }
  img {
    width: 100%;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .team-card {
    margin: 20px 50px;
  }
  img {
    width: 100%;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .team-card {
    margin: 20px 50px;
  }
  img {
    width: 400px;
    height: 300px;
  }
}

@media screen and (min-width:960px) {
  .team-card {
    margin: 20px 50px;
  }
  img {
    width: 400px;
    height: 300px;
  }
}

</style>
