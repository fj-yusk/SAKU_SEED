<template>
  <div class="home">
    <div class="home-bg">
      <img src="../../../img/main_picture2.jpg" />
    </div>
    <div class="home-intro">
      <div>{{ message1 }}</div>
      <div>{{ message2 }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCard',
  props: {
    message1: {
      type: String,
      default: null
    },
    message2: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  position: relative;
}
.home-bg {
  background-size: cover;
  opacity: 0.4;
  margin-bottom: 100px;
  padding:0;
}
.home-bg img {
    width: 100%;
    height: 400px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
    .home-intro {
        position: absolute;
        font-size: 40px;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        text-align: center;
        width: 70%;
    }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
    .home-intro {
        position: absolute;
        font-size: 50px;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        text-align: center;
        width: 70%;
    }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
    .home-intro {
        position: absolute;
        font-size: 60px;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        text-align: center;
        width: 70%;
    }
}

@media screen and (min-width:960px) {
    .home-bg img {
        width: 100%;
        height: 600px;
    }
    .home-intro {
        position: absolute;
        font-size: 70px;
        top: 30%;
        left: 20%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        line-height: 170%;
        text-align: left;
    }
}
</style>
