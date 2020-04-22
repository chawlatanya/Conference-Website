import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import About from '@/components/About'
// import CallForPapers from '@/components/CallForPapers'
import CallForPapers from '@/pages/call-for-papers'
import Committee from '@/components/Committee'
import ContactUs from '@/components/ContactUs'
import Register from '@/components/Register'
import Schedule from '@/components/Schedule'
import Speakers from '@/components/Speakers'
import SupportedBy from '@/components/SupportedBy'
import Homepage from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/call-for-papers',
  //   name: 'CallForPapers',
  //   component: CallForPapers
  // },
  {
    path: '/committee',
    name: 'Committee',
    component: Committee
  }, {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: Speakers
  }
  //  {
  //   path: '/supported-by',
  //   name: 'SupportedBy',
  //   component: SupportedBy
  // }

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
