<template>
  <div class="stage-list stage-width">
    <div class="title">
      <div>{{$t('stage.list')}}</div>
      <div class="sub-title">{{$t('stage.supplement')}}</div>
    </div>
    <div class="list" v-for="(stage, index) in stages" :key="index">
      {{ stage.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'StageList',
  data () {
    return {
      stages: [
        {title: '後藤寺パレード'},
        {title: 'グルメ大熱戦'},
        {title: '光雲寺降誕会'},
        {title: '国際車椅子テニス大会福智町国際交流会'},
        {title: '伊田小学校ヨイサさのよい節指導教室'},
        {title: 'まつりIN田川'},
        {title: '春日神幸祭'},
        {title: 'ドリームナイト'},
        {title: '後藤寺校区夜一'},
        {title: '金川校区様フェス'},
        {title: 'I LOVE フクチフェスタ'},
        {title: '大町町納涼まつり'},
        {title: '鎮西校区様フェス'},
        {title: '後藤寺校区様フェス'},
        {title: 'にっぽり炭坑節まつり'},
        {title: '筑豊フェア'},
        {title: '穴生まつり'},
        {title: '福祉まつり'},
        {title: '下弓削田運動会'},
        {title: 'サードマルシェ'},
        {title: 'コールマインフェスティバル'},
        {title: '鎮西同窓会'},
        {title: 'まつりふっとうてん'},
        {title: 'KBCサワダデース'},
        {title: '田川文化連盟芸能発表会やるばい'},
        {title: '来てみんね金川'},
        {title: '伊田商店街いたまち祭り'},
        {title: '平尾台土曜縁日'},
        {title: 'コトコト列車お出迎えパフォーマンス'},
        {title: 'YUKI HAPPY WEDDING'},
        {title: 'グランピングKAWASAKI一周年記念イベント'},
        {title: '福寿会 総会'},
        {title: 'etc.'}
      ]
    }
  }
}
</script>

<style scoped>
.stage-list {
  height: auto;
  background-color: #333333;
  border-radius: 30px;
  margin: 100px auto;
  padding: 0 0 20px;
}
.title {
  font-size: 25px;
  padding: 20px 0 10px;
  border-bottom: solid 2px #1C1B18;
}
.sub-title {
  font-size: 18px;
}
.list {
  text-align: left;
  padding: 10px 0 10px 20px;
  font-size: 20px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .stage-width {
    width: 90%;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .stage-width {
    width: 90%;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .stage-width {
    width: 70%;
  }
}

@media screen and (min-width:960px) {
  .stage-width {
    width: 40%;
  }
}
</style>
