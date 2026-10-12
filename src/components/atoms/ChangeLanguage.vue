<template>
  <div class="language">
    <a href="#" v-on:click.prevent="handleClick_changeLanguage('ja')">{{ $t('header.japanese')}}</a>
    <span>/</span>
    <a href="#" v-on:click.prevent="handleClick_changeLanguage('en')">{{ $t('header.english') }}</a>
  </div>
</template>

<script>
export default {
  name: 'ChangeLanguage',
  methods: {
    handleClick_changeLanguage (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>
@media screen and (max-width:1100px) {
  .language {
    text-align: center;
    margin: 0 0 0 auto;
    padding: 0 2rem;
    color: black;
    font-size: 1.2rem;
  }
}
@media screen and (min-width:1101px) {
  .language {
    text-align: right;
    margin: 0 0 0 auto;
    padding: 0 10px;
    color: black;
    font-size: 18px;
  }
}
.language a {
  text-decoration: none;
  color: black;
}
</style>
