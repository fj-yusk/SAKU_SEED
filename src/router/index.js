import Vue from 'vue'
import Router from 'vue-router'
import Index from '../assets/view/js/components/index'
import Team from '../assets/view/js/components/team'
import News from '../assets/view/js/components/news'
import Movie from '../assets/view/js/components/movie'
import Stage from '../assets/view/js/components/stage'
import membersOnly from '../assets/view/js/components/membersOnly'

Vue.use(Router)

const router = new Router({
  // ルート設定
// mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/stage',
      name: 'stage',
      component: Stage
    },
    {
      path: '/membersOnly',
      name: 'membersOnly',
      component: membersOnly
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  console.log('------------beforeEach')
  // TODO カスタムモードを使わない場合は、ここをコメントアウトすること + review.jsの修正
  const fullstar = new CustomEvent('fullstar_spa')
  window.dispatchEvent(fullstar)
  // TODO ここまで

  next() // ルート遷移を許可
})

export default router
