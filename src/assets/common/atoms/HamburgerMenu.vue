<template>
  <div>
    <div class="hamburger-btn" v-on:click='ActiveBtn=!ActiveBtn'>
      <span class="line line-01" v-bind:class="{'btn-line01':ActiveBtn}"></span>
      <span class="line line-02" v-bind:class="{'btn-line02':ActiveBtn}"></span>
      <span class="line line-03" v-bind:class="{'btn-line03':ActiveBtn}"></span>
    </div>
    <!--サイドバー-->
    <transition name="menu">
      <div class="menu" v-show="ActiveBtn" v-on:click='ActiveBtn=!ActiveBtn'>
        <ul>
          <li v-for="(item, index) in items" :key=index>
            <router-link :to=item.path>
              {{ $t(item.title)}}
            </router-link>
          </li>
          <li>
            <change-language></change-language>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>

import ChangeLanguage from './ChangeLanguage'

export default {
  name: 'HamburgerMenu',
  components: {
    ChangeLanguage
  },
  data () {
    return {
      items: [
        { title: 'header.home', path: '/' },
        { title: 'header.team', path: '/team' },
        { title: 'header.news', path: '/news' },
        { title: 'header.movie', path: '/movie' },
        { title: 'header.stage', path: '/stage' }
      ],
      ActiveBtn: false
    }
  }
}
</script>

<style scoped>
.hamburger-btn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 50;
  background-color: #e8f15c;
  border-radius: 50%;
}
.hamburger-btn .line {
  position: absolute;
  top: 0;
  height: 2px;
  background: grey;
  text-align: center;
}
.hamburger-btn .line-01 {
  top: 16px;
  left: 15px;
  transition: 0.4s ease;
  width: 20px;
}
.hamburger-btn .line-02 {
  top: 26px;
  left: 12px;
  transition: 0.4s ease;
  width: 25px;
}
.hamburger-btn .line-03 {
  top: 36px;
  left: 15px;
  transition: 0.4s ease;
  width: 20px;
}
.btn-line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}
.btn-line02 {
  transition: 0.4s ease;
  opacity: 0;
}
.btn-line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}
/*サイドバー*/
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
.menu-leave, .menu-enter-to{
  opacity: 1;
}
.menu li {
  list-style: none;
  line-height: 1;
  padding: 1rem;
}
.menu {
  background-color: rgba(197, 197, 197, 0.771);
  z-index: 30;
  padding: 3rem 1rem;
  position: fixed;
  width: 20rem;
  height: 80rem;
  top: 0;
  right: 0;
}
.menu a {
  color: black;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0 2rem;
}
.menu ul{
  margin: 1rem;
  padding: 0;
}

</style>
