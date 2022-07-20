<!--  -->
<template>
  <div>
    <div v-for="(item,index) in $store.state.Data_det.comment">
      <div class="com_item">
        <span><img :src="$store.state.App.baseURL+item.Avatar" alt=""></span>
        <h2>{{item.nickname}}</h2>
        <p>{{item.comment}}</p>
        <i>{{item.time}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    name: "s_com",
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
  .com_item {
    padding-left: 15px;
    border-bottom: 2px solid #eeeeee;
    text-align: left;
    overflow: hidden;
    padding: 10px 0 10px 15px;
  }

  .com_item span {
    display: inline-block;
    text-align: center;
    height: 50px;
    width: 50px;
    background-color: pink;
    vertical-align: middle;
    border-radius: 25px;
    overflow: hidden;
  }

  .com_item span img {
    width: 100%;
    height: 100%;
  }

  .com_item h2 {
    display: inline-block;
    margin-left: 15px;
    line-height: 20px;
    font-size: 15px;
    color: #111;
  }

  .com_item p {
    display: inline-block;
    margin-left: 50px;
  }

  .com_item i {
    float: right;
    margin-right: 10px;
    margin-top: 5px;
  }
</style>