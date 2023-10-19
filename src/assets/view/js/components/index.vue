<template>
  <div class="wrap">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './index/Header'
import Home from './index/Home'
import Footer from './index/Footer'

export default {
  name: 'index',
  components: {
    Header,
    Home,
    Footer
  },
  head: {
    title: {
      inner: '月咲SEED公式HP',
      separator: '|',
      complement: 'ホーム'
    }
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
