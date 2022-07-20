import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NotFound from '@/views/NotFound'
import Profile from '@/views/Profile'
import Car from '@/views/Car'
import Shopping_det from '@/views/Shopping_det'
import Order from '@/views/Order'
import My_order from '@/views/My_order'

import Information from '@/components/profile/Information'
import Account_set from '@/components/profile/Account_set'
import Collect from '@/components/profile/Collect'
import History from '@/components/profile/History'

import Shopping_list from '@/views/Shopping_list'
import Shoe from '@/components/shopping_list/Shoe'
import Clothes from '@/components/shopping_list/Clothes'
import Life from '@/components/shopping_list/Life'
import Learn from '@/components/shopping_list/Learn'
import Digital from '@/components/shopping_list/Digital'
import Guess from '@/components/shopping_list/Guess'
import Sports from '@/components/shopping_list/Sports'
import Search_data from '@/components/shopping_list/Search_data'

import s_com from '@/components/shopping_det/s_com'
import s_detail from '@/components/shopping_det/s_detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound
   },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      children: [
        {
          path: '/Profile/',
          name: 'Information',
          component: Information,
        },
        {
          path: '/Profile/Account_set',
          name: 'Account_set',
          component: Account_set,
        },
        {
          path: '/Profile/Collect',
          name: 'Collect',
          component: Collect,
        },
        {
          path: '/Profile/History',
          name: 'History',
          component: History,
        },
      ]
   },
    {
      path: '/Car',
      name: 'Car',
      component: Car
    },
    {
      path: '/Shopping_list',
      name: 'Shopping_list',
      component: Shopping_list,
      children: [
        {
        path: '/Shopping_list/Shoe',
        name: 'Shoe',
        component: Shoe,
        },
        {
          path: '/Shopping_list/',
          name: 'Clothes',
          component: Clothes,
        },
        {
          path: '/Shopping_list/Life',
          name: 'Life',
          component: Life,
        },
        {
          path: '/Shopping_list/Learn',
          name: 'Learn',
          component: Learn,
        },
        {
          path: '/Shopping_list/Digital',
          name: 'Digital',
          component:Digital,
        },
        {
          path: '/Shopping_list/Guess',
          name: 'Guess',
          component:  Guess,
        },
        {
          path: '/Shopping_list/Sports',
          name: 'Sports',
          component:  Sports,
        },
        {
          path: '/Shopping_list/Search_data',
          name: 'Search_data',
          component:  Search_data,
        },

      ]
    },
    {
      path: '/Shopping_det/:router_path/:shop_id?',
      name: 'Shopping_det',
      component: Shopping_det,
      children: [
        {
        path: '/Shopping_det/s_com',
        name: 's_com',
        component: s_com,
        },
        {
        path: '/Shopping_det/',
        name: 's_detail',
        component: s_detail,
        }
      ]
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/My_order',
      name: 'My_order',
      component: My_order,
    },
  ]
})
