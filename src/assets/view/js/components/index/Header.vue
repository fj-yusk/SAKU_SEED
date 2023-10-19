<template>
  <div ref="getParentWidth">
    <div class="str-header" >
      <div v-if="MenuHeader">
        <change-language></change-language>
        <header-title :menu-flag="MenuHeader"></header-title>
      </div>
      <div v-else>
        <header-title :menu-flag="MenuHeader"></header-title>
      </div>
    </div>
  </div>
</template>

<script>

import HeaderTitle from '../../../../common/atoms/HeaderTitle'
import ChangeLanguage from '../../../../common/atoms/ChangeLanguage'

export default {
  name: 'Header',
  components: {
    HeaderTitle,
    ChangeLanguage
  },
  data () {
    return {
      MenuHeader: true
    }
  },
  mounted () {
    // 要素の幅を取得するメソッド
    this.getTargetWidth()
    // ユーザーがウィンドウサイズを変更したら実行されるようにする
    window.addEventListener('resize', this.getTargetWidth)
  },
  methods: {
    getTargetWidth () {
      let targetWidth = this.$refs.getParentWidth.clientWidth
      if (targetWidth <= 1100) {
        this.MenuHeader = false
      } else if (targetWidth > 1100) {
        this.MenuHeader = true
      }
    }
  }
}

</script>

<style scoped>
/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .str-header {
    padding: 15px 5px 15px;
    margin: 0 auto;
    position: relative;
    background: #FBCA4D;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .str-header {
    padding: 15px 5px 15px;
    margin: 0 auto;
    position: relative;
    background: #FBCA4D;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .str-header {
    padding: 15px 5px 15px;
    margin: 0 auto;
    position: relative;
    background: #FBCA4D;
  }
}

@media screen and (min-width:960px) {
  .str-header {
    padding: 5px 5px 15px;
    margin: 0 auto;
    position: relative;
    background: #FBCA4D;
  }
}
</style>
