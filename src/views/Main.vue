<!--  -->
<template>

  <body>
    <NavHead></NavHead>
    <header_h></header_h>
    <Topnav></Topnav>
    <Swiper></Swiper>
    <main>
      <Shopping_item></Shopping_item>
    </main>
    <Footer_f></Footer_f>
    <Floor></Floor>
    <Backtop></Backtop>
  </body>

</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavHead from "@/components/NavHead";
  import Swiper from '@/components/main/Swiper'
  import Topnav from '@/components/main/Topnav'
  import Shopping_item from '@/components/main/Shopping_item'
  import Footer_f from '@/components/Footer_f'
  import Floor from '@/components/main/Floor'
  import Backtop from '@/components/Backtop'
  import header_h from '@/components/main/header_h'

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Main",
    components: {
      NavHead,
      Swiper,
      Topnav,
      Shopping_item,
      Footer_f,
      Floor,
      Backtop,
      header_h
    },
    data() {
      //这里存放数据
      return {};
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
  main {
    width: 1200px;
    margin: 0 auto;
  }
</style>