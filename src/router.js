import Vue from 'vue'
import Router from 'vue-router'
import Restaurants from './views/Restaurants.vue'
import Layout from './views/Layout.vue'
import SignIn from './views/SignIn.vue'
import NotFound from './views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Layout,
      name: 'layout',
      redirect: '/restaurants',
      children: [
        {
          path: '/restaurants',
          name: 'restaurants',
          component: Restaurants
        },
        {
          path: '/restaurants/feeds',
          name: 'restaurants-feeds',
          component: () => import('./views/RestaurantsFeeds.vue')
        },
        {
          path: '/restaurants/top',
          name: 'restaurants-tops',
          component: () => import('./views/RestaurantsTop.vue')
        },
        {
          path: '/restaurants/:id',
          name: 'restaurants-show',
          component: () => import('./views/RestaurantsShow.vue')
        },
        {
          path: '/users/top',
          name: 'users-top',
          component: () => import('./views/UsersTop.vue')
        },
        {
          path: '/users/:id',
          name: 'users-show',
          component: () => import('./views/UsersShow.vue')
        },
        {
          path: '/users/:id/edit',
          name: 'users-edit',
          component: () => import('./views/UsersEdit.vue')
        },
        {
          path: '/admin/restaurants',
          name: 'admin-restaurants',
          component: () => import('./views/AdminRestaurants.vue')
        },
        {
          path: '/admin/restaurants/:id/edit',
          name: 'admin-restaurants-edit',
          component: () => import('./views/AdminRestaurantsEdit.vue')
        },
        {
          path: '/admin/restaurants/:id/show',
          name: 'admin-restaurants-show',
          component: () => import('./views/AdminRestaurantsShow.vue')
        },
        {
          path: '/admin/categories',
          name: 'admin-categories',
          component: () => import('./views/AdminCategories.vue')
        },
        {
          path: '/admin/categories/:id/edit',
          name: 'admin-categories-edit',
          component: () => import('./views/AdminCategoriesEdit.vue')
        },
        {
          path: '/admin/users/',
          name: 'admin-users',
          component: () => import('./views/AdminUsers.vue')
        }
      ]
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/SignUp.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
