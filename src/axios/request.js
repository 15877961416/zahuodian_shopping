
import axios from 'axios'
Vue.prototype.$axios = axios;
import Vue from 'vue';
// import router from "../router"

// import store from '../store';
// import router from '.././router'
// import {router} from '../../router/index';
 
// let vm = new Vue();
 
const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
  // headers: {
  //   post: {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'· 
  //   }
  // }
})
 
// 请求拦截
request.interceptors.request.use(config => {
  // 自定义header，可添加项目token
  // if (store.state.app.token) {
  //   config.headers.token = store.state.app.token;
  //   config.headers.timestamp = new Date().getTime();
  // }
  return config;
}, error => {
  return Promise.reject(error);
})
 
// 响应拦截
request.interceptors.response.use(response => {
  // const resCode = response.status;
  // if (resCode === 200) {
  //   return Promise.resolve(response);
  // } else {
  //   return Promise.reject(response);
  // }
  return response;
}, error => {
  // const resCode = error.response.status;
  // switch (resCode) {
  //   case 401:
  //     vm.$Message.error(error.response.data.message);
  //     store.commit('logout', this);
  //     store.commit('clearOpenedSubmenu');
  //     // console.log('token-0', store.state.app.token);
  //     router.replace({
  //       name: 'login'
  //     });
  //     break;
  //   case 404:
  //     vm.$Message.error('网络请求不存在');
  //     break;
  //   case 500:
  //     vm.$Message.error('服务器连接错误');
  //     break;
  //   // 其他状态码错误提示
  //   default:
  //     vm.$Message.error(error.response.data.message);
  // }
  return Promise.reject(error);
})
 
/*
 *封装get方法
 *@param{String} url [请求地址]
 *@param{Object} params 请求参数
 */
export function Get(url, params) {
  return new Promise((resolve, reject) => {
    request.get(url, {
      params: params
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}
 
/**
 *封装post方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Post(url, params) {
  return new Promise((resolve, reject) => {
    request.post(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}
 
/**
 *封装put方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Put(url, params) {
  return new Promise((resolve, reject) => {
    request.put(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}
 
/**
 *封装patch方法
 *@param{String} url 请求地址
 *@param{Object} params 请求参数
 */
export function Patch(url, params) {
  return new Promise((resolve, reject) => {
    request.patch(url, params).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}
 
/**
 *封装delete方法
 *@param{String} url [请求地址]
 *@param{Object} params [请求参数]
 */
export function Delete(url, params) {
  return new Promise((resolve, reject) => {
    request.delete(url, {
      params: params
    }).then((res) => {
      resolve(res.data);
    }).catch((error) => {
      reject(error.data);
    })
  })
}