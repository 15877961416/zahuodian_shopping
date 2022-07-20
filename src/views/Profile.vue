<!--  -->
<template>
  <div class="">
    <NavHead></NavHead>
    <div class="profile clearfix">
      <div class="nav">
        <ul>
          <li @click="check_nav">
            <router-link to="/Profile/" :class="{'active':route_name=='Information'}">个人中心
            </router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Profile/Account_set" :class="{'active':route_name=='Account_set' } ">账户设置
            </router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Profile/Collect" :class="{'active':route_name=='Collect'}">我的收藏</router-link>
          </li>
          <li @click="check_nav">
            <router-link to="/Profile/History" :class="{'active':route_name=='History'}">我的足迹
            </router-link>
          </li>
        </ul>
      </div>
      <router-view class="rout" />
    </div>
    <Footer_f></Footer_f>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from "@/components/NavHead";
  import Footer_f from "@/components/Footer_f";

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "",
    components: {
      NavHead,
      Footer_f,
    },
    data() {
      //这里存放数据
      return {
        route_name: this.$route.name,
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
      refresh() {

      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
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
  .profile {
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    /* overflow: hidden; */
  }

  .profile .nav {
    float: left;
    width: 200px;
    background-color: #eeeeee;
    padding: 10px 0;
  }

  .profile .nav ul li {
    margin: 5px 0;
  }

  .profile .nav a {
    display: block;
    height: 55px;
    width: 100%;
    line-height: 55px;
    font-size: 15px;
    color: #111;
  }

  .profile .nav a:hover {
    background-color: #fff;
  }

  .rout {
    float: right;
    width: 990px;
    /* overflow: hidden; */
    min-height: 500px;
  }

  .active {
    background-color: #fff;
  }
</style>