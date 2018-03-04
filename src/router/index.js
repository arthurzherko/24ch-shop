import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/pages/landing'
import Vuejs from '@/pages/vuejs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'landing', component: Landing },
    { path: '/vuejs', name: 'vuejs', component: Vuejs },
  ]
})
