import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import Personal from '@/components/personal'

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
        }
      ],
    },
    {
      path: '/',
      redirect: '/main/personal'
    },
    {
      path: '*',
      redirect: '/main/personal'
    }
  ]
})
