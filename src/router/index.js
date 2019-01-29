import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  },
  routes
})

export default router
