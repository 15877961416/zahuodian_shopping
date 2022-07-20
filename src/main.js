// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/base.css'

Vue.config.productionTip = false


import ElementUI, { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import axios from 'axios'
Vue.prototype.$axios = axios;
// axios.defaults.baseURL = '/message'
import api from './axios/index'
Vue.prototype.$api = api; 


import Vuex from 'vuex'
import store from './store' //vuex存储文件
Vue.use(Vuex)

router.beforeEach((to,from,next)=>{
  // const isAuth = localStorage.getItem('token')
  // const isAuth = store.state.App.token

  const isAuth =sessionStorage.getItem('token')
  // console.log(isAuth)
  // console.log(store.state.App.token)
  if ((to.path == '/Profile' || to.path == '/Car' || to.path == '/Order' || to.path == '/My_order') && !isAuth) {
    Message({
      message: '对不起，请登录',
    });
      next({path:'/login'})
  } else {
      document.documentElement.scrollTop = 0
  // firefox
      document.documentElement.scrollTop = 0
  // safari
      window.pageYOffset = 0
      next()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})




