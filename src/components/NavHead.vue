<!--  -->
<template>
  <div class="nav">
    <!-- 快捷导航 -->
    <nav class="navHead">
      <Logo class="logo"></Logo>
      <div class="navHead_left">
        <ul>
          <li>杂货店欢迎您!</li>
          <li>
            <router-link to="/Login" class="red" v-show="show">会员登录&nbsp;</router-link>
            <router-link to="/register" v-show="show">免费注册</router-link>
          </li>
        </ul>
      </div>
      <div class="navHead_right">
        <ul>
          <router-link to="/Profile">
            <li style="display: block;height: 50px; width: 50px;padding: 0;border-radius: 25px;overflow: hidden;">
              <img :src="$store.state.App.baseURL+'img/avatar/man.jpg'" v-if="$store.state.Profile.Sex=='男'"
                :title="$store.state.Profile.Nickname" style="width: 100%;height: 100%;">
              <img :src="$store.state.App.baseURL+'img/avatar/woman.jpg'" v-else :title="$store.state.Profile.Nickname"
                style="width: 100%;height: 100%;">
            </li>
            <li style="color: #333;" v-if="$store.state.Profile.Nickname">{{$store.state.Profile.Nickname}}
            </li>
            <li style="color: #333;" v-else>{{'杂货店会员'}}
            </li>
          </router-link>

          <li style="padding: 0;">
            <div class=" show_h">
              <router-link to="/Profile"><span class="nav_small"><i class="el-icon-user"></i>我的杂货铺</span></router-link>
              <router-link to="/Profile/History"><span class="nav_small show_c show_con"><i class="el-icon-s-goods"></i>
                  我的足迹</span>
              </router-link>
              <router-link to="/Profile/Collect"><span class="nav_small show_c show_con"><i class="el-icon-s-goods"></i>
                  我的收藏</span>
              </router-link>
            </div>

          </li>
          <li>
            <router-link to="/Car">
              <i class="el-icon-shopping-cart-2"></i>
              我的购物车
            </router-link>
          </li>
          <li>
            <router-link to="/My_order">
              <i class="el-icon-s-order"></i>
              我的订单
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- 快捷导航end -->
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import Logo from '@/components/main/header_h_det/Logo'
  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "NavHead",
    components: {
      Logo
    },
    data() {
      //这里存放数据
      return {
        show: !sessionStorage.getItem('token'),
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>

<style scoped>
  .logo {
    height: 50px;
    width: 66px;
    margin-right: 20px !important;
  }

  .nav {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #eeeeee;
    border-bottom: 1px solid #eee;
  }

  .navHead {
    width: 1200px;
    margin: 0 auto;
    font-size: 12px;
  }

  .navHead_left,
  .navHead_left ul li,
  .navHead_right ul li {
    float: left;
  }

  .navHead_right {
    float: right;
  }

  .navHead_left ul li,
  .navHead_right ul li {
    padding: 0 10px;
  }

  .navHead_left ul :last-child:hover {
    color: #FF0036;
  }


  .red {
    color: #FF0036;
  }

  .nav_small {
    display: block;
    width: 95px;
    height: 50px;
    background-color: #eeeeee;
    padding: 0 10px;
  }

  .show_c {
    display: none;
    position: relative;
  }

  .show_h {
    width: 95px;
    height: 50px;
    position: relative;
  }

  .show_h:hover .show_c {
    display: block;
    z-index: 99;
  }

  .show_con:hover {
    background-color: rgb(163, 157, 157);
  }
</style>