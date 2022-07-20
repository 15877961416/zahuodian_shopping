<!--  -->
<template>
  <router-link to="/Car" class="shopping_car">
    <b></b>
    <em>我的购物车</em>
  </router-link>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: 'Shopping_car',
    components: {},
    data() {
      //这里存放数据
      return {

      };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style scoped>
  .shopping_car {
    float: right;
    position: relative;
    top: 4px;
    width: 140px;
    height: 40px;
    margin: auto;
    line-height: 40px;
    overflow: hidden;
    border: 1px solid #FF0036;
  }

  .shopping_car b {
    display: block;
    float: left;
    width: 15px;
    height: 15px;
    margin-top: 11px;
    margin-left: 16px;
    background: url(../../../assets/img/shopping_cart.png) no-repeat center;
  }

  .shopping_car em {
    font-size: 14px;
    color: #666;
    line-height: 30px;
    margin-left: 3px;
    transition: 0.1;
    cursor: pointer
  }

  .shopping_car:hover em {
    color: #FF0036
  }

  .shopping_car:hover b {
    background: url(../../../assets/img/shopping_cart1.png) no-repeat center;
  }
</style>