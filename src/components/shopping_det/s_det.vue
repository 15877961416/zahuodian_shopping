<!--  -->
<template>
  <div class="s_det">
    <div class="nav">
      <ul>
        <li @click="check_nav" :class="{active:nav_index==1}">
          宝贝详细
        </li>
        <li @click="check_nav" :class="{active:nav_index==0}">
          评价
        </li>
      </ul>
    </div>
    <!-- <router-view></router-view> -->
    <s_detail v-if="nav_index"></s_detail>
    <s_com v-else></s_com>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import s_detail from '@/components/shopping_det/s_detail'
  import s_com from '@/components/shopping_det/s_com'

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "s_det",
    components: {
      s_detail,
      s_com
    },
    data() {
      //这里存放数据
      return {
        nav_index: 1,
      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      check_nav() {
        this.nav_index = !this.nav_index
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
  .s_det {
    float: left;
    width: 100%;
    border: 2px solid #eeeeee;
    margin-top: 40px;
  }

  .nav {
    width: 100%;
    height: 60px;
    background-color: #eeeeee;
  }

  .nav ul li {
    float: left;
    font-size: 18px;
    line-height: 60px;
    height: 60px;
    width: 200px;
    color: #111;
    text-align: center;
    font-weight: 200;
  }

  .nav ul li:hover {
    background-color: #fff;
    border-top: 2px solid #FF0036;
    color: #FF0036;
  }

  .active {
    background-color: #fff;
    border-top: 2px solid #FF0036;
    color: #FF0036;
  }
</style>