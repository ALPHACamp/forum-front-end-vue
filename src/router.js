import Vue from 'vue'
import Router from 'vue-router'
import Restaurants from './views/Restaurants.vue'
import Layout from './views/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'layout',
      children: [
        {
          path: '/restaurants',
          name: 'restaurant',
          component: Restaurants
        },
        {
          path: '/about',
          name: 'about',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    }
  ]
})
