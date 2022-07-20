import { Get, Post, Put, Patch, Delete } from "@/axios/request";
import { Message } from "element-ui";
import router from "../router"
import store from '../store' 

export default {
  login: (id,pass,params) => {
    return Get('/profile/'+id, params).
      then((res) => {
        if (window.atob(res.Password) === pass) {
          if (res.OnUse) {
            Message({
              message: '恭喜你，登录成功',
              type: 'success'
            });
            // store.commit("SET_token", id)
            sessionStorage.setItem("token", id);
            store.commit("SET_Profile", res)
            // sessionStorage.getItem('token')
  
            setTimeout(() => {
              router.push('/')
            // store.state.App.token=id
              // sessionStorage.setItem("token", "id");
              
            },500)
          }
          else Message({
            message: '对不起，您的账号已冻结',
            type: 'success'
          });{}
        } else {
          Message({
            message: '对不起，密码错误',
            type: 'warning'
          });
        }
      }).catch((err) => {
        Message({
          message: '对不起，账号不存在',
        });
    });
  },
  login1: (id,params) => {
    return Get('/profile/' + id, params)
      // .
      // then((res) => {
      //     sessionStorage.setItem("token", id);
      //     store.commit("SET_Profile", res)
      //     // sessionStorage.getItem('token')
      //     return false
      // }).catch((err) => {
      //   Message({
      //     message: '为您注册账号',
      //   });
        // setTimeout(() => {
        //   this.$api.register(id, {
        //     id: id,
        //     Password: '',
        //     Nickname: '',
        //     Avatar: '',
        //     Sex: '',
        //     Introduce: '',
        //     Address: '',
        //     Birth: '',
        //     Phone_get: '',
        //     Address_get: '',
        //     Emile: '',
        //     Car: [],
        //     History: [],
        //     Collect: [],
        //     Order: [],
        //     My_order: [],
        //   })
        // })
    // });
  },

  register: (id,params) => {
    return Post('/profile', params).then((res) =>
    {
      Message({
        message: '恭喜你，注册成功',
        type: 'success'
      });
      sessionStorage.setItem("token", id);
      store.commit("SET_Profile", res)
      setTimeout(() => {
        // store.commit("SET_token",id)
            router.push('/')
          }, 500)
    }).catch((err) => {
      Message({
        message: '对不起，账号已存在',
        type: 'warning'
      });
    })
  },

  getProfile: (id, params) => {
    return Get('/profile/' + id, params).then((res) => {
      store.commit("SET_Profile", res)
    }).catch((err) => { 
      Message({
        message: '对不起，您尚未登录',
      });
      })
  },

  patchNickname: (id, params) => {
    return Patch('/profile/' + id, params)
  },

  patchSex: (id, params) => {
    return Patch('/profile/' + id, params)
  },

  patchIntroduce: (id, params) => {
    return Patch('/profile/' + id, params)
  },

  patchAddress: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  patchBirth: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  patchPassword: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  patchPhone_get: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  patchAddress_get: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  patchEmile: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  deleteProfile: (id,params) => {
    return Delete('/profile/' + id, params).then(() => {
      router.push('/')
      sessionStorage.clear();
      Message({
        message:"注销成功"
      })
    }).catch(() => {
      Message({
        message:"注销失败"
      })
      // deleteProfile(id,params)
    //   ,
    // {
    //   "id": "18773236732",
    //   "Password": "123456z."
    // }
    })
  },


  getNews: (params) => {
    return Get('/news', params).then((res) => {
      store.commit("SET_News", res)
    })

  },
  getGoods: (params,path) => {
    return Get('/'+path, params).then((res) => {
      return res
    }).catch((err) => {
      console.log(err);
    })
  },
  getGoods_data: (path,id,params) => {
    return Get('/' + path + '/' + id, params).then((res) => {
      // store.dispatch("get_SET_Data_det",res)
      if (res.onsale) store.commit("SET_Data_det", res)
      else 
        Message({
          message: '商品已经下架',
          type:'warn'
        })
      
      // console.log(res);
    return res
    }).catch((err) => {
      console.log(err);
    })
  },

  patchCar: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  patchHistory: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  patchCollect: (id, params) => {
    return Patch('/profile/' + id, params)
  },

  patchMy_order: (id, params) => {
    return Patch('/profile/' + id, params)
  },
  getSearch: (path,value, params) => {
    return Get('/' + path + '?title_like=' + value, params).then((res) => {
     return res
    })
  },
  patchGuess: (id, params) => {
    return Patch('/profile/' + id, params).then((res) => {
      // console.log(res);
    })
  },
  getGuess:(id, params) => {
    return Patch('/profile/' + id, params).then((res) => {
      // console.log(res);
    })
  },

  put_Guess: (paras) => {
    return Get('/Guess', params)
  },


  patchGoods_com: (path, id,params) => {
    return Patch('/'+path+'/' + id, params)
  },
  getGoods_com: (path, id,params) => {
    return Get('/' + path + '/' + id, params).then((res) => {
      return res.comment
    })
  },

  get_order: (params) => {
    return Get('/control/Order',params)
  },
  post_order: (params) => {
    return Patch('/control/Order',params)
  },
  get_sales: (params) => {
    return Get('/control/sales',params)
  },
  post_sales: (params) => {
    return Patch('/control/sales',params)
  },
  get_news: (params) => {
    return Get('/control/news',params)
  },
  post_news: (params) => {
    return Patch('/control/news',params)
  },
}
