import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import Restaurants from '@/views/Restaurants.vue'
import Layout from '@/views/Layout.vue'
import SignIn from '@/views/SignIn.vue'
import NotFound from '@/views/404.vue'

Vue.use(Router)

const router = new Router({
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
          name: 'restaurant-show',
          component: () => import('./views/RestaurantShow.vue')
        },
        {
          path: '/restaurants/:id/dashboard',
          name: 'restaurant-dashboard',
          component: () => import('./views/RestaurantDashboard.vue')
        },
        {
          path: '/users/top',
          name: 'users-top',
          component: () => import('./views/UsersTop.vue')
        },
        {
          path: '/users/:id',
          name: 'user-show',
          component: () => import('./views/UserShow.vue')
        },
        {
          path: '/users/:id/edit',
          name: 'user-edit',
          component: () => import('./views/UserEdit.vue')
        },
        {
          path: '/admin',
          exact: true,
          redirect: '/admin/restaurants'
        },
        {
          path: '/admin/restaurants',
          name: 'admin-restaurants',
          component: () => import('./views/AdminRestaurants.vue')
        },
        {
          path: '/admin/restaurants/new',
          name: 'admin-restaurant-new',
          component: () => import('./views/AdminRestaurantNew.vue')
        },
        {
          path: '/admin/restaurants/:id/edit',
          name: 'admin-restaurant-edit',
          component: () => import('./views/AdminRestaurantEdit.vue')
        },
        {
          path: '/admin/restaurants/:id/show',
          name: 'admin-restaurant-show',
          component: () => import('./views/AdminRestaurantShow.vue')
        },
        {
          path: '/admin/categories',
          name: 'admin-categories',
          component: () => import('./views/AdminCategories.vue')
        },
        {
          path: '/admin/categories/:id/edit',
          name: 'admin-category-edit',
          component: () => import('./views/AdminCategoryEdit.vue')
        },
        {
          path: '/admin/users/',
          name: 'admin-users',
          component: () => import('./views/AdminUsers.vue')
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
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const isAuthenticated = await store.dispatch('verify')
  if (!isAuthenticated && to.name !== 'signin') {
    next('/signin')
  }

  next()
})

export default router
