// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueHead from 'vue-head'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './assets/view/js/config/messages'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueHead)

const i18n = new VueI18n({
  locale: 'ja',
  messages: messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n: i18n,
  components: { App },
  template: '<App/>'
})
