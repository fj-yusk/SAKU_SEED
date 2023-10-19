<template>
  <div class="header-inner">
    <div class="header">
      <div class="header-name">{{ $t('common.saku_seed')}}</div>
      <div class="header-sub-name">{{ $t('common.sub_name') }}</div>
    </div>
    <div v-if="menuFlag">
      <menu-header></menu-header>
    </div>
    <div v-else>
      <hamburger-menu></hamburger-menu>
    </div>
  </div>
</template>

<script>

import MenuHeader from './MenuHeader'
import HamburgerMenu from './HamburgerMenu'

export default {
  name: 'HeaderTitle',
  components: {
    MenuHeader,
    HamburgerMenu
  },
  props: {
    menuFlag: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

.header-inner {
  position: relative;
  color: black;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header-name {
  font-size: 55px;
}
.header-sub-name {
  font-size: 25px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .header-inner {
    position: relative;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }

  .header-name {
    font-size: 50px;
  }
  .header-sub-name {
    font-size: 20px;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .header-inner {
    position: relative;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .header-inner {
    position: relative;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

@media screen and (min-width:960px) {
  .header {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .header-name {
    font-size: 65px;
  }
  .header-sub-name {
    font-size: 25px;
    padding: 0 0 15px 10px;
  }
}

</style>
