<template>
  <div class="main-board main-board-width">
    <title-label
      :title="$t('common.saku_seed')"
      :sub-title="'('+$t('common.how_to_read')+')'"
    ></title-label>
    <p class="description">{{ $t('home.description') }}</p>
  </div>
</template>

<script>

import TitleLabel from '../../../../../common/atoms/TitleLabel'

export default {
  name: 'MainBoard',
  components: {
    TitleLabel
  }
}
</script>

<style scoped>
.description {
  padding: 0;
  margin: 10px;
  text-align: left;
}

.main-board {
  font-weight: bold;
  font-size: 20px;
  margin: 100px auto 150px;
  padding:0;
  line-height: 200%;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .main-board-width {
    width: 95%;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .main-board-width {
    width: 90%;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .main-board-width {
    width: 85%;
  }
}

@media screen and (min-width:960px) {
  .main-board-width {
    width: 50%;
  }
}
</style>
