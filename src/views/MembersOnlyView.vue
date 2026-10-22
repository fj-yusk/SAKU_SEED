<template>
  <div class="wrap">
    <Header></Header>
    <title-label
      :title="'メンバー専用'"
    ></title-label>
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
      <movie-card
        :movie-url="'https://www.youtube.com/embed/Tp2kMRZdags?loop=1&playlist=Tp2kMRZdags'"
      ></movie-card>
      <movie-card
        :movie-url="'https://www.youtube.com/embed/mRSpPDWQZpg?loop=1&playlist=mRSpPDWQZpg'"
      ></movie-card>
      <movie-card
        :movie-url="'https://www.youtube.com/embed/1d1uNHkIQJs?loop=1&playlist=1d1uNHkIQJs'"
      ></movie-card>
      <movie-card
        :movie-url="'https://www.youtube.com/embed/J6REHFlgV5M?loop=1&playlist=J6REHFlgV5M'"
      ></movie-card>
    </div>
    <div class="rule-intro">
      <div class="rule-title">お願い</div>
      <p>1. 積極的な出演参加お願い致します(重要)</p>
      <p>2. 出演出席回答は必須</p>
      <p>3. 会費は必ず納入お願い致します</p>
      <p>4. メンバー以外の控室への入室は禁止(保護者1名のみ可)</p>
      <p>5. メンバー外には、このページの共有はお控えください</p>
      <p>6. 衣装は大切に! (退会時、返却する必要があります)</p>
      <p>7. HP及びSNS投稿のための写真共有にご協力よろしくお願い致します</p>
      <p>8. 役員は、HP, スプレッドーシートに間違いがないかご確認よろしくお願い致します</p>
    </div>
    <!-- 入力アシスト検証用フォーム（送信はしない） -->
    <form id="fs-test-form" class="test-form" @submit.prevent>
      <div class="rule-title">お問い合わせ（テスト用）</div>
      <p class="test-form-row">
        <label for="fs-name">氏名（必須）</label>
        <input id="fs-name" name="fs-name" type="text" class="test-form-input">
      </p>
      <p class="test-form-row">
        <label for="fs-kana">フリガナ（全角カタカナのみ）</label>
        <input id="fs-kana" name="fs-kana" type="text" class="test-form-input">
      </p>
      <p class="test-form-row">
        <label for="fs-zip">郵便番号（半角数字7桁）</label>
        <input id="fs-zip" name="fs-zip" type="text" class="test-form-input">
      </p>
      <p class="test-form-row">
        <label for="fs-company">会社名（「株」は入力不可）</label>
        <input id="fs-company" name="fs-company" type="text" class="test-form-input">
      </p>
      <p class="test-form-row">
        <label for="fs-message">お問い合わせ内容（10〜100文字）</label>
        <textarea id="fs-message" name="fs-message" rows="4" class="test-form-input"></textarea>
      </p>
      <p class="test-form-row">
        <button id="fs-submit" type="submit" class="test-form-submit">送信（テスト用・送信されません）</button>
      </p>
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TitleLabel from '@/components/atoms/TitleLabel'
import MovieCard from '@/components/molecules/card/MovieCard'

export default {
  name: 'membersOnly',
  components: {
    Header,
    Footer,
    TitleLabel,
    MovieCard
  },
  setup () {
    useHead({ title: '月咲SEED公式HP | メン限' })
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
.test-form {
  text-align: left;
  font-size: 20px;
  margin: 50px 30px 100px;
}
.test-form-row {
  display: flex;
  flex-direction: column;
  max-width: 480px;
}
.test-form-input {
  font-size: 16px;
  padding: 6px;
}
.test-form-submit {
  font-size: 16px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
