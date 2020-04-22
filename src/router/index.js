import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import CallForPapers from '@/components/CallForPapers'
import Committee from '@/components/Committee'
import ContactUs from '@/components/ContactUs'
import Register from '@/components/Register'
import Schedule from '@/components/Schedule'


 import Speakers from '@/components/Speakers'
import SupportedBy from '@/components/SupportedBy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/call-for-papers',
      name: 'CallForPapers',
      component: CallForPapers
    },
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
    },
    {
      path: '/supported-by',
      name: 'SupportedBy',
      component: SupportedBy
    }

  ]
})
