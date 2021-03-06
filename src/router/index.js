import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Personal from '@/components/personal'

let importPage = page => () => import(`@/pages/${page}`)
let importComponent = page => () => import(`@/components/${page}`)
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/main',
      name: 'main',
      component: main,
      children: [
        {
          path: 'personal',
          component: Personal
        },
        {
          path: 'home',
          component: importPage('home')
        },
        {
          path: 'loading',
          component: importComponent('loading/index')
        },
        {
          path: '404',
          component: importPage('error/404')
        },
      ],
    },
    {
      path: '/',
      redirect: '/main/home'
    },
    {
      path: '*',
      redirect: '/main/404'
    }
  ]
})
