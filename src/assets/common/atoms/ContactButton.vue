<template>
  <div class="contact">
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScP6SgKUp19e-EeJNMc7rZrqf6M0SAuzkuIbailT6dkl47bwA/viewform" class="btn-flat-bottom-border">
      <span class="form">{{ $t('contact.from_here') }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ContactButton'
}
</script>

<style scoped>
.contact {
  margin: 20px 0 30px;
}
.form {
  color: #f5f5f5;
  font-size: 23px;
}
.btn-flat-bottom-border {
  position: relative;
  display: inline-block;
  font-weight: bold;
  padding: 10px 50px 15px;
  text-decoration: none;
  color: #f5f5f5;
  background: #349961;
  transition: .4s;
}
.btn-flat-bottom-border > span {
  border-bottom: solid 2px #FFF;
}
.btn-flat-bottom-border:hover {
  background: #22663f;
}
</style>
