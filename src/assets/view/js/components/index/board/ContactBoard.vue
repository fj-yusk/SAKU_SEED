<template>
  <div class="margin">
    <title-label
      :title="$t('contact.title')"
    ></title-label>
    <p class="supplement supplement-width">{{ $t('contact.supplement1') }}</p>
    <p class="supplement supplement-width">{{ $t('contact.supplement2') }}</p>
    <p class="supplement supplement-width">{{ $t('contact.supplement3') }}</p>
    <p class="supplement supplement-width">{{ $t('contact.supplement4') }}</p>
    <p class="supplement supplement-width">{{ $t('contact.supplement5') }}</p>
    <contact-button></contact-button>
  </div>
</template>

<script>

import TitleLabel from '../../../../../common/atoms/TitleLabel'
import ContactButton from '../../../../../common/atoms/ContactButton'

export default {
  name: 'ContactBoard',
  components: {
    TitleLabel,
    ContactButton
  }
}
</script>

<style scoped>
.margin {
  margin: 0 auto 130px;
}
.supplement {
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .supplement-width {
    width: 95%;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .supplement-width {
    width: 95%;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .supplement-width {
    width: 50%;
  }
}

@media screen and (min-width:960px) {
  .supplement-width {
    width: 50%;
  }
}
</style>
