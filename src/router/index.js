import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../pages/home'
import AccOutsourcing from '../pages/acc-outsourcing'
import AccOoo from '../pages/acc-ooo'
import AccIp from '../pages/acc-ip'
import LegalFailure from '../pages/legal-failure'
import LegalDebts from '../pages/legal-debts'
import LegalLiqudation from '../pages/legal-liqudation'
import RegistrationIp from '../pages/registration-ip'
import RegistrationOoo from '../pages/registration-ooo'
import RegistrationTrademark from '../pages/registration-trademark'
import AboutPage from '../pages/about-page'
import NotFound from '../pages/not-found'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/acc-outsourcing',
    name: 'accOutsourcing',
    component: AccOutsourcing
  },
  {
    path: '/acc-ooo',
    name: 'accOoo',
    component: AccOoo
  },
  {
    path: '/acc-ip',
    name: 'accIp',
    component: AccIp
  },
  {
    path: '/legal-failure',
    name: 'LegalFailure',
    component: LegalFailure
  },
  {
    path: '/legal-debts',
    name: 'LegalDebts',
    component: LegalDebts
  },
  {
    path: '/legal-liqudation',
    name: 'LegalLiqudation',
    component: LegalLiqudation
  },
  {
    path: '/registration-ip',
    name: 'registrationIp',
    component: RegistrationIp
  },
  {
    path: '/registration-ooo',
    name: 'registrationOoo',
    component: RegistrationOoo
  },
  {
    path: '/registration-trademark',
    name: 'RegistrationTrademark',
    component: RegistrationTrademark
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  base: '/',
  routes,
  scrollBehavior () {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
