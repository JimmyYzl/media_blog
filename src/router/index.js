import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Article from '@/pages/articlePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      component: Article
    }
  ]
})
