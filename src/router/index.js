import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  ],
  scrollBehavior (to, from, savedPosition) {
    // https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
