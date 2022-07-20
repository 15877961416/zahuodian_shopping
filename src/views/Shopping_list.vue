<!--  -->
<template>
  <div class="">
    <NavHead></NavHead>
    <header_h></header_h>
    <main class="shopping_list">
      <div :class="{list_nav:true,fix:top>200}">
        <ul>
          <li @click="check_nav">
            <router-link to="/Shopping_list/" :class="{'active':route_name=='Clothes'}">时尚潮装</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Shopping_list/Shoe" :class="{'active':route_name=='Shoe'}">时尚潮鞋</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Shopping_list/Life" :class="{'active':route_name=='Life'}">生活必备</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Shopping_list/Learn" :class="{'active':route_name=='Learn'}">学习用品</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Shopping_list/Digital" :class="{'active':route_name=='Digital'}">数码产品</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Shopping_list/Sports" :class="{'active':route_name=='Sports'}">运动健康</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Shopping_list/Guess" :class="{'active':route_name=='Guess'}">猜你喜欢</router-link>
          </li>
        </ul>
      </div>
      <transition name="fade">
        <router-view class="list"></router-view>
      </transition>
    </main>
    <Footer_f></Footer_f>
    <Backtop></Backtop>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from "@/components/NavHead";
  import Footer_f from "@/components/Footer_f";
  import header_h from '@/components/main/header_h'
  import Backtop from '@/components/Backtop'
  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Shopping_list",
    components: {
      NavHead,
      Footer_f,
      header_h,
      Backtop
    },
    data() {
      //这里存放数据
      return {
        route_name: this.$route.name,
        top: ''
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      check_nav() {
        this.route_name = this.$route.name
      },
      get_Scroll() {
        // this.top = window.pageYOffset
        this.top = document.documentElement.scrollTop
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      window.addEventListener('scroll', this.get_Scroll)
    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() {
      this.route_name = this.$route.name
    }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  };
</script>
<style scoped>
  main {
    width: 1200px;
    margin: 30px auto;
  }

  .fix {
    position: fixed;
    top: 0;
    z-index: 99;
    margin-top: 0 !important;
  }

  .list_nav {
    width: 1200px;
    height: 45px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 40px;
    background: #eeeeee;
    padding-top: 1px;
  }

  .list_nav a {
    display: block;
    float: left;
    padding: 0 auto;
    overflow: hidden;
    font-size: 14px;
    height: 45px;
    width: 150px;
    line-height: 45px;
    background-color: #eeeeee;
    color: #111;
    border-left: 1px solid #eeeeee;
  }

  .list_nav a:hover {
    background-color: #fff;
    border-top: 1px solid #FF0036;
    color: #FF0036;
  }

  .list {
    width: 1200px;
    margin: 0 auto;
  }

  .active {
    background-color: #fff !important;
    border-top: 1px solid #FF0036;
    color: #FF0036;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .1s;
  }

  .fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }
</style>