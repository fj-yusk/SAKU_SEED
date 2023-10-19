<template>
  <div class="team-box">
    <div class="picture">
      <img :src="imageUrl" :alt="teamName">
    </div>
    <div class="team-intro">
      <div class="team-intro-title">{{ teamName }}</div>
      <p>{{ teamIntro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamDetailCard',
  props: {
    teamName: {
      type: String,
      default: null
    },
    teamIntro: {
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
      imageUrl: require('../../../../img/' + this.teamPicture)
    }
  }
}
</script>

<style scoped>

.team-intro-title {
    text-align: center;
    color: rgb(218, 218, 112);
    font-size: 45px;
    margin: 25px 0 25px;
}
.team-intro {
    text-align: left;
    font-size: 20px;
    margin: 0 30px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
    .team-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 30px 0 40px;
        padding: 0;
    }
    .picture {
        margin: 0 15px;
        text-align: center;
    }
    .picture img {
        width: 100%;
        display: inline-block;
    }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
    .team-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 30px 0 40px;
        padding: 0;
    }
    .picture {
        margin: 0 15px;
        text-align: center;
    }
    .picture img {
        width: 100%;
        display: inline-block;
    }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
    .team-box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 30px 0 40px;
        padding: 0;
    }
    .picture {
        margin: 0 20px;
        text-align: center;
    }
    .picture img {
        width: 400px;
        height: 300px;
        display: inline-block;
    }
}

@media screen and (min-width:960px) {
    .team-box {
        display: flex;
        justify-content: center;
        margin: 100px 100px;
        padding: 0;
    }
    .picture {
        margin: 0 20px;
        text-align: center;
    }
    .picture img {
        width: 400px;
        height: 300px;
        display: inline-block;
    }
}

</style>
