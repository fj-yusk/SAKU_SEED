<template>
  <div>
    <p class="box"></p>
    <div class="footer">
      <div class="footer-inner">
        <div>
          <a href="https://twitter.com/SEED00791990" class="btn-social-square btn-social-square--twitter" target=”_blank”>
            <i class="fab fa-twitter icon01"></i>
          </a>
          <a href="https://www.facebook.com/sousakutankoubushi/" class="btn-social-square btn-social-square--facebook" target=”_blank”>
            <i class="fab fa-facebook-f icon01"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCqfz85OIoXhOLAKkkqP10CQ" class="btn-social-square btn-social-square--youtube" target=”_blank”>
            <i class="fab fa-youtube icon01"></i>
          </a>
        </div>
        <p>{{ $t('footer.f1') }}<span class="break"></span>{{ $t('footer.f2') }}<br>
          {{ $t('footer.f3') }}</p>
      </div>
      <div class="notes">
        <p>{{ $t('footer.note1') }}<span class="break"></span>{{ $t('footer.note2') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
p.box {
  border-bottom: 1px solid #4b4b4b;
}
.footer {
  position: relative;
  background: #1C1B18;
  text-align: left;
}
.footer-inner {
  padding: 20px 0 0 0;
  text-align: center;
  color: rgb(230, 230, 102);
}
.notes {
  margin: 40px 30px 0;
  padding: 0 0 20px 0;
  text-align: center;
  font-size: 12px;
  color: #FFF;
}
.break:before {
  content: "\A";
  white-space: pre;
}
.btn-social-square {
  display: inline-block;
  text-decoration: none;
  width: 50px;
  margin: 5px;
  height: 50px;
  line-height: 50px;
  font-size: 25px;
  color:white;
  border-radius: 12px;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  transition: .3s;
}
.btn-social-square--twitter {
  background: #22b8ff;
}
.btn-social-square--facebook {
  background: #6680d8;
}
.btn-social-square--youtube {
  background: #db233f;
}
.icon01{
  color: #FFF;
}
</style>
