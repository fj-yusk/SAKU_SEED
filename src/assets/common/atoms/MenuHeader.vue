<template>
    <div class="navi">
      <ul class="foo">
        <li class="inline-item" v-for="(item, index) in items" :key=index>
          <router-link :to=item.path>
            {{ $t(item.title)}}
          </router-link>
        </li>
      </ul>
      <a href="#contact"><input type="button" value="お問い合わせ リンク" /></a>
      <input type="button" value="お問い合わせ js" @click="toScroll" />
      <button @click="toggleElement">切り替え</button>
      <div v-if="isElementVisible">この要素を切り替えます</div>
    </div>
</template>

<script>
export default {
  name: 'MenuHeader',
  data () {
    return {
      items: [
        { title: 'header.home', path: '/' },
        { title: 'header.team', path: '/team' },
        { title: 'header.news', path: '/news' },
        { title: 'header.movie', path: '/movie' },
        { title: 'header.stage', path: '/stage' }
      ],
      isElementVisible: false // 初めは非表示
    }
  },
  methods: {
    toScroll () {
      const blueLeft = document.getElementById('contact').getBoundingClientRect().left
      const blueTop = document.getElementById('contact').getBoundingClientRect().top
      window.scrollTo({
        left: blueLeft,
        top: blueTop,
        behavior: 'smooth'
      })
    },
    toggleElement () {
      this.isElementVisible = !this.isElementVisible // 表示と非表示を切り替え
    }
  }
}
</script>

<style scoped>
.navi {
  margin-top: 15px;
}
ul.foo {
  margin: 0 0;
  padding: 0 0;
  text-align: center;
}
ul.foo li {
  display: inline;
  font-size: 23px;
}
ul.foo li:first-child {
  margin-left: 0;
  padding-left: 0;
  border-left: 0;
}
.inline-item::before {
  content: "/";
  margin-left: .5em;
  margin-right: .5em;
}
.inline-item:first-child::before {
  content: none;
}
.inline-item a {
  text-decoration: none;
}
</style>
