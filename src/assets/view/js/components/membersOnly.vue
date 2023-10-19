<template>
  <div class="wrap">
    <Header></Header>
    <title-label
      :title="'メンバー専用'"
    ></title-label>
    <Schedule
      :title="$t('common.saku_seed')"
      :sub_title="'(リンクから調整さんへ飛べます)'"
      :schedules="saku_seed"
      :members="true"
    ></Schedule>
    <Schedule
      :title="$t('common.diggy_dan')"
      :sub_title="'(リンクから調整さんへ飛べます)'"
      :schedules="diggy_dan"
      :members="true"
    ></Schedule>
    <iframe src="https://calendar.google.com/calendar/embed?src=voqtn0tt17hl3jginlbc0h92vo%40group.calendar.google.com&ctz=Asia%2FTokyo" class="calendar" frameborder="0" scrolling="no"></iframe>
    <div class="movie-all">
      <movie-card
        :movie-url="'https://www.youtube.com/embed/D9lU96O4kyc?loop=1&playlist=D9lU96O4kyc'"
      ></movie-card>
      <movie-card
        :movie-url="'https://www.youtube.com/embed/Eq6yZaiwxiY?loop=1&playlist=Eq6yZaiwxiY'"
      ></movie-card>
      <movie-card
        :movie-url="'https://www.youtube.com/embed/OsUoRqx_vSg?loop=1&playlist=OsUoRqx_vSg'"
      ></movie-card>
      <movie-card
        :movie-url="'https://www.youtube.com/embed/KyCaZ7wFl8A?loop=1&playlist=KyCaZ7wFl8A'"
      ></movie-card>
      <movie-card
        :movie-url="'https://www.youtube.com/embed/W75mL19VuQo?loop=1&playlist=W75mL19VuQo'"
      ></movie-card>
    </div>
    <div class="rule-intro">
      <div class="rule-title">お願い</div>
      <p>1. 積極的な出演参加お願い致します(重要)</p>
      <p>2. 調整さん回答は必須(不参加の場合のコメントも必須)</p>
      <p>3. 会費は必ず納入お願い致します</p>
      <p>4. メンバー以外の控室への入室は禁止(保護者1名のみ可)</p>
      <p>5. メンバー外には、このページの共有はお控えください</p>
      <p>6. 衣装は大切に! (退会時、返却する必要があります)</p>
      <p>7. HP及びSNS投稿のための写真共有にご協力よろしくお願い致します</p>
      <p>8. 役員は、HP, 調整さん, カレンダーに間違いがないかご確認よろしくお願い致します</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './index/Header'
import Schedule from '../../../common/molecules/Schedule'
import Footer from './index/Footer'
import TitleLabel from '../../../common/atoms/TitleLabel'
import MovieCard from '../../../common/molecules/card/MovieCard'

export default {
  name: 'membersOnly',
  components: {
    Header,
    Schedule,
    Footer,
    TitleLabel,
    MovieCard
  },
  head: {
    title: {
      inner: '月咲SEED公式HP',
      separator: '|',
      complement: 'メン限'
    }
  },
  data () {
    return {
      saku_seed: [
        {title: '練習日', date: '月2回開催', link: 'https://chouseisan.com/s?h=320dfe01d36746359749359500a8caa9'},
        {title: '役員ミーティング', date: '月1回開催', link: 'https://chouseisan.com/s?h=8a0b2b3fde32451686991ac23c7cd7dc'},
        {title: '田川市政80周年記念式典', date: '11/3(金)', link: 'https://chouseisan.com/s?h=201fb604f70c4052b4b64c300eb3beec'},
        {title: 'コールマインフェスティバル', date: '11/4(土)〜5(日)', link: 'https://chouseisan.com/s?h=7dbdb0a42d1e420d9bf5d63e1c605ab3'},
        {title: 'まつりふっとうてん', date: '11/12(日)', link: 'https://chouseisan.com/s?h=090f2a81a4f94fb0b1f2ba2655c228ea'}
      ],
      diggy_dan: [
        {title: '練習日', date: '月2回開催', link: 'https://chouseisan.com/s?h=59967db65b7645f1b36b1dc810285e55'},
        {title: '田川市政80周年記念式典', date: '11/03(金)', link: 'https://chouseisan.com/s?h=439180e1a15a4ca5b3229ca9163dadfb'},
        {title: 'コールマインフェスティバル', date: '11/4(土)〜5(日)', link: 'https://chouseisan.com/s?h=f52cace2dd00416aafe39a4b9d3235a2'},
        {title: 'まつりふっとうてん', date: '11/12(日)', link: 'https://chouseisan.com/s?h=401d9b4ae974425498e7b96370255b15'}
      ]
    }
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
.rule-title {
  color: rgb(218, 218, 112);
  font-size: 45px;
  margin: 25px 0 25px;
}
.rule-intro {
  text-align: left;
  font-size: 20px;
  margin: 0 30px;
}
.movie-all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-around;
  margin-bottom: 100px;
}

/* 〜479px：SP縦
------------------------------ */
@media screen and (min-width:10px) and (max-width:479px) {
  .calendar {
    width:100%;
    height:400px;
    border-width:0;
    margin: 0 0 50px;
  }
}

/* 480px〜599px：SP横
------------------------------ */
@media screen and (min-width:480px) and (max-width:599px) {
  .calendar {
    width:100%;
    height:400px;
    border-width:0;
    margin: 0 0 50px;
  }
}

/* 600px〜959px：タブレット
------------------------------ */
@media screen and (min-width:600px) and (max-width:959px) {
  .calendar {
    width:500px;
    height:300px;
    border-width:0;
    margin: 0 0 50px;
  }
}

@media screen and (min-width:960px) {
  .calendar {
    width:800px;
    height:600px;
    border-width:0;
    margin: 0 0 50px;
  }
}
</style>
