import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/HomeView'
import Team from '@/views/TeamView'
import News from '@/views/NewsView'
import Movie from '@/views/MovieView'
import Stage from '@/views/StageView'
import membersOnly from '@/views/MembersOnlyView'

export default createRouter({
  history: createWebHashHistory(),
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
      return { left: 0, top: 0 }
    }
  }
})
