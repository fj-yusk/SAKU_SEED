<template>
  <div class="wrap">
    <Header></Header>
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
import { useHead } from '@unhead/vue'
import Header from '@/components/layout/Header'
import Home from '@/views/boards/HomeBoard'
import Footer from '@/components/layout/Footer'

export default {
  name: 'index',
  components: {
    Header,
    Home,
    Footer
  },
  setup () {
    useHead({ title: '月咲SEED公式HP | ホーム' })
  }
}
</script>

<style scoped>
.wrap {
  overflow: hidden;
}
</style>
