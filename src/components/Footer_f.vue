<!--  -->
<template>
  <footer>
    <div>
      <p>友情链接：
        <a>vue</a>
        <a>vuex</a>
        <a>javascript</a>
        <a>vue</a>
        <a>vuex</a>
        <a>javascript</a>
        <a>vue</a>
        <a>vuex</a>
        <a>javascript</a>
      </p>
      <p>
        小吉出品，必出精品，本项目为学习所用，如有问题，请指教
      </p>
      <p style="padding-bottom:30px">努力到无能为力，拼命到感到自己</p>
    </div>
  </footer>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "Footer_f",
    components: {},
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
  footer {
    margin-top: 50px;
    border-top: 2px solid #ee4644;
    color: #666;
    background: #eeeeee;
  }

  footer div p {
    text-align: center;
    padding-top: 20px;
    font-size: 12px;
  }

  a {
    margin: 0 5px;
  }
</style>